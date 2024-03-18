import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";
import Text from "./components/Text";
import Title from "./components/Title";

const App = () => {
  return (
    <Container>
      <Title name="Blob" />
      <Text text="blib blub blop" />
    </Container>
  );
};

export default App;
