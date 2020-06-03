import React, { Fragment, useState } from 'react';
import TraidingCard from './TraidingCard';
import { makeStyles, Drawer, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import { allTrades, selectedTrade } from '../../store/selectors';

const useStyles = makeStyles(() => ({
  root: {
    height: '91vh',
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

const LeftBar: React.FC = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const trades = useSelector(allTrades);
  const currentTradeId = useSelector(selectedTrade);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const barInner = (
    <div className={classes.root}>
      {trades.map((trade) => (
        <TraidingCard
          key={trade.id}
          selected={currentTradeId}
          tradeInfo={trade}
        />
      ))}
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
