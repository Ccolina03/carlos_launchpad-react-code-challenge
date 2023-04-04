import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
        <div className={`modal__content ${props.contentClass}`}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="body">
              Body
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="body"
              placeholder="Enter body"
              rows="5"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="userId">
              User ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="userId"
              type="number"
              placeholder="Enter user ID"
            />
          </div>
        </div>
        <footer className={`modal__content ${props.footerClass}`}>
          <button className="bg-black hover:bg-pink-300 text-white font-bold py-2 px-4 rounded" type="submit">
            Add Post
          </button>
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames="modal">
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
