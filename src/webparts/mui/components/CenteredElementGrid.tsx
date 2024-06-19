import { useEffect, useState } from 'react';
import { Box, Container, IconButton, Tabs, Tab, Typography, Link, Grid, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { Web } from "@pnp/sp/webs";
import * as React from 'react';
import "@pnp/sp/presets/all";


interface ListItem {
  Id: number;
  Title: string;
  OrderBy: number;
}

interface ImageItem {
  Title: JSX.Element;
  Id: number;
  icon: string;
  PlaceUnder: {
    Id: number;
  };
}

export default function TabStructure() {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [imageItems, setImageItems] = useState<ImageItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [showFavoritesButton, setShowFavoritesButton] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState<any[]>([]);
  const [manageFavoritesClicked, setManageFavoritesClicked] = useState(false);

  const handleManageFavoritesClick = () => {
    setManageFavoritesClicked(true);
  };

  const handleStopClick = () => {
    setManageFavoritesClicked(false);
  };

  const handleItemClick = (itemId: number | null) => {
    setSelectedItemId(itemId);
    setShowFavoritesButton(itemId === null);
  };

  const fetchFavoriteItems = async () => {
    try {
      const favoriteListEndpoint =
        'https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/_api/web/lists/getbytitle(\'Favorite\')/items';

      const favoriteResponse = await fetch(favoriteListEndpoint, {
        method: 'GET',
        headers: {
          Accept: 'application/json;odata=verbose',
          'Content-Type': 'application/json;odata=verbose',
        },
        credentials: 'include',
      });

      if (!favoriteResponse.ok) {
        throw new Error('Error fetching Favorite list items');
      }

      const favoriteData = await favoriteResponse.json();
      setFavoriteItems(favoriteData.d.results as any[]);
    } catch (error) {
      console.error('Error fetching Favorite list items:', error);
    }
  };

  useEffect(() => {
    const fetchListItems = async () => {
      try {
        const tableheadResponse = await fetch(
          'https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/_api/web/lists/getbytitle(\'tablehead\')/items?$select=Id,Title,OrderBy',
          {
            method: 'GET',
            headers: {
              Accept: 'application/json;odata=verbose',
              'Content-Type': 'application/json;odata=verbose',
            },
            credentials: 'include',
          }
        );

        if (!tableheadResponse.ok) {
          throw new Error('Error fetching tablehead list items');
        }

        const tableheadData = await tableheadResponse.json();
        const sortedListData = tableheadData.d.results.sort((a: { OrderBy: number }, b: { OrderBy: number }) => a.OrderBy - b.OrderBy);
        setListItems(sortedListData as ListItem[]);

        const imagesResponse = await fetch(
          'https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/_api/web/lists/getbytitle(\'tabledata\')/items?$select=Id,icon,PlaceUnder/Id,Title&$expand=PlaceUnder',
          {
            method: 'GET',
            headers: {
              Accept: 'application/json;odata=verbose',
              'Content-Type': 'application/json;odata=verbose',
            },
            credentials: 'include',
          }
        );

        if (!imagesResponse.ok) {
          throw new Error('Error fetching Images list items');
        }

        const imagesData = await imagesResponse.json();
        setImageItems(imagesData.d.results as ImageItem[]);
      } catch (error) {
        console.error('Error fetching list items:', error);
      }
    };

    fetchListItems();
  }, []);

  const getRelatedImages = () => {
    if (selectedItemId !== null) {
      const relatedImages = imageItems.filter((img) => img.PlaceUnder.Id === selectedItemId);
      return relatedImages.map((img) => (
        <div key={img.Id} className="image-item">
          {!favoriteItems.some((favorite) => favorite.Title === img.Title) && (
            <IconButton
              style={{
                display: manageFavoritesClicked ? 'block' : 'none',
              }}
              onClick={() => handleUploadFavorite(img)}
              color="primary"
            >
              <AddIcon sx={{ alignContent: 'center', width: '82px', height: '22px' }} />
            </IconButton>
          )}
          <img
            className="selected-item-image"
            src={getImageUrl(img.icon)}
            style={{ width: '100px', height: '100px' }}
          />
          {img.Title && <p className="image-title">{img.Title}</p>}
        </div>
      ));
    }
    return null;
  };

  const getImageUrl = (icon: any) => {
    if (!icon) return '';
    const iconObject = JSON.parse(icon || '{}');
    return `https://3c3tsp.sharepoint.com${iconObject.serverRelativeUrl || ''}`;
  };

  const handleUploadFavorite = async (img: ImageItem) => {
    try {
      const isAlreadyFavorite = favoriteItems.some(favorite => favorite.Title === img.Title);

      if (isAlreadyFavorite) {
        console.log('Item already exists in favorites.');
        return;
      }

      const favoriteListEndpoint =
        'https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/_api/web/lists/getbytitle(\'Favorite\')/items';

      const response = await fetch(favoriteListEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json;odata=verbose',
          'Content-Type': 'application/json;odata=verbose',
          'X-RequestDigest': await getRequestDigest(),
        },
        credentials: 'include',
        body: JSON.stringify({
          '__metadata': { 'type': 'SP.Data.FavoriteListItem' },
          'Title': img.Title,
          'ImageUrl': encodeURIComponent(getImageUrl(img.icon)),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error uploading to Favorite list:', errorData);
        throw new Error(`Error uploading to Favorite list. Status: ${response.status}, ${response.statusText}`);
      }

      console.log('Item uploaded to Favorite list');

      fetchFavoriteItems();
    } catch (error) {
      console.error('Error uploading to Favorite list:', error);
    }
  };

  useEffect(() => {
    fetchFavoriteItems();
  }, []);

  const getRequestDigest = async () => {
    const digestEndpoint =
      'https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/_api/contextinfo';

    const digestResponse = await fetch(digestEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json;odata=verbose',
        'Content-Type': 'application/json;odata=verbose',
      },
      credentials: 'include',
    });

    if (!digestResponse.ok) {
      throw new Error('Error getting request digest');
    }

    const digestData = await digestResponse.json();
    return digestData.d.GetContextWebInformation.FormDigestValue;
  };

  const SortableFavoriteList = SortableContainer(({ favoriteItems }: { favoriteItems: any[] }) => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: 0 }}>
      {favoriteItems.map((favorite, index) => (
        <SortableFavoriteItem key={favorite.Id} index={index} favorite={favorite} />
      ))}
    </Box>
  ));
  
  const SortableFavoriteItem = SortableElement(({ favorite }: { favorite: any }) => (
    <Box sx={{ width: 'calc(25% - 10px)', marginBottom: '20px', listStyleType: 'none', position: 'relative' }}>
      <IconButton
        style={{ display: manageFavoritesClicked ? 'block' : 'none', position: 'absolute', top: 0, right: 0 }}
        onClick={() => handleRemoveFavorite(favorite.Id)}
        color="primary"
      >
        <RemoveIcon sx={{ alignContent: 'center', width: '92px', height: '22px' }} />
      </IconButton>
      <img src={decodeURIComponent(favorite.ImageUrl)} style={{ width: '100px', height: '100px' }} />
      <Typography>{favorite.Title}</Typography>
    </Box>
  ));
  
  
  const onSortEndFunction = async ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
    try {
      const newFavoriteItems = [...favoriteItems];
      const draggedItem = newFavoriteItems[oldIndex];
      newFavoriteItems.splice(oldIndex, 1);
      newFavoriteItems.splice(newIndex, 0, draggedItem);
      const updatedFavoriteItems = newFavoriteItems.map((item, index) => ({
        ...item,
        orderby: index 
      }));
      setFavoriteItems(updatedFavoriteItems);
      const NewWeb = Web("https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/");
      await Promise.all(updatedFavoriteItems.map(async (item, index) => {
        try {
          if (item.Id) {
            await NewWeb.lists.getByTitle('Favorite').items.getById(item.Id).update({
              orderby: index 
            });
          } else {
            await NewWeb.lists.getByTitle('Favorite').items.add({
              Title: item.Title,
              ImageUrl: item.ImageUrl, 
              orderby: index
            });
          }
        } catch (error) {
          console.error('Error updating or adding item:', error);
        }
      }));
  
    } catch (error) {
      console.error('Error updating or adding items:', error);
    }
  };
  

  const handleRemoveFavorite = async (favoriteId: number) => {
    try {
      const updatedFavorites = favoriteItems.filter((favorite) => favorite.Id !== favoriteId);
      setFavoriteItems(updatedFavorites);
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper>
      
          <Typography variant="h1" sx={{ paddingLeft: '26px', fontSize: '28px', padding: '12px', color: '#inherit', fontFamily: 'Aulyars', fontStyle: 'italic', fontWeight: 'bold' }}>
            supreme
          </Typography>

          <br /><br />
<br></br>
          {manageFavoritesClicked ? (
            <Link sx={{ position: 'relative', marginLeft: '425px' }} onClick={handleStopClick}>
              Stop
            </Link>
          ) : (
            <Link sx={{ position: 'relative', marginLeft: '425px' }} onClick={handleManageFavoritesClick}>
              Manage Favorites
            </Link>
          )}
            <Tabs
          value={selectedItemId}
          sx={{ alignContent: 'center' }}
          onChange={(event, newValue) => handleItemClick(newValue)}
          aria-label="navigation tabs"
        >
          {listItems.map((item) => (
            <Tab key={item.Id} label={item.Title} value={item.Id} />
          ))}
          <Tab label="Favorites" value={null} />
        </Tabs>

        <br />
        {selectedItemId !== null && (
          <div className="selected-item-details" style={{ display: showFavoritesButton ? 'none' : 'block' }}>
            <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: 0 }}>
              <Grid container spacing={6} sx={{ padding: '60px' }}>
                {getRelatedImages()}
              </Grid>
            </ul>
          </div>
        )}

        <Grid container spacing={6} sx={{ padding: '60px' }}>
          {showFavoritesButton && (
            <SortableFavoriteList favoriteItems={favoriteItems} onSortEnd={onSortEndFunction} />
          )}
        </Grid>
      </Paper>
    </Container>
  );
}
