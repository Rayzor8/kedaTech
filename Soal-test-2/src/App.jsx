import { useState } from "react";

function App() {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <div className="App">
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
            className={`absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
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
    </div>
  );
}

export default App;
