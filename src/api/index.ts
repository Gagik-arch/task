import config from '../config.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RequestType = {
    url: string;
    body?: object;
    method?: 'get' | 'post' | 'put' | 'delete';
};

class Api {
    URL: string;
    cleanReq: boolean;

    constructor(baseUrl: string = '', cleanReq: boolean = false) {
        this.URL = baseUrl;
        this.cleanReq = cleanReq;
    }

    public get<T = object>({ url = '' }: RequestType): Promise<T> {
        return this.configureRequest<T>({ url });
    }

    public post<T = object>({ url = '', body }: RequestType): Promise<T> {
        return this.configureRequest<T>({
            url,
            body,
            method: 'post',
        });
    }

    public delete<T = object>({ url = '' }: RequestType): Promise<T> {
        return this.configureRequest<T>({
            url,
            method: 'delete',
        });
    }

    public put<T = object>({ url = '', body }: RequestType): Promise<T> {
        return this.configureRequest<T>({
            url,
            body,
            method: 'put',
        });
    }

    private async configureRequest<T = object>({
                                                   url,
                                                   method = 'get',
                                                   body,
                                               }: RequestType): Promise<T> {
        url = `${this.cleanReq ? '' : config.APP_URL}${
          this.URL
        }${url}`;
        const token: string | null = await AsyncStorage.getItem('token');


        const options: RequestInit = {
            method,
            headers: {
                'Content-Type':
                  body && body instanceof FormData
                    ? 'multipart/form-data'
                    : 'application/json',
               'Authorization' : token ? `Bearer ${token}` : '',
            },
        };
        if (body) {
            options.body = JSON.stringify(body);
        }
        return fetch(url, options).then((response): Promise<T> => {
            if (!response.ok) {
                throw new Error(response.status.toString());
            }
            return response.json();
        });
    }
}

export default Api;
