import { ProfileLocalPersistentImpl } from "../../localpersistent/impl/ProfileLocalPersistentImpl";
import { ProfileLocalPersistent } from "../../localpersistent/ProfileLocalPersistent";
import { Auth } from "../../models/Auth";
import { LoginRequest } from "../../models/LoginRequest";
import { Profile } from "../../models/Profile";
import { ValidatorUtil } from "../../utils/ValidatorUtil";
import { AuthService } from "../AuthService";
import { LoginService } from "../LoginService";
import { AuthServiceImpl } from "./AuthServiceImpl";

export class LoginServiceImpl implements LoginService {
    private authService: AuthService = new AuthServiceImpl();
    private validatorUtil: ValidatorUtil = new ValidatorUtil();
    private profileLocalPersistent: ProfileLocalPersistent = new ProfileLocalPersistentImpl();

    public async login(username: string, password: string): Promise<void> {
        this.validatorUtil.validate(new LoginRequest(username, password));

        const profile = new Profile(username, username);
        console.log("profile", profile);
        this.profileLocalPersistent.setProfile(profile);

        const auth = new Auth("token");
        console.log("auth", auth);
        this.authService.setAuth(auth);
    }
}

export const useLoginService = (): LoginService => {
    return new LoginServiceImpl();
};
