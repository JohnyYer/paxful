import React from 'react';
import { Button, makeStyles, Box, Hidden } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => ({
    root: {
        color: palette.primary.main,
        textTransform: 'none',
        backgroundColor: 'white',
        minHeight: 'fit-content',
        overflowY: 'auto',
    },
    toolbar: {
        minHeight: 'fit-content',
    },
    button: {
        borderRight: 'solid 1px',
        borderRadius: 0,
        textTransform: 'none',
        padding: '10px 20px',
        color: palette.primary.main,
    },
}));

const SubNavigation: React.FC = () => {
    const classes = useStyles();
    return (
        <Hidden smDown implementation="css">
            <Box boxShadow={3} className={classes.root}>
                <Button className={classes.button}>Buy bitcoins</Button>
                <Button className={classes.button}>Overview</Button>
                <Button className={classes.button}>Trades</Button>
                <Button className={classes.button}>Disputes</Button>
                <Button className={classes.button}>Your offers</Button>
                <Button className={classes.button}>My Team</Button>
                <Button className={classes.button}>Trade History</Button>
            </Box>
        </Hidden>
    );
};

export default SubNavigation;
