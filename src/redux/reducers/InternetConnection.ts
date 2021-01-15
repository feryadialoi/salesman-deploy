export const SET_INTERNET_STATE = "SET_INTERNET_STATE";

export type InternetState = "online" | "offline";

export type SetInternetState = {
    type: typeof SET_INTERNET_STATE;
    payload: InternetState;
};

export type InternetConnectionActionTypes = SetInternetState;

export interface InternetConnectionState {
    internetState: InternetState;
}

const internetState: InternetConnectionState = {
    internetState: "online",
};

export const internetConnectionReducer = (
    state = internetState,
    action: InternetConnectionActionTypes,
): InternetConnectionState => {
    switch (action.type) {
        case SET_INTERNET_STATE:
            return { ...state, internetState: action.payload };
        default:
            return state;
    }
};
