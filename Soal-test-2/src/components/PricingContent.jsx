import React from "react";
import pricingData from "../data/pricingData";
import { FcCheckmark } from "react-icons/fc";

const PricingContent = () => {
  return (
    <div className="container max-w-full mx-auto py-24 px-6">
      <h1 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
        Pricing
      </h1>
      <p className="text-center text-lg text-gray-700 mt-2 px-6">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam.
      </p>
      <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded" />
      <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
        <div className="relative  flex flex-col md:flex-row items-center md:gap-8">
          {pricingData.map((pricing) => {
            return (
              <div
                className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4"
                key={pricing.id}
              >
                <div className="bg-white text-black rounded-lg  shadow-lg overflow-hidden">
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      {pricing.tier}
                    </h1>
                    <h2 className="text-sm text-gray-500 text-center pb-6">
                      {pricing.price ? `$ ${pricing.price}` : "Free"}
                    </h2>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas, dolor.
                  </div>
                  <div className="flex flex-wrap mt-3 px-6">
                    <ul>
                      {pricing.features.map((feature, index) => {
                        return (
                          <li
                            className="flex items-center gap-2 justify-start"
                            key={index}
                          >
                            <FcCheckmark />
                            <div className=" flex flex-col justify-start text-start">
                              <p className="text-gray-700">{feature}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="block flex items-center p-8  uppercase">
                    <button
                      className="mt-3 text-lg font-semibold 
                      bg-blue-600 w-full text-white rounded-lg 
        px-6 py-3 block shadow-xl hover:bg-blue-500"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingContent;
