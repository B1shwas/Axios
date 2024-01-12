import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardContext from "../context/Cardcontext";
import "./Card.css";
import MyForm from "./Form";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

import Modal from "./Modal";
import FormikCom from "./FormikCom";
import ReactDatePicker from "react-datepicker";

const Card = () => {
  const { arr, isNotEmptyArray, deleteCard, isOpen, onClose, onOpen} =
    useContext(CardContext);

  const handleDelete = (itemId) => {
    deleteCard(itemId);
  };

  const [editItem, setEditItem] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [editMode, setEditMode] = useState(false);
  const handleEdit = (itemId) => {
    setEditMode(true);
    setEditItem(itemId);
    onOpen();
  };

  const filterCards = arr.filter((card) => {
    if (!startDate) {
      return true;
    }
    const cardDate = new Date(card.date);
    return (
      cardDate.getMonth() === startDate.getMonth() &&
      cardDate.getDate() === startDate.getDate()
    );
  });
  const filterLength = filterCards.length;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1
          style={{
            color: "white",
            letterSpacing: "5px",
            margin: "10px",
          }}
        >
          Add Cards
        </h1>
        <div style={{ marginTop: "5px" }}>
          <p>Filter cards by date:</p>
          <ReactDatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={
              <input
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
      <MyForm />
      {filterLength > 0 ? (
        <div className="card-container">
          {filterCards.map((item) => (
            <div className="card" key={item.id}>
              <img
                src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8="
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
            height:"calc(100vh - 100px)"
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <FormikCom
          editMode={editMode}
          editVal={editItem}
          onClose={onClose}
          setEditMode={setEditMode}
        />
      </Modal>
    </>
  );
};

export default Card;
