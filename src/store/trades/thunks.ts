import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../index';
import { Trades } from './api';
import {
    fetchTrades,
    tradingInfoFetchingAction,
    tradingInfoLoadedAction,
    fetchTradingInfoAction,
} from './actions';
import fetch from 'cross-fetch';

export const thunkGetTrades = (): ThunkAction<
    void,
    AppState,
    null,
    Action<string>
> => async (dispatch) => {
    const trades = await exampleAPI();
    dispatch(fetchTrades(trades));
};

export const thunkGetTradeInfo = (): ThunkAction<
    void,
    AppState,
    null,
    Action<string>
> => (dispatch) => {
    dispatch(tradingInfoFetchingAction());
    fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
        .then((response) => response.json())
        .then((json) => {
            setTimeout(() => {
                dispatch(fetchTradingInfoAction(json.bpi));
                dispatch(tradingInfoLoadedAction());
            }, 1000);
        });
};

//Fake API call
function exampleAPI() {
    return Promise.resolve(Trades);
}
