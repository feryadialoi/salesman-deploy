import { Profile } from "../models/Profile";

export interface ProfileLocalPersistent {
    setProfile(profile: Profile): void;

    getProfile(): Profile;

    removeProfile(): void;
}
