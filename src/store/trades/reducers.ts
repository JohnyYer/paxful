import {
  TradesState,
  TradeActionTypes,
  SELECT_TRADE,
  FETCH_TRADES,
  SEND_MESSAGE,
} from './types';

const initialState: TradesState = {
  trades: [],
  selected: null,
};

export function tradeReducer(
  state = initialState,
  action: TradeActionTypes
): TradesState {
  switch (action.type) {
    case SELECT_TRADE: {
      return {
        ...state,
        ...{ selected: action.payload },
      };
    }
    case FETCH_TRADES: {
      return {
        ...state,
        ...{ trades: action.payload },
      };
    }
    case SEND_MESSAGE: {
      state.trades
        .find((trade) => trade.id === state.selected)
        ?.chat?.push(action.payload);

      return state;
    }
    default:
      return state;
  }
}
