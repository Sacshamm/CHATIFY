import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from "./Logout";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <button>
        <Logout />
      </button>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  button{
    position:absolute;
    top:5%;
    right:2%;
  }
  img {
    height: 20rem;
  }
  span {
    color: rgb(50, 168, 137);
  }
`;
