import React from 'react';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';

interface SubNavigationProps {}

const useStyles = makeStyles(({ palette }) => ({
  root: {
    color: palette.primary.main,
    textTransform: 'none',
    backgroundColor: 'white',
    minHeight: 'fit-content',
  },
  toolbar: {
    minHeight: 'fit-content',
  },
  button: {
    borderRight: 'solid 1px',
    borderRadius: 0,
    textTransform: 'none',
    padding: '10px 20px',
    color: palette.primary.main
  },
}));

const SubNavigation: React.FC<SubNavigationProps> = ({}) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Button className={classes.button}>Buy bitcoins</Button>
        <Button className={classes.button}>Overview</Button>
        <Button className={classes.button}>Trades</Button>
        <Button className={classes.button}>Disputes</Button>
        <Button className={classes.button}>Your offers</Button>
        <Button className={classes.button}>My Team</Button>
        <Button className={classes.button}>Trade History</Button>
      </Toolbar>
    </AppBar>
  );
};

export default SubNavigation;
