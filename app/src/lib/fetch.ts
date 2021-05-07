import axios from "axios";
import config from "config";

export const getUsers = () => {
  return axios.get(`${config.API_BASE_URL}/users`, {
    params: { index: 1, per: 10 },
  });
};
