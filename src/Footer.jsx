import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <div className={"py-5 border-t-3/2"}>
      <div className="flex justify-center mt-4">
        <a
          href="https://github.com/rishthekingboy"
          className="text-4xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full  hover:text-white transition-colors duration-300"
        >
          <BsGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          href="https://twitter.com/rishthekingboy"
          className="text-4xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full  hover:text-white transition-colors duration-300"
        >
          <BsTwitter />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          href="https://www.instagram.com/rishthekingboy/"
          className="text-4xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-red-500 rounded-full  hover:text-white transition-colors duration-300"
        >
          <GrInstagram />
          <span className="sr-only">Instagram</span>
        </a>
      </div>

      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with{" "}
          <span className="mr-2" role="link" arial-label="heart">
            ❤️
          </span>
          by{" "}
          <a
            className="text-green-700 hover:underline"
            href="mailto:rishmark98@gmail.com"
          >
            Rishabh Singh
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
