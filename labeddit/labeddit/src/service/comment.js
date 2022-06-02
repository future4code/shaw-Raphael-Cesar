import { URL_BASE, headers } from "../constants/Urls";
import axios from "axios";

export const createComment = (body, id, clear) => {
  console.log("BODY", body, "ID", id);
  axios
    .post(`${URL_BASE}/posts/${id}/comments`, body, {
      headers: headers,
    })
    .then((res) => {
      clear();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createCommentVote = (body, id) => {
  console.log("BODY COMMMMEEENNTTT", body, "ID", id);
  console.log("ID", id);
  axios
    .post(`${URL_BASE}/comments/${id}/votes`, body, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const changeCommentVote = (body, id) => {
  console.log("BODY COMMMMEEENNTTT", body, "ID", id);
  console.log("ID", id);
  axios
    .put(`${URL_BASE}/comments/${id}/votes`, body, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
