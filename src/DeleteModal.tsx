import React, { useState } from "react";
import Button from "./Button";
import Modal from "react-modal";
import "./DeleteModal.css";
import useAppContext from "./store/useAppContext";
import { State } from "./store/types";

type IProps = {
  modalIsOpen: boolean;
  setIsOpen: Function;
};


const DeleteModal: React.FC<IProps> = ({ modalIsOpen, setIsOpen}) => {

  const {
    currentMovie,
  } = useAppContext() as State;

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        className="DeleteModal"
      >
        <div className="close-container">
          <button onClick={() => setIsOpen(false)} className="close">
            X
          </button>
        </div>
        <div className="title">Delete MOVIE</div>
        
        <div className="message">
          Are you sure you want to delete this movie?
          {currentMovie.name}
        </div>

        <div className="buttons-container">
          <button className="reset">CONFIRM</button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteModal;
