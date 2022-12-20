import React from "react";
import { Zoom, Fade } from "react-reveal";
import { PricingCardBasic, PricingCardStandard, PricingCardPremium } from "../Pricing";
import { Carousel } from "flowbite-react";

const Pricing = () => {
  return (
    <div className="flex items-center justify-center mt-40 flex-col dark:text-white">
      {/* Pricing Title */}
      <Zoom left cascade>
        <h1 className="font-bold text-4xl my-3">PRICING</h1>
      </Zoom>

      <Zoom>
        <h2>I will work according to your choice</h2>
      </Zoom>

      <div className="flex justify-center gap-2 lg:gap-6 xl:gap-10 bg-opacity-50 dark:text-white leading-loose ">
        <Fade left>
          <div className="hidden lg:block">
            <PricingCardBasic />
          </div>
        </Fade>

        <Fade bottom>
          <div className="hidden lg:block">
            <PricingCardStandard />
          </div>
        </Fade>

        <Fade right>
          <div className="hidden lg:block">
            <PricingCardPremium />
          </div>
        </Fade>

        <div className="lg:hidden">
          <Carousel>
            <PricingCardBasic />
            <PricingCardStandard />
            <PricingCardPremium />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
