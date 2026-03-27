import React from "react";
import MainScreen from "./components/MainScreen";
import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<MainScreen />} />
      </Routes>
    </HashRouter>
  );
}
