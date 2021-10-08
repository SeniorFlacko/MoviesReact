import React, { useState } from "react";
import Button from "./Button";
import Modal from "react-modal";
import "./MovieModal.css";

const MovieModal = ({ modalIsOpen, setIsOpen, mode }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        className="Modal"
        modalIsOpen={modalIsOpen}
        closeModal={() => setIsOpen(false)}
      >
        <div className="close-container">
          <button onClick={() => setIsOpen(false)} className="close">
            X
          </button>
        </div>
        <div className="title">
          {mode === "add" ? "ADD MOVIE" : "EDIT MOVIE"}
        </div>
        <form>
          <div className="field-container">
            <div className="form-set flex4">
              <label for="title">Title:</label>
              <input type="text" name="title" />
            </div>

            <div className="form-set flex2">
              <label for="release-date">Release Date</label>
              <input type="text" name="release-date" />
            </div>
          </div>

          <div className="field-container">
            <div className="form-set flex4">
              <label for="release-date">Movie Url</label>
              <input type="text" name="release-date" />
            </div>

            <div className="form-set flex2">
              <label for="rating">Rating</label>
              <input type="text" name="rating" />
            </div>
          </div>
          <div className="field-container">
            <div className="form-set flex4">
              <label for="genre">Genre</label>
              <input type="text" name="genre" />
            </div>

            <div className="form-set flex2">
              <label for="runtime">Runtime</label>
              <input type="text" name="runtime" />
            </div>
          </div>

          <div className="field-container txt-area">
            <label for="overview">Overview</label>
            <textarea
              className="text-area"
              name="overview"
              placeholder="Move Description"
            ></textarea>
          </div>

          <div className="buttons-container">
            <button className="reset">Reset</button>
            <button className="submit">Submit</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default MovieModal;
