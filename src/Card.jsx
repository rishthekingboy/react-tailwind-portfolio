import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import {FaEnvelope} from "react-icons/fa"

const portfolio =
  "https://e7.pngegg.com/pngimages/985/993/png-clipart-company-businessperson-board-of-directors-advanced-orthopaedic-centers-avtar-company-service-thumbnail.png";

const Card = () => {
  return (
    <div className={"w-full"}>
      <div
        className={
          "flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5"
        }
      >
        <div className={""}>
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={portfolio}
            alt="avatar"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900">Rishabh Singh</p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Full Stack Developer
          </p>
          <div className="flex align-center justify-center mt-4">
            <a
              href="/"
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full  hover:text-white transition-colors duration-300"
            >
              <BsGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              href="/"
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full  hover:text-white transition-colors duration-300"
            >
              <BsTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="/"
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-600 hover:bg-green-600 rounded-full  hover:text-white transition-colors duration-300"
            >
              <FaEnvelope />
              <span className="sr-only">Gmail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
