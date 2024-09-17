import NavBar from "./components/NavBar";

const App = () => {
  const appname = "M-A-X";
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-start items-start">
        <NavBar appname={appname} />
      </div>
    </>
  );
};

export default App;
