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
  chat?: Message[];
}

export interface TradesState {
  trades: Trade[];
  selected: number | null;
}

// Describing the different ACTION NAMES available
export const SELECT_TRADE = 'SELECT_TRADE';
export const FETCH_TRADES = 'FETCH_TRADES';
export const SEND_MESSAGE = 'SEND_MESSAGE';

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

export type TradeActionTypes =
  | SelectTradeAction
  | FetchTradesAction
  | PostMessageAction;
