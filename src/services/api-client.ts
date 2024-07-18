import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://5bdc-93-188-83-214.ngrok-free.app/api/v1',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.stringify(localStorage.getItem('access'))}`,
    },
});

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
