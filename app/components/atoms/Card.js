import React from "react";
import style from "./Card.module.scss";
import Image from "next/image";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-gray-200 rounded-md cursor-pointer hover:scale-105 transform transition-transform">
      <div className="bg-gray-300 h-72 w-72 rounded-md"></div>
    </div>
  );
};

const SkeletonCardDetail = () => {
  return (
    <div className="fixed p-5 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-md shadow-md max-w-lg w-full animate-pulse">
        <div className="absolute top-5 right-5 bg-gray-300 h-5 w-5 rounded-full"></div>
        <div className="text-black flex flex-col">
          <div className="bg-gray-300 h-6 w-32 mb-4"></div>
          <div className="bg-gray-300 h-72 w-72 mb-4 mx-auto"></div>
          <div className="flex w-full gap-2">
            <div className="bg-gray-300 w-full h-32 p-5 rounded-md"></div>
            <div className="bg-gray-300 w-full h-32 p-5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ data, isActive, onCardClick, isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <SkeletonCard />
        {isActive && <SkeletonCardDetail />}
      </div>
    );
  }

  return (
    <div>
      <div
        className="bg-white rounded-md cursor-pointer hover:scale-105 transform transition-transform"
        onClick={onCardClick}
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
              onClick={onCardClick}
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
  const abilities = data.abilities.map((ability) => ability.ability.name);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={`text-black flex flex-col ${style.cardDetail}`}>
      <h2>{capitalizeFirstLetter(data.name)}</h2>
      <div className="w-full flex justify-center">
        <Image
          src={data.sprites.front_default}
          width={"300px"}
          alt={data.name}
        />
      </div>
      <div className="flex w-full gap-2 ">
        <div className={`${style.detail} w-full p-5 text-white rounded-md`}>
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
        </div>
        <div className={`${style.detail} w-full p-5 text-white rounded-md`}>
          <h3>Abilities :</h3>
          <div className="flex mt-2 flex-col gap-2">
            {abilities.map((item, index) => {
              return (
                <p className="" key={index}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
