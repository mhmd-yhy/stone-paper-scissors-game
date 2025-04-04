import React from 'react';
import stone from "../images/stone.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";
const Comp = ({ compChoose }) => {
  return (
    <div>
      <h1 className="text-center font-bold bg-red-600 text-stone-200 text-lg md:text-3xl">الخصم</h1>
      <div className="flex justify-center gap-2 my-2">
        <img src={stone} alt="" id='stone' className={`sr rounded-full rotate-180 w-24 h-24 md:w-40 md:h-40 ${compChoose === "stone" && "border-8 border-red-600"}`} />
        <img src={paper} alt="" id='paper' className={`sr rounded-full rotate-180 w-24 h-24 md:w-40 md:h-40 ${compChoose === "paper" && "border-8 border-red-600"}`} />
        <img src={scissors} alt="" id='scissors' className={`sr rounded-full rotate-180 w-24 h-24 md:w-40 md:h-40 ${compChoose === "scissors" && "border-8 border-red-600"}`} />
      </div>
    </div>
  );
};

export default Comp;
