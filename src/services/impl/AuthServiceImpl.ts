import { AuthLocalPersistent } from "../../localpersistent/AuthLocalPersistent";
import { AuthLocalPersistentImpl } from "../../localpersistent/impl/AuthLocalPersistentImpl";
import { Auth } from "../../models/Auth";
import { AuthService } from "../AuthService";

export class AuthServiceImpl implements AuthService {
    private authLocalPersistent: AuthLocalPersistent = new AuthLocalPersistentImpl();

    public getAuth(): Auth | null {
        return this.authLocalPersistent.getAuth();
    }

    public setAuth(auth: Auth): void {
        this.authLocalPersistent.setAuth(auth);
    }

    public login(username: string, password: string): void {
        //
    }
}

export const useAuthService = (): AuthService => {
    return new AuthServiceImpl();
};
