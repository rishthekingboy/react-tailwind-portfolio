import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className={"py-5 border-t-3/2"}>
      <div className="flex justify-center mt-4">
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

      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with{" "}
          <span className="mr-2" role="link" arial-label="heart">
            ❤️
          </span>
          by {" "}
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
