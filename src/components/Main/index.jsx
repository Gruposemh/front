import React from "react";
import Header from "../../components/Header"
import "../../styles/Main/style.css"

const Main = ({ img, text }) => {
  return (
    <main className="main">
      <img src={img} alt="" className="bg-img" />
      <h1>{text}</h1>
    </main>
  );
};

export default Main;