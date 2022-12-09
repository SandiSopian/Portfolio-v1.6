import React from "react";

const Service = ({ service }) => {
  return (
    <div className="flex flex-col border p-6">
      <div className="flex justify-center">
        <img src={service.icon} className="w-[20%] justify-center items-center dark:text-white" />
      </div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default Service;
