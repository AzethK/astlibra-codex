import React from "react";
import MainScreen from "./components/MainScreen";
import { HashRouter } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <MainScreen />
    </HashRouter>
  );
}
