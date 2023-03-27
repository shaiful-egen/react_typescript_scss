import {Observable} from "rxjs";
import axios, {AxiosResponse} from "axios";
import {AxiosRequestConfig} from "axios/index";

export function getApi(url: string, config: AxiosRequestConfig): Observable<any> {
  return new Observable((subscriber) => {
    axios.get(url, config)
      .then((axiosResponse: AxiosResponse<any>) => {
        subscriber.next(axiosResponse.data);
        subscriber.complete();
      })
      .catch((error) => {
        subscriber.error(error);
      });
  });
}

export function postApi(uri: string, data: Object, config: AxiosRequestConfig): Observable<any> {
  return new Observable((subscriber) => {
    axios.post(uri, data, config)
      .then((axiosResponse: AxiosResponse<any>) => {
        subscriber.next(axiosResponse.data);
        subscriber.complete();
      })
      .catch((error) => {
        subscriber.error(error);
      });
  });
}

export function putApi(uri: string, data: Object, config: AxiosRequestConfig): Observable<any> {
  return new Observable((subscriber) => {
    axios.post(uri, data)
      .then((axiosResponse: AxiosResponse<any>) => {
        subscriber.next(axiosResponse.data);
        subscriber.complete();
      })
      .catch((error) => {
        subscriber.error(error);
      });
  });
}

export function deleteApi(uri: string, data: Object, config: AxiosRequestConfig): Observable<any> {
  return new Observable((subscriber) => {
    axios.post(uri, data)
      .then((axiosResponse: AxiosResponse<any>) => {
        subscriber.next(axiosResponse.data);
        subscriber.complete();
      })
      .catch((error) => {
        subscriber.error(error);
      });
  });
}
