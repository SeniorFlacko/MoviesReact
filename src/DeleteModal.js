import React, { useState } from "react";
import Button from "./Button";
import Modal from "react-modal";
import "./DeleteModal.css";

const DeleteModal = ({ modalIsOpen, setIsOpen, mode }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        className="DeleteModal"
        modalIsOpen={modalIsOpen}
        closeModal={() => setIsOpen(false)}
      >
        <div className="close-container">
          <button onClick={() => setIsOpen(false)} className="close">
            X
          </button>
        </div>
        <div className="title">Delete MOVIE</div>

        <div className="message">
          Are you sure you want to delete this movie?
        </div>

        <div className="buttons-container">
          <button className="reset">CONFIRM</button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteModal;
