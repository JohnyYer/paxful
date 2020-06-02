import React from 'react';
import { Grid } from '@material-ui/core';
import Navigation from './components/header/Navigation';
import SubNavigation from './components/header/SubNavigation';
import LeftBar from './components/left-bar/LeftBar';
import Chat from './components/chat/Chat';
import RightBar from './components/right-bar/RightBar';

const App: React.FC = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Navigation />
        <SubNavigation />
      </Grid>
      <Grid item container>
        <Grid item xs={3}>
          <LeftBar />
        </Grid>
        <Grid item xs={6}>
          <Chat />
        </Grid>
        <Grid item xs={3}>
          <RightBar />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
