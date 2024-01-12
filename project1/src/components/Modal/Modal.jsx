import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";
import "./modal.css";
import CardContext from "../../context/Cardcontext";

const Modal = ({ isOpen, onClose, children }) => {
  const { setCategoryOpen, setShowCategoryList } = useContext(CardContext);
  const handleClose = () => {
    setCategoryOpen(false);
    setShowCategoryList(false);

    onClose();
  };

  return createPortal(
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-inside">
            <div className="icon">
              <AiOutlineClose onClick={handleClose} className="text-2xl" />
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
