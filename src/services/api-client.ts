import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1',
});

const getToken = (): string | null => {
    // Retrieve the token from storage (e.g., localStorage, sessionStorage)
    return localStorage.getItem('access');
};

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = async (config?: AxiosRequestConfig) => {
        return await axiosInstance
            .get<T>(this.endpoint, config)
            .then((res) => res.data);
    };

    get = async (id: number, config?: AxiosRequestConfig) => {
        return await axiosInstance
            .get<T>(`${this.endpoint}/${id}`, config)
            .then((res) => res.data);
    };

    create = async (data: T, config?: AxiosRequestConfig) => {
        return await axiosInstance
            .post<T>(this.endpoint, data, config)
            .then((res) => res.data);
    };
}

export default APIClient;
