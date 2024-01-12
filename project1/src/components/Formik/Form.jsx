import React, { useContext } from "react";
import CardContext from "../../context/Cardcontext";

const MyForm = () => {
  const { onOpen, setCategoryOpen } = useContext(CardContext);

  const onClickCategory = () => {
    setCategoryOpen(true);
    onOpen();
  };
  const onClickPost = () => {
    setCategoryOpen(false);
    onOpen();
  };
  return (
    <>
      <div className="btnDiv">
        <button
          type="button"
          onClick={onClickCategory}
          style={{ background: "#90EE90" }}
        >
          Category
        </button>
        <button type="button" onClick={onClickPost} className="open-modal-btn">
          Post
        </button>
      </div>
    </>
  );
};

export default MyForm;
