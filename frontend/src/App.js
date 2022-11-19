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

function App() {
  
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
        <p>{response}</p>
      </MainBox>
    </Main>
  );
}

export default App;
