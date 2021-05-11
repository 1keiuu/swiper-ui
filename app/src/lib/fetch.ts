import axios, { AxiosPromise } from "axios";
import config from "config";

export const getUsers = (paginationIndex: number): AxiosPromise => {
  // FIXME: configのimportが上手くできていないのでlineでany参照の型エラーが起きる
  const apiBaseUrl: string = (config as { API_BASE_URL: string }).API_BASE_URL;
  const url = `${apiBaseUrl}/users`;
  return axios.get(url, {
    params: { index: paginationIndex, per: 10 },
  });
};
