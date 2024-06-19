// Replace the import statements
import * as React from 'react';
import Elevation from "./DashBoard";
import ListDividers from "./Menu";

import PrimarySearchAppBar from './UserInfo';
import { Box } from '@mui/material';
import TabStructure from './CenteredElementGrid';

function mui() {
  return (
    <>
    <section>
    <Box  style={{display:"fixed"}}>
      <PrimarySearchAppBar />

      <Box style={{ display: 'flex', position:'fixed', background: 'skyblue' }}>
        <Box>
          <Elevation />
          <ListDividers />
        </Box>
        <Box  style={{display:'flex'}}>
          <TabStructure />
          
        </Box>
      </Box>
      </Box>
      </section>
    </>
  );
}

export default mui;

