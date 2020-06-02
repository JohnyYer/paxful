import {
  Trade,
  SELECT_TRADE,
  FETCH_TRADES,
  SEND_MESSAGE,
  Message,
} from './types';

export function selectTrade(tradeID: number) {
  return {
    type: SELECT_TRADE,
    payload: tradeID,
  };
}

export function fetchTrades(trades: Trade[]) {
  return {
    type: FETCH_TRADES,
    payload: trades,
  };
}

export function sendMessage(message: Message) {
  return {
    type: SEND_MESSAGE,
    payload: message,
  };
}
