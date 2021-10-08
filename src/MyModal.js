import React, { useState } from "react";
import "./MyModal.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const MyModal = ({ modalIsOpen, closeModal, ...properties }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="Modal"
    >
      {properties.children}
    </Modal>
  );
};

export default MyModal;
