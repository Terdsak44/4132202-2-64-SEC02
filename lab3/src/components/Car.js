import React,{useState} from "react";

const dom = (
    <>
      <h1>Hello React !!!</h1>
      <p>My name is est</p>;
    </>
);

function Car() {
  const [color, setCorlor] = useState("red");

  const id = "630112418046";
  return (
      <>
        {dom}
        <p>ID : {id}</p>
        <p>My corlor is {color}</p>
        <button
          onClick={() => {
            setCorlor("blue");
          }}
      >
          CHANGE
          </button>
      </>
    );    
}

export default Car;