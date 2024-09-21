import { Cross, User2, XIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";

const NavBar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const emailref = useRef(null);
  const passwordref = useRef(null);
  // const [userdata, setUserdata] = useState({
  //     email: '',
  //     password: ''
  // })
  // const handleChange = (e) => {
  //     setUserdata({ ...userdata, [e.target.id]: e.target.value })
  // }
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(userdata)
    // console.log("hello")
    console.log(emailref.current.value, passwordref.current.value);
  };

  const [visible, setvisible] = useState(false);
  return (
    <>
      <div className="w-full h-[3rem] bg-[#0497c2] shadow-md shadow-blue-700 text-white flex justify-center items-center rounded-sm">
        <div className="w-[80%] h-full flex justify-center items-center flex-row max-w-7xl">
          <div className="w-1/2 flex h-full justify-start items-center font-bold text-xl text-white">
            Mahalakshmi K
          </div>
          <div className="w-1/2 flex  h-full justify-end items-center">
            <ul className="w-full list-none flex flex-row justify-center gap-6">
              {NavLinks.map((navdata, index) => (
                <NavLink key={index} to={navdata.path}>
                  <li className="font-bold text-xl text-white p-2 rounded-sm">
                    {navdata.title}
                  </li>
                </NavLink>
              ))}
            </ul>

            <User2
              className="h-9 w-10 text-white rounded-full border-2 border-white hover:bg-white  hover:border-blue-500 hover:text-blue-500"
              onClick={() => setvisible(true)}
            />
          </div>
        </div>
      </div>
      {visible && (
        <>
          <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
            <div className=" h-[60%] w-[30%] z-50 flex flex-col  bg-white  shadow-lg rounded-sm">
              <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-white bg-blue-500 text-2xl font-bold py-6">
                <div className="w-1/2 ">Login</div>
                <div className="w-1/2 flex justify-end">
                  <XIcon onClick={() => setvisible(!visible)} />
                </div>
              </div>
              <div className="w-full h-[85%] flex flex-row justify-center items-center">
                <form
                  className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-6"
                  onSubmit={handleLogin}
                >
                  <input
                    type="email"
                    ref={emailref}
                    name=""
                    id="email"
                    placeholder="email"
                    className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500"
                    required
                  />
                  <input
                    type="password"
                    ref={passwordref}
                    name=""
                    id="password"
                    placeholder="password"
                    className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500"
                    required
                  />
                  {/* <input type="email" name="" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} />
                              <input type="password" name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} /> */}
                  <button
                    type="submit"
                    className="bg-green-500 p-3 text-white w-full rounded-sm text-lg font-bold"
                  >
                    {" "}
                    Login
                  </button>
                </form>
              </div>
              {/* <div className="w-full h-[15%] flex flex-row justify-center items-center">
                          <button onClick={() => setvisible(!visible)} className="bg-red-500 p-3 text-white w-full h-full rounded-sm text-lg font-bold"> Cancel </button>
                      </div> */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
