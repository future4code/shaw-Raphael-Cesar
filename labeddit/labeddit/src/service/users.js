import { URL_BASE } from "../constants/Urls";
import axios from "axios";
import { goToFeed, goToSignupFeed } from "../routes/coordinator";


export const login = (body, clear, navigate, setRightButtonText) => {
  axios
    .post(`${URL_BASE}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeed(navigate);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      console.error(err)
    });
};

export const signup = (body, clear, history) => {
  axios
    .post(`${URL_BASE}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToSignupFeed(history);
    })
    .catch((err) => {
      console.log("Erro", err);
      console.log("ERROOO", err.response.data)
      alert("Erro no cadastro");
    });
};


