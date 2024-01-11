import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-inside">
            <div className="icon">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
