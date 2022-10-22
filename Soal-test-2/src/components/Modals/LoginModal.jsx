import React from "react";
import Modal from "react-modal";
import { CgCloseO } from "react-icons/cg";
const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#3b82f6",
  },
};

const LoginModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={closeModal} className="absolute top-0 right-0">
        <CgCloseO className="text-white text-2xl hover:text-darkGrayishBlue" />
      </button>
      <div className="flex flex-col p-8 text-white text-lg font-mono gap-8">
        <h1 className="text-2xl font-bold">Are you sure to Login ?</h1>
        <div className="flex justify-center gap-4">
          <button className=" py-1 px-4 rounded hover:text-darkGrayishBlue" onClick={closeModal}>Back</button>
          <button className="border-2 border-white py-1 px-4 rounded hover:text-darkGrayishBlue">
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
