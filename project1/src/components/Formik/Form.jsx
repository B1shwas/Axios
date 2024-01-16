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
      <div className="btnDiv">
        <button onClick={handleView} className="categoryBtn">
          Category List
        </button>
        <button
          type="button"
          onClick={onClickCategory}
          className="categoryBtn"
        >
          Add Category
        </button>
        <button type="button"  onClick={onClickPost} className="open-modal-btn">
          Post
        </button>
      </div>
    </>
  );
};

export default MyForm;

