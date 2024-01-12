import React, { useContext } from "react";

import Modal from "../Modal/Modal";
import FormikCom from "./FormikCom";
import useDisclosure from "../../../hooks/useDisclosure";
import CardContext from "../../context/Cardcontext";

const MyForm = () => {
  const { onOpen } = useContext(CardContext);
  return (
    <>
      <div
        className="btnDiv"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <button type="button" onClick={onOpen} className="open-modal-btn">
          Post
        </button>
      </div>
    </>
  );
};

export default MyForm;
