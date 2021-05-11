import axios from "axios";
import config from "config";

export const getUsers = (paginationIndex: number) => axios.get(`${config.API_BASE_URL}/users`, {
  params: { index: paginationIndex, per: 10 },
});
