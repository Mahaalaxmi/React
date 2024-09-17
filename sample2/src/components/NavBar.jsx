import { UserPen } from "lucide-react";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-around py-3 bg-[#0497c2] text-white">
        <div>
          <h1 className="text-2xl font-bold p-1">Mahalakshmi K</h1>
        </div>
        <div className="flex flex-row justify-center items-center gap-6 px-3">
          <ul className="flex flex-row  justify-center items-center gap-6 px-3">
            <li className="text-2xl font-semibold">Home</li>
            <li className="text-2xl font-semibold">Projects</li>
            <li className="text-2xl font-semibold">Contacts</li>
          </ul>
          <div className="flex justify-center items-center">
            <UserPen />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
