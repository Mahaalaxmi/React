import { Suspense } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const WebLayout = () => {
  const isloggedin = true;

  return (
    <>
      <NavBar />
      {isloggedin ? (
        <Suspense fallback={"loading"}>
          <Outlet />
        </Suspense>
      ) : (
        <>Login to access data</>
      )}
    </>
  );
};

export default WebLayout;
