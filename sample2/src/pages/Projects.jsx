import Rentify from "../assets/img/Rentify.png";
import NavBar from "../components/NavBar";
const Projects = () => {
  return (
    <>
      <NavBar />
      <div className=" flex flex-col px-20 py-7  bg-blue-600">
        <div className="flex justify-start items-start px-10 py-5">
          <h1 className="font-bold text-4xl text-white">Projects</h1>
        </div>
        <div className=" flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-6">
            <div className="p-9 bg-white rounded-md shadow-md">
              <img
                src={Rentify}
                className="h-20 w-[100%] flex justify-center items-center"
              />
              <h3 className="text-2xl font-medium flex justify-center items-center">
                Rentify
              </h3>
              <p className=" text-base">
                It is Rental House Booking Website where users and rent a house
                based on their requirement and also sellers can update the
                property which is available for rent
              </p>
            </div>

            <div className="p-9 bg-white rounded-md shadow-md">
              <img
                src={Rentify}
                className="h-20 w-[100%] flex justify-center items-center rounded-md"
              />
              <h3 className="text-2xl font-medium flex justify-center items-center">
                Rentify
              </h3>
              <p className=" text-base">
                It is Rental House Booking Website where users and rent a house
                based on their requirement and also sellers can update the
                property which is available for rent
              </p>
            </div>

            <div className="p-9 bg-white rounded-md shadow-md">
              <img
                src={Rentify}
                className="h-20 w-[100%] flex justify-center items-center"
              />
              <h3 className="text-2xl font-medium flex justify-center items-center">
                Rentify
              </h3>
              <p className=" text-base">
                It is Rental House Booking Website where users and rent a house
                based on their requirement and also sellers can update the
                property which is available for rent
              </p>
            </div>

            <div className="p-9 bg-white rounded-md shadow-md">
              <img
                src={Rentify}
                className="h-20 w-[100%] flex justify-center items-center"
              />
              <h3 className="text-2xl font-medium flex justify-center items-center">
                Rentify
              </h3>
              <p className=" text-base">
                It is Rental House Booking Website where users and rent a house
                based on their requirement and also sellers can update the
                property which is available for rent
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
