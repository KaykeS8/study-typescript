"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
require("./modal.css");
const Modal = ({ children }) => {
    const closeModal = (e) => {
        const modal = document.querySelector("#modal");
        modal === null || modal === void 0 ? void 0 : modal.classList.add("hide");
    };
    return (<div id="modal" className='hide'>
      <div className='fade' onClick={closeModal}></div>
      <div className='modal'>
        <h2>Edite sua tarefa</h2>
        {children}
      </div>
    </div>);
};
exports.Modal = Modal;
