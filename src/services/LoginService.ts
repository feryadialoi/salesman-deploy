export interface LoginService {
    login(username: string, password: string): Promise<void>;
}
