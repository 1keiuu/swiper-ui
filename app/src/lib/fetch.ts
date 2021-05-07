import axios from "axios";
// TODO: envにしたい
const API_BASE_URL = "https://swiper-ui.herokuapp.com";
export const getUsers = () => {
  return axios.get(`${API_BASE_URL}/users`);
};
