import axios, { AxiosStatic } from "axios";

export class ApiService {
    protected axios: AxiosStatic;
    protected baseUrl: string;

    public constructor() {
        this.axios = axios;
        this.baseUrl = "http://localhost";
    }
}
