import axios from "axios";
// TODO: envにしたい
const API_URL = "https://qiita.com/v2okimochi/items/c85e199c210a8d32cbdb";
export const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};
