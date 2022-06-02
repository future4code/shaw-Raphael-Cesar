import { URL_BASE, headers } from "../constants/Urls";
import axios from "axios";

export const createPost = (body, clear) => {
  console.log(
    "body", body, "clear", clear
  )
  axios
    .post(`${URL_BASE}/posts`, body, {
      headers: headers,
    })
    .then((res) => {
      clear();
      console.log("CRIARRRR", res);
    })
    .catch((err) => {
      console.log(err);
    });
};


export const createPostVote = (body, id) => {
  
  console.log("BODY", body, "ID", id);
  axios
    .post(`${URL_BASE}/posts/${id}/votes`, body, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
      
    })
    .catch((err) => {
      console.log(err);
     
    });
};

export const changePostVote = (body, id) => {
  console.log("BODY", body, "ID", id);

  axios
    .put(`${URL_BASE}/posts/${id}/votes`, body, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
