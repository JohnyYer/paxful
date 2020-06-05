import React, { useState, Fragment } from 'react';
import {
    Toolbar,
    Typography,
    Button,
    AppBar,
    makeStyles,
    Hidden,
    IconButton,
    Drawer,
    Divider,
    Grid,
    Switch,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import { switchUser } from '../../store/trades/actions';
import { useHistory } from 'react-router-dom';

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
    mobileDrawer: {
        width: '40%',
    },
    accountSwitcher: {
        marginRight: 80,
    },
}));

const Navigation: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isSeller, setIsSeller] = useState(true);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const history = useHistory();

    const Navigation = (
        <Fragment>
            <Button color="inherit">Buy bitcoins</Button>
            <Button color="inherit" className={classes.active}>
                Sell bitcoins
            </Button>
            <Button color="inherit">Wallet</Button>
            <Button color="inherit">Support</Button>
            <Button color="inherit">Your account</Button>
        </Fragment>
    );

    const subNav = (
        <Fragment>
            <Button>Buy bitcoins</Button>
            <Button>Overview</Button>
            <Button>Trades</Button>
            <Button>Disputes</Button>
            <Button>Your offers</Button>
            <Button>My Team</Button>
            <Button>Trade History</Button>
        </Fragment>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Paxful
                </Typography>
                <Typography component="div" className={classes.accountSwitcher}>
                    <Grid
                        component="label"
                        container
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item>Buyer</Grid>
                        <Grid item>
                            <Switch
                                checked={isSeller}
                                onChange={() => {
                                    setIsSeller(!isSeller);
                                    dispatch(switchUser(!isSeller));
                                    history.push('/');
                                }}
                                name="checkedC"
                            />
                        </Grid>
                        <Grid item>Seller</Grid>
                    </Grid>
                </Typography>

                <Hidden smDown implementation="css">
                    {Navigation}
                </Hidden>
                <Hidden mdUp implementation="css">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
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
                        {Navigation}
                        <Divider />
                        {subNav}
                    </Drawer>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
