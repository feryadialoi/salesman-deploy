import { InternetState, InternetConnectionActionTypes, SET_INTERNET_STATE } from "../reducers/InternetConnection";

export const setInternetConnectionInternetState = (payload: InternetState): InternetConnectionActionTypes => ({
    type: SET_INTERNET_STATE,
    payload,
});
