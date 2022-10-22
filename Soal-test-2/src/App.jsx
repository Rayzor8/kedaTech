import { useState } from "react";
import BodyWave from "./assets/bodywave.svg";
import Software from "./assets/software.svg";
function App() {
  const [isOpenMenu, setOpenMenu] = useState(false);

  return (
    <div className="App w-full min-h-screen">
      <nav className="relative container mx-auto p-6">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">ASD</div>
          {/* Menu Items */}
          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Contact
            </a>
          </div>
          {/* Button */}
          <a
            href="#"
            className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
          >
            Login
          </a>
          {/* Hamburger Icon */}
          <button
            onClick={() => setOpenMenu((prev) => !prev)}
            className={`block hamburger md:hidden focus:outline-none ${
              isOpenMenu && "open"
            }`}
          >
            <span className="hamburger-top" />
            <span className="hamburger-middle" />
            <span className="hamburger-bottom" />
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            className={`absolute shadow-xl z-10 flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
              isOpenMenu ? "flex" : "hidden"
            }`}
          >
            <a href="#">About Us</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a
              href="#"
              className=" p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight "
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <main className="flex flex-col">
        <section className="min-h-screen p-4 relative">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          temporibus dolore. Esse pariatur culpa reiciendis aliquid
          reprehenderit error cupiditate praesentium expedita ut laborum illo,
          id dolorum molestiae aliquam iure placeat! Voluptates dolores
          laboriosam hic, quos dicta ad, labore eveniet aspernatur odit soluta
          pariatur illum delectus consectetur voluptatibus accusamus atque porro
          maxime eaque sed cupiditate. Quasi nihil in natus, nemo aliquam,
          consectetur eum, eaque at aliquid inventore enim? Eos, accusantium
          laudantium rerum blanditiis, molestias autem aspernatur animi
          necessitatibus illum non exercitationem distinctio! Accusamus fugiat
          rem quis harum mollitia ea deserunt ab voluptatem libero quasi, hic
          modi ad necessitatibus optio reiciendis eligendi magnam cupiditate,
          ratione nulla atque dolor? Suscipit, ex omnis! Assumenda doloribus
          architecto, quibusdam cumque maxime commodi vero autem magni
          voluptatum eos deleniti quisquam. Nesciunt sint cupiditate impedit
          atque minima vitae harum, laborum nostrum perspiciatis ab deserunt
          dolores perferendis expedita! Earum, laudantium. Provident mollitia
          ipsum possimus hic fugiat nulla sed exercitationem quam consequuntur
          vero pariatur voluptatum necessitatibus nesciunt eligendi eos nemo
          omnis velit, repellat est? Tenetur nesciunt at suscipit rerum
          officiis! Cum numquam temporibus perspiciatis
          <img
            src={BodyWave}
            alt="test"
            className="absolute -bottom-8 left-0 "
          />
          <img
            src={Software}
            alt="test1"
            className="absolute -bottom-8 md:bottom-0  left-0 md:left-10 z-10 w-40 h-40 md:w-96 md:h-96"
          />
        </section>

        <section className="bg-red-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          temporibus dolore. Esse pariatur culpa reiciendis aliquid
          reprehenderit error cupiditate praesentium expedita ut laborum illo,
          id dolorum molestiae aliquam iure placeat! Voluptates dolores
          laboriosam hic, quos dicta ad, labore eveniet aspernatur odit soluta
          pariatur illum delectus consectetur voluptatibus accusamus atque porro
          maxime eaque sed cupiditate. Quasi nihil in natus, nemo aliquam,
          consectetur eum, eaque at aliquid inventore enim? Eos, accusantium
          laudantium rerum blanditiis, molestias autem aspernatur animi
          necessitatibus illum non exercitationem distinctio! Accusamus fugiat
          rem quis harum mollitia ea deserunt ab voluptatem libero quasi, hic
          modi ad necessitatibus optio reiciendis eligendi magnam cupiditate,
          ratione nulla atque dolor? Suscipit, ex omnis! Assumenda doloribus
          architecto, quibusdam cumque maxime commodi vero autem magni
          voluptatum eos deleniti quisquam. Nesciunt sint cupiditate impedit
          atque minima vitae harum, laborum nostrum perspiciatis ab deserunt
          dolores perferendis expedita! Earum, laudantium. Provident mollitia
          ipsum possimus hic fugiat nulla sed exercitationem quam consequuntur
          vero pariatur voluptatum necessitatibus nesciunt eligendi eos nemo
          omnis velit, repellat est? Tenetur nesciunt at suscipit rerum
          officiis! Cum numquam temporibus perspiciatis
        </section>
      </main>
    </div>
  );
}

export default App;
