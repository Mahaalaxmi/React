import { useEffect, useState } from "react";

const Contact = () => {
  const [nulldata, setNullData] = useState(null);

  if (!nulldata) {
    setNullData("Nulldata");
  }
  console.log(nulldata);
  // useEffect(() => {
  //   console.log("Mounted")
  // }, [data])
  //const [visible, setvisible] = useState(false)
  return (
    <>
      <div className="h-[80vh] w-screen flex justify-center items-center -z-10">
        <button className="bg-red-500 p-3 text-white w-32 rounded-sm">
          {" "}
          Delete{" "}
        </button>
      </div>
    </>
  );
};

export default Contact;
