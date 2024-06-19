import * as React from 'react';
import { Box, Typography, IconButton, Avatar, Badge, List } from '@mui/material';

export default function Elevation() {
  return (
    <div>
      <Box
        sx={{
          background: '#F2F6F8',
          borderRadius: '8px',
          marginBottom: '10px',
          width: '100%',
          maxWidth: '260px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/user.png"
        />
        <Typography> mohammed waasim </Typography>
        <Typography> Project Engineer</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton size="large" color="inherit" aria-label="show 17 new notifications">
            <Badge badgeContent={17} color="error">
              <Avatar
                sx={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '0',
                  margin: '2px',
                }}
                src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/w1.svg"
              />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit" aria-label="show 17 new notifications">
            <Badge badgeContent={17} color="error">
              <Avatar
                sx={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '0',
                  margin: '2px',
                }}
                src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/w2.svg"
              />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit" aria-label="show 17 new notifications">
            <Badge badgeContent={17} color="error">
              <Avatar
                sx={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '0',
                  margin: '2px',
                }}
                src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/w3.svg"
              />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit" aria-label="show 17 new notifications">
            <Badge badgeContent={17} color="error">
              <Avatar
                sx={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '0',
                  margin: '2px',
                }}
                src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/w4.svg"
              />
            </Badge>
          </IconButton>
        </Box>

        <List sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Avatar
            sx={{
              marginLeft: '15px',
              height: '56px',
              width: '56px',
            }}
            src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/progress_bar.png"
          />

          <Avatar
            sx={{
              marginRight: '15px',
              height: '56px',
              width: '56px',
            }}
            src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/progress_bar.png"
          />
        </List>
      </Box>
    </div>
  );
}
