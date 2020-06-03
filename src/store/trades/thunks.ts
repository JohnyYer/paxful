import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../index';
import { Trades } from './api';
import { fetchTrades } from './actions';
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
  fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
    .then((response) => response.json())
    .then((json) => {
        //Not clear from the dock where it should be displayed, so you can find it in console 
        console.log('json', json)
    });
};

//Fake API call
function exampleAPI() {
  return Promise.resolve(Trades);
}
