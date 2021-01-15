export class NetworkOfflineError extends Error {
    constructor(message: string = "network error, state offline") {
        super(message);
    }
}
