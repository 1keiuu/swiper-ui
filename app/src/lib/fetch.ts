import axios from "axios";

export default (callback) => {
  axios
    .get("http://localhost:8888")
    .then((res) => {
      callback(res.data);
    })
    .catch((e) => {
      throw Error(e);
    });
};
