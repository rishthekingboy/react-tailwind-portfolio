import React from "react";
import { SiReact, SiTailwindcss, SiJavascript  } from "react-icons/si";

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black text-center sm:text-4xl font-bold">
        Tech I Use
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiReact color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 text-base sm:text-xl font-semibold text-center">
            ReactJs
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#ffdf00" className="mx-auto text-4xl" />
          <p className="mt-6 text-base sm:text-xl font-semibold text-center">
            JavaScript
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 text-base sm:text-xl font-semibold text-center">
            TailwindCss
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
