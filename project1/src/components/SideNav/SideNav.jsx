import React, { useContext } from "react";
import CardContext from "../../context/Cardcontext";
import "./sidenav.css";

const SideNav = () => {
  const { categoryArr, setSelectedCategory, selectedCategory } =
    useContext(CardContext);

  const handleAllSelect = () => {
    setSelectedCategory("all");
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="sideNav">
        <h3>CATEGORY</h3>
        <div>
          <button
            className={selectedCategory === "all" ? "selected" : "notSelected"}
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
      </div>
    </>
  );
};

export default SideNav;
