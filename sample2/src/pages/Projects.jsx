import Rentify from "../assets/img/Rentify.png";
import NavBar from "../components/NavBar";
const Projects = () => {
  return (
    <>
      <div className=" min-h-screen h-[80%] flex  flex-col px-9 bg-[#73d6d3]">
        <div className="flex justify-start items-start px-10 py-10">
          <h1 className="font-bold text-4xl text-white">Projects</h1>
        </div>
        <div className=" flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-10">
            <div className="p-5 bg-white rounded-md shadow-md">
              <img
                src={Rentify}
                className="h-[10rem] w-[100%] flex justify-center items-center"
              />
              <h3 className="text-2xl font-medium ">Rentify</h3>
              <p className=" text-base">
                It is Rental House Booking Website where users can rent a house
                and also sellers can update the property
              </p>
            </div>

            <div className="p-5 bg-white rounded-md shadow-md">
              <img
                src={Rentify}
                className="h-[10rem]  w-[100%] flex justify-center items-center"
              />
              <h3 className="text-2xl font-medium ">Rentify</h3>
              <p className=" text-base">
                It is Rental House Booking Website where users can rent a house
                and also sellers can update the property
              </p>
            </div>

            <div className="p-5 bg-white rounded-md shadow-md">
              <img
                src={Rentify}
                className="h-[10rem]  w-[100%] flex justify-center items-center"
              />
              <h3 className="text-2xl font-medium ">Rentify</h3>
              <p className=" text-base">
                It is Rental House Booking Website where users can rent a house
                and also sellers can update the property
              </p>
            </div>

            <div className="p-5 bg-white rounded-md shadow-md">
              <img
                src={Rentify}
                className="h-[10rem]  w-[100%] flex justify-center items-center"
              />
              <h3 className="text-2xl font-medium ">Rentify</h3>
              <p className=" text-base">
                It is Rental House Booking Website where users can rent a house
                and also sellers can update the property
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
