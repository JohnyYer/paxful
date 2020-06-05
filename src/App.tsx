import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Navigation from './components/header/Navigation';
import SubNavigation from './components/header/SubNavigation';
import LeftBar from './components/left-bar/LeftBar';
import RightBar from './components/right-bar/RightBar';
import Chat from './components/main/Chat';
import { thunkGetTrades } from './store/trades/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { allTrades } from './store/selectors';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const tradesList = useSelector(allTrades);

    useEffect(() => {
        dispatch(thunkGetTrades());
    }, [dispatch]);

    return (
        <Grid container direction="column">
            <Grid item>
                <Navigation />
                <SubNavigation />
            </Grid>

            {tradesList.length > 0 ? (
                <Grid item container>
                    <Grid item md={3} sm={4}>
                        <LeftBar />
                    </Grid>
                    <Grid item md={6} sm={8} xs={12}>
                        <Chat />
                    </Grid>
                    <Grid item md={3}>
                        <RightBar />
                    </Grid>
                </Grid>
            ) : (
                <Grid item style={{ textAlign: 'center' }}>
                    <Typography variant="h6" color="initial">
                        Oops, you deleted all trades. Refresh the page
                    </Typography>
                </Grid>
            )}
        </Grid>
    );
};

export default App;
