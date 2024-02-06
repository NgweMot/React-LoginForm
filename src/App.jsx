import React from "react";
import { HomePage, LoginPage,RegisterPage } from "./page";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className=" font-roboto">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
