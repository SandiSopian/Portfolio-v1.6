import React from "react";
import uniqid from "uniqid";
import { skills } from "../../database";

const Skills = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-col dark:text-white">
      <h2 className="font-bold text-4xl mb-6">Skills</h2>
      <ul className="w-[450px] flex flex-wrap justify-center gap-2 mx-auto">
        {skills.map((skill) => (
          <li key={uniqid()} className="p-4 border transition delay-100 duration-300 ease-in-out shadow-md transform hover:-translate-y-1 hover:cursor-pointer">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
