import React, { useContext } from "react";
import CardContext from "../../context/Cardcontext";
import { MdPostAdd } from "react-icons/md";
import { FcAddDatabase } from "react-icons/fc";

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
        <button onClick={handleView}>Category List</button>
        <button onClick={onClickCategory}>Add Category</button>
        <button onClick={onClickPost}>Add Post</button>
      </div>
    </>
  );
};

export default MyForm;
