import React, { Fragment, useState } from 'react';
import TraidingCard from './TraidingCard';
import { makeStyles, Drawer, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  root: {
    height: '87vh',
    overflowX: 'auto',
    position: 'relative',
  },
  drawerPaper: {
    position: 'relative',
  },
  mobileDrawer: {
    width: '80%',
  },
  burger: {
    position: 'absolute',
    left: 12,
  },
}));

interface LeftBarProps {}

const LeftBar: React.FC<LeftBarProps> = ({}) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const barInner = (
    <div className={classes.root}>
      <TraidingCard selected={true} />
      <TraidingCard />
      <TraidingCard />
      <TraidingCard />
      <TraidingCard />
      <TraidingCard />
      <TraidingCard />
      <TraidingCard />
      <TraidingCard />
    </div>
  );

  return (
    <Fragment>
      <Hidden smUp implementation="css">
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.burger}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.mobileDrawer,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {barInner}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        {barInner}
      </Hidden>
    </Fragment>
  );
};

export default LeftBar;
