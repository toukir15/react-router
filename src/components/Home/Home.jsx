import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <p>this is home</p>
      <Outlet />
    </div>
  );
};

export default Home;
