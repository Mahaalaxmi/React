const NavBar = ({ appname }) => {
  console.log(appname);
  return (
    <div className="w-full h-[3vh] grad-blue-bg text-white flex justify-center items-center">
      {appname}
    </div>
  );
};

export default NavBar;
