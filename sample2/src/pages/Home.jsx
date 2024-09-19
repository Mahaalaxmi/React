import ProfileImage from "../assets/img/Mahalakshmi_Profile.jpg";
import java from "../assets/img/java.png";
import mysql from "../assets/img/java.png";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <div className="min-h-screen h-[80%] flex flex-col md:flex-row px-10 py-10 justify-center items-center bg-[#73d6d3] overflow-hidden">
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={ProfileImage}
            alt="Profile"
            className="rounded-full h-3/5 w-3/5 bg-white/35  shadow-[0_10px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md border-white/20"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center gap-2">
          <h1 className="text-4xl font-bold font-[Poppins] flex justify-left">
            Hi, I am Mahalakshmi
          </h1>

          <p className="font-medium text-base font-[Poppins] justify-left">
            I am Good in Java,MySQL,HTML,CSS,TailWind CSS.
          </p>
          <p className="font-medium text-base font-[Poppins] justify-left">
            I am Currently Learning MERN Stack
          </p>

          <div className="flex flex-col md:flex-row gap-3">
            <img src={java} className="h-20 w-20 rounded-full" />
            <img src={mysql} className="h-20 w-20 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
