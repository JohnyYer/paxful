import React from 'react';
import {
  Toolbar,
  Typography,
  Button,
  AppBar,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    textTransform: 'capitalize',
  },
  title: {
    flexGrow: 1,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 4,
  },
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
}));

const Navigation: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Paxful
        </Typography>
        <Button color="inherit">Buy bitcoins</Button>
        <Button color="inherit" className={classes.active}>
          Sell bitcoins
        </Button>
        <Button color="inherit">Wallet</Button>
        <Button color="inherit">Support</Button>
        <Button color="inherit">Your account</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
