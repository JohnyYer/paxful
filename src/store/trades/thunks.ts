import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../index';
import { Trades } from './api';
import { fetchTrades } from './actions';

export const thunkGetTrades = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  const trades = await exampleAPI();
  dispatch(fetchTrades(trades));
};

//Fake API call
function exampleAPI() {
  return Promise.resolve(Trades);
}
