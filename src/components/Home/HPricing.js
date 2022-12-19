import React from "react";
import { pricing } from "../../database";
import { Fade, Zoom } from "react-reveal";
import { PricingCard } from "../Pricing";

const Pricing = () => {
  const { email } = pricing;

  return (
    <div className="flex items-center justify-center mt-40 flex-col dark:text-white">
      {/* Pricing Title */}
      <Zoom left cascade>
        <h1 className="font-bold text-4xl my-3">PRICING</h1>
      </Zoom>

      <Zoom>
        <h2>I will work according to your choice</h2>
      </Zoom>

      <div className="flex justify-center gap-10 bg-opacity-50 dark:text-white leading-loose ">
        <PricingCard />
      </div>
    </div>
  );
};

export default Pricing;
