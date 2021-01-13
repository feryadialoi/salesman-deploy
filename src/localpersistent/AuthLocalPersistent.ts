import { Auth } from "../models/Auth";

export interface AuthLocalPersistent {
    setAuth(auth: Auth): void;

    getAuth(): Auth | null;

    setToken(token: string): void;

    getToken(): string;

    removeAuth(): void;

    removeToken(): void;
}
