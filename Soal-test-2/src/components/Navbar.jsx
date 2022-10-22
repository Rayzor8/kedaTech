import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import LoginModal from "./Modals/LoginModal";

Modal.setAppElement("#root");
export const Navbar = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function mobileLoginHandler(){
    setModalIsOpen(true);
    setOpenMenu(false)
  }
  return (
    <>
      <nav className="relative container mx-auto p-6 font-mono">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2 font-bold text-white text-2xl">HOME</div>

          <div className="hidden space-x-6 md:flex">
            <a
              href="#"
              className="hover:text-darkGrayishBlue font-bold text-2xl"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:text-darkGrayishBlue font-bold text-2xl"
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:text-darkGrayishBlue font-bold text-2xl"
            >
              Contact
            </a>
          </div>

          <button
            href="#"
            className="hidden py-2 px-12 pt-2 text-cyan-400 bg-white rounded baseline hover:bg-cyan-400 md:block hover:text-white  border border-cyan-400"
            onClick={openModal}
          >
            Login
          </button>
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
            <a href="#" className="font-bold">
              About Us
            </a>
            <a href="#" className="font-bold">
              Pricing
            </a>
            <a href="#" className="font-bold">
              Contact
            </a>
            <button
              href="#"
              className="py-2 px-12 pt-2 text-cyan-400 bg-white rounded baseline hover:bg-cyan-400 md:block hover:text-white  border border-cyan-400"
              onClick={mobileLoginHandler}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
      <LoginModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </>
  );
};
