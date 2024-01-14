import React, { useContext } from "react";
import CardContext from "../../context/Cardcontext";

const MyForm = () => {
  const { onOpen, setCategoryOpen, setShowCategoryList } =
    useContext(CardContext);

  const onClickCategory = () => {
    setCategoryOpen(true);
    onOpen();
  };

  const onClickPost = () => {
    setCategoryOpen(false);
    onOpen();
  };

  const handleView = () => {
    setShowCategoryList(true);
    onOpen();
  };

  return (
    <>
      <div className="cat-list">
        <button onClick={handleView}>View Category List</button>
      </div>
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
