import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const WebLayout = () => {
  const isLoggedIn = "true";
  return (
    // <>
    // <NavBar/>
    // {isLoggedIn ? (
    //     <Outlet/>
    // ):{
    //     <>

    //     </>
    // }}

    // </>
    <>Hello</>
  );
};

export default WebLayout;
