import React, { useContext } from "react";
import CardContext from "../../context/Cardcontext";
import { MdPostAdd } from "react-icons/md";
import { FcAddDatabase } from "react-icons/fc";
import { CiViewList } from "react-icons/ci";

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
        <CiViewList
          title="Show Category List"
          onClick={handleView}
          style={{ fontSize: "30px", cursor: "pointer" }}
        />
        <FcAddDatabase
          title="Add Category"
          onClick={onClickCategory}
          style={{ fontSize: "30px", cursor: "pointer" }}
        />
        <MdPostAdd
          title="Add Post"
          onClick={onClickPost}
          style={{ fontSize: "30px", cursor: "pointer" }}
        />
      </div>
    </>
  );
};

export default MyForm;
