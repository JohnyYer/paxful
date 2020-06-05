import {
    Trade,
    SELECT_TRADE,
    FETCH_TRADES,
    SEND_MESSAGE,
    Message,
    DELETE_TRADE,
    SWITCH_USER,
    MARK_AS_READ,
    FETCH_TRADING_INFO,
    TraidingInfo,
    TRADING_INFO_FETCHING,
    TRADING_INFO_LOADED,
} from './types';

export function selectTrade(tradeID: number | null) {
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

export function deleteTrade(tradeID: number) {
    return {
        type: DELETE_TRADE,
        payload: tradeID,
    };
}

export function switchUser(isSeller: boolean) {
    return {
        type: SWITCH_USER,
        payload: isSeller,
    };
}

export function sendMessage(message: Message) {
    return {
        type: SEND_MESSAGE,
        payload: message,
    };
}

export function markAsRead(tradeID: number) {
    return {
        type: MARK_AS_READ,
        payload: tradeID,
    };
}

export function fetchTradingInfoAction(tradingInfo: TraidingInfo) {
    return {
        type: FETCH_TRADING_INFO,
        payload: tradingInfo,
    };
}

export function tradingInfoFetchingAction() {
    return {
        type: TRADING_INFO_FETCHING,
    };
}

export function tradingInfoLoadedAction() {
    return {
        type: TRADING_INFO_LOADED,
    };
}
