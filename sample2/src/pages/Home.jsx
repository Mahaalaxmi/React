import React from "react";
import ProfileImage from "../assets/img/Mahalakshmi_Profile.jpg";
import java from "../assets/img/java.png";
import mysql from "../assets/img/java.png";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row px-7 py-20 justify-center items-center bg-blue-400 ">
        <div className="md:w-1/2 flex flex-col justify-center gap-2">
          <h1 className="text-4xl font-bold font-[Poppins]">Hi,</h1>
          <h1 className="text-4xl font-bold font-[Poppins]">
            I am Mahalakshmi
          </h1>
          <p className="font-medium text-2xl font-[Poppins]">
            I am Good in Java,MySQL,HTML,CSS,TailWind CSS.
          </p>
          <p className="font-medium text-2xl font-[Poppins]">
            I am Currently Learning MERN Stack
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <img src={java} className="h-20 w-20 rounded-full" />
            <img src={mysql} className="h-5 w-5 rounded-full" />
          </div>
        </div>
        <div className="md:md:w-1/2 flex justify-center items-center">
          <img
            src={ProfileImage}
            alt="Profile"
            className="rounded-full h-3/5 w-3/5 bg-white/35 shadow-lg shadow-[0_10px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md border-white/20"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
