export interface Message {
  income: boolean;
  text: string;
  time: string;
}

export interface Trade {
  id: number;
  buyerName: string;
  paymentMethod: string;
  amount: string;
  isPaid: boolean;
  chat: {
    messages: Message[];
    gotUnreads: boolean;
  };
}

export interface TradesState {
  trades: Trade[];
  selected: number | null;
  isSeller: boolean;
}

// Describing the different ACTION NAMES available
export const SELECT_TRADE = 'SELECT_TRADE';
export const FETCH_TRADES = 'FETCH_TRADES';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_TRADE = 'DELETE_TRADE';
export const SWITCH_USER = 'SWITCH_USER';

interface SelectTradeAction {
  type: typeof SELECT_TRADE;
  payload: number;
}

interface FetchTradesAction {
  type: typeof FETCH_TRADES;
  payload: Trade[];
}

interface PostMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

interface DeleteTradeAction {
  type: typeof DELETE_TRADE;
  payload: number;
}

interface SwitchUserAction {
  type: typeof SWITCH_USER;
  payload: boolean;
}

export type TradeActionTypes =
  | SelectTradeAction
  | FetchTradesAction
  | PostMessageAction
  | DeleteTradeAction
  | SwitchUserAction;