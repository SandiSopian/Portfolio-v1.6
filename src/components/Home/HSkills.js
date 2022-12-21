import React from "react";
import uniqid from "uniqid";
import { skills } from "../../database";
import Zoom from "react-reveal/Zoom";

const Skills = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-col dark:text-white">
      <Zoom left cascade>
        <h2 className="font-bold text-3xl xl:text-4xl mb-6">SKILLS</h2>
      </Zoom>
      <Zoom>
        <ul className="w-[350px] sm:w-[450px] flex flex-wrap justify-center gap-2 mx-auto">
          {skills.map((skill) => (
            <li key={uniqid()} className="p-4 border card-animation hover:shadow-md">
              {skill}
            </li>
          ))}
        </ul>
      </Zoom>
    </div>
  );
};

export default Skills;
