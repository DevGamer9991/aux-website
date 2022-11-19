import React, { useState, useEffect } from "react"
import socketIOClient from "socket.io-client"
import styled from "styled-components"

const ENDPOINT = "http://localhost:8080"

const Main = styled.div`
  background-color: var(--main-color);
  height: 100vh;
`;

const NavWrapper = styled.div`
  background: var(--main-color);
  color: white;
  height: 60px;
  display: flex;
  align-items: center;
  padding-inline: 10px;
  position: relative;
`;

const NavTitle = styled.h1`
    text-align: center;
    width: 100%;
`;

const MainBox = styled.div`
  width: 300px;
  height: 250px;
  background-color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  left: 50%;
  border-radius: 5px;
  padding: 5px;
`;

const MainBoxTitle = styled.h2`
  width: 100%;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding-inline: 5px;
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  left: 50%;
  box-sizing: border-box;
`;

const JoinTextBox = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 1px solid black;
  border-radius: 6px;
  padding-inline: 5px;
  box-sizing: border-box;
  margin-block: 5px;
`;

const JoinSessionButton = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 6px;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  margin-block: 5px;
  cursor: pointer;

  transition: all 0.25s ease-in-out;

  :hover {
    background-color: #535252;
  }
`;

const CreateSessionButton = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 6px;
  background-color: lightgray;
  color: black;
  outline: none;
  border: none;
  margin-block: 5px;
  cursor: pointer;

  transition: all 0.25s ease-in-out;

  :hover {
    background-color: gray;
  }
`;

function SplashPage () {
  
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("test", data => {
      setResponse(data)
    })
  })

  return (
    <Main>
      <NavWrapper>
        <NavTitle>Aux Website</NavTitle>
      </NavWrapper>
      <MainBox>
        <MainBoxTitle>Create Session</MainBoxTitle>
        <ButtonWrapper>
          <JoinTextBox type="text" placeholder="Session ID" />
          <JoinSessionButton type="button" value="Join Session" />
          <CreateSessionButton type="button" value="Create Session" />
        </ButtonWrapper>
      </MainBox>
    </Main>
  );
}

export default SplashPage;
