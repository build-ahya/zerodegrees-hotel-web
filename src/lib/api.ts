import axiosInstance from './axios';

export default class APIService {
  static fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);

  static get = (url: string, config?: object) =>
    axiosInstance.get(url, config).then((res) => res);

  static post = (url: string, body: object, config?: object) =>
    axiosInstance.post(url, body, config).then((res) => res);

  static update = (url: string, id: string, body: object) =>
    axiosInstance.patch(`${url}/${id}`, body).then((res) => res);

  static delete = (url: string, id: string) =>
    axiosInstance.delete(`${url}/${id}`).then((res) => res);
}
