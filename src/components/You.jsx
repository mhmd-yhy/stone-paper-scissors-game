import React from 'react';
import stone from "../images/stone.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";
const You = ({ onChoose_You }) => {
  return (
    <div className='my-5'>
      <h1 className="text-center font-bold bg-blue-600 text-stone-200 text-lg md:text-3xl">أنت</h1>
      <div className="flex justify-center gap-2 my-2">
        <img onClick={(e) => onChoose_You(e.target.id)} src={stone} alt="" id='stone' className="sr rounded-full w-24 h-24 md:w-40 md:h-40 cursor-pointer hover:border-8" />
        <img onClick={(e) => onChoose_You(e.target.id)} src={paper} alt="" id='paper' className="sr rounded-full w-24 h-24 md:w-40 md:h-40 cursor-pointer hover:border-8" />
        <img onClick={(e) => onChoose_You(e.target.id)} src={scissors} alt="" id='scissors' className="sr rounded-full w-24 h-24 md:w-40 md:h-40 cursor-pointer hover:border-8" />
      </div>
    </div>
  );
};

export default You;
