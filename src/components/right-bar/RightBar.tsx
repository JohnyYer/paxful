import React, { Fragment, useState, useEffect } from 'react';
import {
  Typography,
  Button,
  makeStyles,
  Avatar,
  Hidden,
  Drawer,
  IconButton,
} from '@material-ui/core';
import avatar from '../../assets/avatar.png';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import { thunkGetTradeInfo } from '../../store/trades/thunks';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    textAlign: 'center',
    padding: '30px 10px 0px 10px',
  },
  releaseButton: {
    marginTop: 20,
    backgroundColor: palette.success.main,
    color: palette.background.paper,
    '&:hover': {
      backgroundColor: palette.success.light,
    },
  },
  borderBottom: {
    borderBottom: 'solid 1px',
    borderColor: palette.divider,
  },
  success: {
    color: palette.success.main,
    fontWeight: 'bold',
  },
  error: {
    color: palette.error.main,
    fontWeight: 'bold',
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid',
    color: palette.text.secondary,
  },
  col: {
    '&:nth-child(2n)': {
      borderLeft: '1px solid',
    },
    width: '50%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 70,
  },
  mobileDrawer: {
    width: '80%',
  },
  burger: {
    position: 'absolute',
    right: 0,
    top: 64,
    [breakpoints.down('sm')]: {
      top: 54,
    },
  },
}));

interface RightBarProps {}

const RightBar: React.FC<RightBarProps> = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setInterval(() => {
      dispatch(thunkGetTradeInfo());
    }, 3000);
  }, []);

  const barInner = (
    <div className={classes.root}>
      <Typography variant="h5">
        You are trading with <b>Chanaar</b>
      </Typography>
      <Typography color="textSecondary">Started 23 minutes ago</Typography>
      <Button variant="contained" className={classes.releaseButton}>
        Release bitcoins
      </Button>
      <div className={classes.table}>
        <div className={classes.row}>
          <div className={classes.col}>
            <Avatar alt="Remy Sharp" src={avatar} />
            <div>
              <span className={classes.success}> +37 </span>/
              <span className={classes.error}> -1 </span>
            </div>
          </div>
          <div className={classes.col}>
            <Typography color="textPrimary">
              <strong># OF TRADES</strong>
            </Typography>
            <Typography>
              <strong>4</strong>
            </Typography>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>
            <Typography color="textPrimary">
              <strong>TRADE STATUS</strong>
            </Typography>
            <Typography className={classes.success}>PAID</Typography>
          </div>
          <div className={classes.col}>
            <Typography color="textPrimary">
              <strong>TRADE HASH</strong>
            </Typography>
            <Typography>44aFDr3g</Typography>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>
            <Typography color="textPrimary">
              <strong>AMOUNY USD</strong>
            </Typography>
            <Typography>25.00</Typography>
          </div>
          <div className={classes.col}>
            <Typography color="textPrimary">
              <strong>AMOUNT BTC</strong>
            </Typography>
            <Typography>0.00123123123</Typography>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Fragment>
      <Hidden smDown implementation="css">
        {barInner}
      </Hidden>
      <Hidden mdUp implementation="css">
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
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {barInner}
        </Drawer>
      </Hidden>
    </Fragment>
  );
};

export default RightBar;
