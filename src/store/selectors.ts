import { AppState } from '.';

export const allTrades = (state: AppState) => state.trades.trades;
export const selectedTrade = (state: AppState) => state.trades.selected;
