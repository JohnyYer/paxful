import { AppState } from '.';

export const allTrades = (state: AppState) => state.trades.trades;
export const selectedTrade = (state: AppState) => state.trades.selected;
export const selectIsSeller = (state: AppState) => state.trades.isSeller;
export const selectTradeInfo = (state: AppState) => state.trades.tradingInfo;
export const selectCurrentTrade = (state: AppState) =>
    state.trades.trades.find((trade) => trade.id === state.trades.selected);
