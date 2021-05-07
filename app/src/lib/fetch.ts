import axios from "axios";
// TODO: envにしたい https://swiper-ui.herokuapp.com
const API_BASE_URL = "http://localhost:8888";
export const getUsers = () => {
  return axios.get(`${API_BASE_URL}/users`, { params: { index: 1, per: 10 } });
};
