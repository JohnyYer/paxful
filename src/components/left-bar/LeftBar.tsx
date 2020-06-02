import React, { Fragment, useState, useEffect, useRef } from 'react';
import TraidingCard from './TraidingCard';
import { makeStyles, Drawer, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetTrades } from '../../store/trades/thunks';
import { allTrades, selectedTrade } from '../../store/selectors';
import { Trade } from '../../store/trades/types';

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

const LeftBar: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const trades: Trade[] = useSelector(allTrades);
  const currentTradeId = useSelector(selectedTrade);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    dispatch(thunkGetTrades());
  }, []);

  const barInner = (
    <div className={classes.root}>
      {trades.map((trade) => (
        <TraidingCard
          key={trade.id}
          selected={trade.id === currentTradeId}
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
