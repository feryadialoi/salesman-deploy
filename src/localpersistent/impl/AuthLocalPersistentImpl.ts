import { Auth } from "../../models/Auth";
import { AuthLocalPersistent } from "../AuthLocalPersistent";

export class AuthLocalPersistentImpl implements AuthLocalPersistent {
    public setAuth(auth: Auth) {
        this.setToken(auth.token);
    }

    public getAuth(): Auth | null {
        const token = this.getToken();
        if (token !== "") {
            return new Auth(token);
        } else {
            return null;
        }
    }

    public setToken(token: string): void {
        localStorage.setItem("token", token);
    }

    public getToken(): string {
        return localStorage.getItem("token") || "";
    }

    public removeAuth(): void {
        this.removeToken();
    }

    public removeToken(): void {
        localStorage.removeItem("token");
    }
}
