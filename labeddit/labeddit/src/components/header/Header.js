import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToFeed } from "../../routes/coordinator";
import { Button } from "@mui/material";



const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background: linear-gradient(to right, #6600cc 0%, #009999 89%);

  h1 {
    margin-left: 5%;
  }
  button {
    display: flex;
    width: 10vw;
    color: white;
    margin-right: 5%;
    background-color: #009999;
    border: none;
    :hover {
      background: linear-gradient(to right, #6600cc  0%,  #009999 89%);
      color: white;
    }
  }
`;
const ButtonHeader = styled.div`
  display: flex;
  position: relative;
  left: 50px;
  button {
    display: flex;
    width: 20vw;
    color: white;
    margin-right: 5%;
    background-color: #6600cc;
    border: none;
    :hover {
      background: linear-gradient(to right, #009999  0%, #6600cc 89%);
      color: white;
    }
  }

`;


const Header = ({ rightButtonText, setRightButtonText }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
  };
  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(navigate);
    } else {
      goToLogin(navigate);
    }
  };

  return (
    <ContainerHeader>
      <ButtonHeader>
      <Button onClick={() => goToFeed(navigate)}>
        <h1>LabEddit</h1>
      </Button>
      </ButtonHeader>
      <Button onClick={rightButtonAction}>{rightButtonText}</Button>
    </ContainerHeader>
  );
};

export default Header;
