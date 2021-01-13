import { Profile } from "../../models/Profile";
import { ProfileLocalPersistent } from "../ProfileLocalPersistent";

export class ProfileLocalPersistentImpl implements ProfileLocalPersistent {
    setProfile(profile: Profile): void {
        const profileString = JSON.stringify(profile);
        console.log("profileString", profileString);
        localStorage.setItem("profile", profileString);
    }
    getProfile(): Profile {
        const profileString = localStorage.getItem("profile");
        if (profileString) {
            return JSON.parse(profileString) as Profile;
        } else {
            throw new Error();
        }
    }

    removeProfile(): void {
        localStorage.removeItem("profile");
    }
}
