import {
  TradesState,
  TradeActionTypes,
  SELECT_TRADE,
  FETCH_TRADES,
  SEND_MESSAGE,
  DELETE_TRADE,
  SWITCH_USER,
} from './types';
import produce from 'immer';
import { getIdx } from '../utils';

const initialState: TradesState = {
  trades: [],
  selected: null,
  isSeller: true,
};

export const tradeReducer = (state = initialState, action: TradeActionTypes) =>
  produce(state, (draft) => {
    let tradeIdx;
    switch (action.type) {
      case SELECT_TRADE:
        tradeIdx = getIdx('id', action.payload, draft.trades) || 0;

        if (draft.isSeller) {
          draft.trades[tradeIdx].chat.gotUnreads = false;
        }
        draft.selected = action.payload;
        break;
      case FETCH_TRADES:
        draft.trades = action.payload;
        break;
      case DELETE_TRADE:
        draft.trades.splice(action.payload, 1);
        draft.selected = null;
        break;
      case SWITCH_USER:
        draft.isSeller = action.payload;
        draft.selected = null;
        break;
      case SEND_MESSAGE:
        tradeIdx = getIdx('id', state.selected, draft.trades) || 0;

        if (action.payload.income) {
          draft.trades[tradeIdx].chat.gotUnreads = true;
        }
        draft.trades[tradeIdx].chat.messages.push(action.payload);
        break;
      default:
        return draft;
    }
  });
