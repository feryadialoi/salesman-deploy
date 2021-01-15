import { InternetState } from "../redux/reducers/InternetConnection";

export class InternetConnectionUtil {
    async getInternetState(): Promise<InternetState> {
        try {
            const response = await fetch("https://google.com", {
                mode: "no-cors",
            });
            return "online";
        } catch (error) {
            return "offline";
        }
    }
}

export const useInternetConnectionUtil = () => {
    return new InternetConnectionUtil();
};
