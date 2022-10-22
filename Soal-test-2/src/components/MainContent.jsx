import React from "react";
import BodyWave from "../assets/bodywave.svg";
import Software from "../assets/software.svg";
import PricingContent from "./PricingContent";

const MainContent = () => {
  return (
    <main className="flex flex-col">
      <section className="min-h-screen px-8 relative md:mb-12">
        <div className="flex flex-col gap-4 text-center mt-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            kirem loremlorem
          </p>
          <q className="mt-24 font-semibold text-lg text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure est
          </q>
        </div>
        <img src={BodyWave} alt="test" className="absolute -bottom-0 left-0 " />
        <img
          src={Software}
          alt="test1"
          className="absolute -bottom-8 md:bottom-0  left-0 md:left-10 z-10 w-40 h-40 md:w-96 md:h-96"
        />
      </section>

      <section className="px-8">
       <PricingContent/>
      </section>
    </main>
  );
};

export default MainContent;
