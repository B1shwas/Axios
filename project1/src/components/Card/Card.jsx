import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CardContext from "../../context/Cardcontext";
import "./Card.css";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaTimes } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { GiHamburgerMenu } from "react-icons/gi";

import Modal from "../Modal/Modal";
import FormikCom from "../Formik/FormikCom";
import ReactDatePicker from "react-datepicker";
import SideNav from "../SideNav/SideNav";
import { FaArrowRight } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import CategoryList from "../CategoryList/CategoryList";

const Card = () => {
  const {
    deleteCard,
    isOpen,
    onClose,
    onOpen,
    setSelectedDate,
    selectCategoryAndDate,
    selectedCategory,
    selectedDate,
    showCategoryList,
    setEditMode,
    setEditCategorySelect,
    searchInput,
    setSearchInput,
  } = useContext(CardContext);

  const [editItem, setEditItem] = useState(null);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleToggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleDelete = (itemId) => {
    setSelectedCard(null);
    deleteCard(itemId);
  };

  const handleEdit = (itemId) => {
    setEditMode(true);
    setEditItem(itemId);
    setSelectedCard(null);
    setEditCategorySelect(itemId.category);
    onOpen();
  };

  const handleThreeDotClick = (itemId) => {
    setSelectedCard(itemId);
  };

  const filterCards = selectCategoryAndDate(selectedCategory);

  const filterLength = filterCards.length;

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <GiHamburgerMenu className="hamMenu" onClick={handleToggleSideNav} />
        {isSideNavOpen && (
          <div className="sideNav-popUp">
            <div>
              <SideNav />
            </div>
            <FaTimes className="close-icon" onClick={handleToggleSideNav} />
          </div>
        )}
        <div className="sideNav-container">
          <div>
            <SideNav />
          </div>
        </div>
        <div className="cardList">
          <div className="card-above">
            <h3
              style={{
                color: "black",
                letterSpacing: "5px",
                margin: "10px",
              }}
            >
              Add Cards
            </h3>
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              style={{
                height: "30px",
                padding: "5px",
                width: "250px",
                marginTop: "10px",
              }}
            />
            <div style={{ marginTop: "5px" }}>
              <p>Filter cards by date:</p>
              <ReactDatePicker
                showIcon
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="  Select date"
                customInput={
                  <input
                    name="dateInput"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      width: "200px",
                      fontSize: "17px",
                    }}
                  />
                }
              />
            </div>
          </div>
          <div style={{ height: "calc(100vh - 165px", overflowY: "scroll" }}>
            {filterLength > 0 ? (
              <div className="card-container">
                {filterCards.map((item) => (
                  <div className="card" key={item.id}>
                    <img
                      src="https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg"
                      alt="Card Image"
                      className="card-image"
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="card-content">
                        <h2 className="card-title">{item.title}</h2>
                        <Link
                          to={`/description/${item.title}`}
                          style={{ textDecoration: "none", cursor: "pointer" }}
                        >
                          <div style={{ display: "flex" }}>
                            <p className="card-link">
                              {item.description.length > 35
                                ? item.description.slice(0, 35) + "..."
                                : item.description}
                            </p>
                            <FaArrowRight
                              style={{
                                marginLeft: "5px",
                                color: "#A7AFC1",
                                fontSize: "12px",
                                marginTop: "2px",
                              }}
                            />
                          </div>
                        </Link>
                        <p className="card-date">{item.date}</p>
                      </div>
                      <div style={{ marginLeft: "5px" }}>
                        <BsThreeDotsVertical
                          onClick={() => handleThreeDotClick(item.id)}
                          style={{
                            marginTop: "10px",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                        />
                        {selectedCard === item.id && (
                          <div className="edit-delete">
                            <MdDelete
                              fontSize="20px"
                              onClick={() => handleDelete(item.id)}
                              style={{ cursor: "pointer" }}
                            />
                            <FaEdit
                              fontSize="20px"
                              style={{ cursor: "pointer" }}
                              onClick={() => handleEdit(item)}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "calc(100vh - 100px)",
                }}
              >
                <h2
                  style={{
                    color: "#333333",
                  }}
                >
                  No Cards Available
                </h2>
              </div>
            )}
          </div>

          <Modal isOpen={isOpen} onClose={onClose}>
            {showCategoryList ? (
              <CategoryList />
            ) : (
              <FormikCom editVal={editItem} onClose={onClose} />
            )}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Card;
