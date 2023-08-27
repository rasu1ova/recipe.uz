import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const Stars = (props) => {
  const { img, stars, name } = props;
  return (
    <div className="w-80 h-80 ">
      <Image className="w-full rounded-lg" src={img} alt={`there is ${img}`} />
      <div className="text-main-color flex gap-1 my-3">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Stars;
