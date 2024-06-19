import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import  Box  from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';
import  Container  from '@mui/material/Container';
import  Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const style = {
  p: 0,
  width: '100%',
  maxWidth: '250px',
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
  display: 'block',
  padding: '4px',
  
};



export default function CustomListWithImage() {

  
    return (
      <Box>
    <List sx={style} aria-label="custom list">
      <ListItem sx={{ '&:hover': { backgroundColor: '#a8c7d8' } }}>
        <ListItemIcon>
          <img src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/m1.svg" alt="Custom Image 1" style={{ width: '24px', height: '24px' }} />
        </ListItemIcon>
        <ListItemText  style={{color:'#3c8bb5'}} primary="Home" />
      </ListItem>
      <Divider component="li" light />
      <ListItem sx={{ '&:hover': { backgroundColor: '#a8c7d8' } }}>
        <ListItemIcon>
          <img src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/m2.svg" alt="Custom Image 2" style={{ width: '24px', height: '24px' }} />
        </ListItemIcon>
        <ListItemText  style={{color:'#3c8bb5'}} primary="WorkSpace" />
      </ListItem>
      <Divider component="li" light />
      <ListItem sx={{ '&:hover': { backgroundColor: '#a8c7d8' } }}>
        <ListItemIcon>
          <img src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/m3.svg" alt="Custom Image 2" style={{ width: '24px', height: '24px' }} />
        </ListItemIcon>
        <ListItemText style={{color:'#3c8bb5'}} primary="Policies & Procedure" />
      </ListItem>
      <Divider component="li" light />
      <ListItem sx={{ '&:hover': { backgroundColor: '#a8c7d8' } }}>
        <ListItemIcon>
          <img src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/m4.svg" alt="Custom Image 2" style={{ width: '24px', height: '24px' }} />
        </ListItemIcon>
        <ListItemText style={{color:'#3c8bb5'}} primary="Content Editor" />
      </ListItem>
      <Divider component="li" light />
      <ListItem sx={{ '&:hover': { backgroundColor: '#a8c7d8' } }}>
        <ListItemIcon>
          <img src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/m5.svg" alt="Custom Image 2" style={{ width: '24px', height: '24px' }} />
        </ListItemIcon>
        <ListItemText style={{color:'#3c8bb5'}} primary="DepartMent" />
      </ListItem>
      <Divider component="li" light />
      <ListItem  sx={{ '&:hover': { backgroundColor: '#a8c7d8' } }}>
        <ListItemIcon>
          <img src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/m6.svg" alt="Custom Image 2" style={{ width: '24px', height: '24px' }} />
        </ListItemIcon>
        <ListItemText  style={{color:'#3c8bb5'}} primary="Quick Links" />
      </ListItem>
      <Divider component="li" light />
      <ListItem  sx={{ '&:hover': { backgroundColor: '#a8c7d8' } }}>
        <ListItemIcon>
          <img src="https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/Shared%20Documents/karthi/assests/img/m7.svg" alt="Custom Image 2" style={{ width: '24px', height: '24px' }} />
        </ListItemIcon>
        <ListItemText style={{color:'#3c8bb5'}} primary="Org Chart" />
      </ListItem>
      <Divider component="li" light />

      <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h5" align="center">
        Poll
        </Typography>
        
          <Box mt={2} >
            <Typography variant="body1">
            Where do we go for team lunch this week Friday?
            </Typography>
          </Box>
          <Box mt={1}  >
            <TextField
              label={<span>A.</span>}
              variant="outlined"
              fullWidth
              sx={{ borderRadius: 0 }}
           
              placeholder='AI Dawaar Restaurant'
            />
          </Box>
          <Box mt={1}>
            <TextField
              label={<span>B.</span>}
              variant="outlined"
              fullWidth
              placeholder='The Beach by mauro Colagrece '
              sx={{ borderRadius: 0 }}
            />
          </Box>
          <Box mt={1} display="flex" justifyContent="center">
            <Button type="submit"  variant="contained" color="primary">
              Submit
            </Button>
          </Box>
      
      </Box>
    </Container>

    </List>


    </Box>

  );
}
