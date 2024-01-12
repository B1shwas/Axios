import React, { useContext } from "react";
import CardContext from "../../context/Cardcontext";
import "./sidenav.css";

const SideNav = () => {
  const {
    categoryArr,
    setSelectedCategory,
    selectedCategory,
    setShowCategoryList,
    onOpen,
  } = useContext(CardContext);

  const handleAllSelect = () => {
    setSelectedCategory("all");
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleView = () => {
    setShowCategoryList(true);
    onOpen();
  };

  return (
    <>
      <div className="sideNav">
        <h3>CATEGORY</h3>
        <div className="cat-container">
          <div>
            <button
              className={
                selectedCategory === "all" ? "selected" : "notSelected"
              }
              onClick={handleAllSelect}
            >
              All
            </button>
            {categoryArr.map((item, index) => {
              return (
                <div key={index}>
                  <button
                    className={
                      selectedCategory === item.category
                        ? "selected"
                        : "notSelected"
                    }
                    style={{ marginTop: "5px" }}
                    onClick={() => handleCategorySelect(item.category)}
                  >
                    {item.category}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="cat-list">
            <button onClick={handleView}>View Category List</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
