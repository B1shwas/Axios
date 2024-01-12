import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CardContext from "../../context/Cardcontext";
import "./Description.css";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";

const CardDescription = () => {
  const { title } = useParams();
  const { arr, addComment, editComment, deleteComment } =
    useContext(CardContext);
  const [comment, setComment] = useState("");
  const [editingComment, setEditingComment] = useState(null);
  const [editedComment, setEditedComment] = useState("");
  const storedData = JSON.parse(localStorage.getItem("notes"));

  const item = storedData.find((item) => item.title.trim() === title);
  const handleAddComment = () => {
    if (comment.trim() !== "") {
      addComment(item.id, Date.now(), comment);
      setComment("");
    }
  };

  const handleEditComment = (commentId, currentText) => {
    setEditingComment(commentId);
    setEditedComment(currentText);
  };

  const handleSaveComment = (commentId) => {
    editComment(item.id, editedComment, commentId);
    setEditedComment("");
    setEditingComment(null);
  };

  const handleDeleteComment = (commentId) => {
    deleteComment(item.id, commentId);
  };

  if (!item) {
    return <div>No card found with the title {title}</div>;
  }

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleAddComment();
    }
  };

  return (
    <div className="description">
      <div className="description-container">
        <img
          src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8="
          alt="image"
          style={{
            width: "298px",
          }}
        />
        <div className="text">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p style={{ color: "gray" }}>Date created: {item.date}</p>
        </div>
      </div>
      <div className="comment-section">
        <h3>Comments</h3>
        <div className="input-field">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyPress={handleEnterPress}
            placeholder="Add Comment...."
          />
          <IoAddCircleSharp
            onClick={handleAddComment}
            style={{ fontSize: "30px" }}
          />
        </div>
        {item.comments ? (
          item.comments.map((comment) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
              key={comment.id}
            >
              {editingComment === comment.id ? (
                <>
                  <input
                    type="text"
                    value={editedComment}
                    onChange={(e) => setEditedComment(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "2px",
                    }}
                  />
                  <FaRegSave
                    onClick={() => handleSaveComment(comment.id)}
                    style={{
                      marginLeft: "10px",
                      fontSize: "20px",
                    }}
                  />
                </>
              ) : (
                <ul style={{ display: "flex", gap: "20px" }}>
                  <li>{comment.text}</li>
                  <FaEdit
                    onClick={() => handleEditComment(comment.id, comment.text)}
                  />
                  <MdDelete onClick={() => handleDeleteComment(comment.id)} />
                </ul>
              )}
            </div>
          ))
        ) : (
          <p
            style={{
              color: "gray",
              marginTop: "2px",
              textAlign: "center",
            }}
          >
            No Comment
          </p>
        )}
      </div>
    </div>
  );
};
export default CardDescription;
