import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { getCurrentUser } from "./services/api";

export const ServerUrl = "http://localhost:8000";

const App = () => {
  useEffect(() => {
    getCurrentUser();
  },[]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
