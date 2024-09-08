import React, { useState } from "react";
import style from "./Card.module.scss";
import Image from "next/image";

const Card = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setIsActive(true);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <div>
      <div
        className="bg-white rounded-md cursor-pointer hover:scale-105 transform transition-transform"
        onClick={handleCardClick}
      >
        <Image
          src={data.sprites.front_default}
          width={300}
          height={300}
          alt={data.name}
        />
      </div>

      {isActive && (
        <div className="fixed p-5 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-md shadow-md max-w-lg w-full">
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
            >
              X
            </button>
            <CardDetail data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

const CardDetail = ({ data }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className={`text-black ${style.cardDetail}`}>
      <h2>{capitalizeFirstLetter(data.name)}</h2>
      <img src={data.sprites.front_default} width={"300px"} alt={data.name} />
      <div className={`${style.detail} p-5 text-white rounded-md`}>
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
      </div>
    </div>
  );
};

export default Card;
