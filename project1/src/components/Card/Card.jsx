import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardContext from "../../context/Cardcontext";
import "./Card.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

import Modal from "../Modal/Modal";
import FormikCom from "../Formik/FormikCom";
import ReactDatePicker from "react-datepicker";
import SideNav from "../SideNav/SideNav";
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
  } = useContext(CardContext);

  const handleDelete = (itemId) => {
    deleteCard(itemId);
  };

  const [editItem, setEditItem] = useState(null);
  const handleEdit = (itemId) => {
    setEditMode(true);
    setEditItem(itemId);
    onOpen();
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
        <div
          style={{
            width: "15%",
            backgroundColor: "#f8ec62",
            height: "calc(100vh - 80px)",
          }}
        >
          <SideNav />
        </div>
        <div style={{ width: "85%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <h3
              style={{
                color: "black",
                letterSpacing: "5px",
                margin: "10px",
              }}
            >
              Add Cards
            </h3>
            <div style={{ marginTop: "5px" }}>
              <p>Filter cards by date:</p>
              <ReactDatePicker
                showIcon
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
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
                        <p style={{ color: "gray" }}>{item.date}</p>
                        <Link to={`/description/${item.title}`}>
                          <p style={{ marginTop: "5px" }}>View more</p>
                        </Link>
                      </div>
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
