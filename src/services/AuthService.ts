import { Auth } from "../models/Auth";

export interface AuthService {
    getAuth(): Auth | null;

    setAuth(auth: Auth): void;

    login(username: string, password: string): void;
}
