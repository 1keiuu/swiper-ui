import axios from "axios";

export default (callback) => {
  axios
    .get("http://localhost:8888")
    .then((res) => {
      console.log(res.data);
      callback(res.data);
    })
    .catch((e) => {
      throw Error(e);
    });
};
