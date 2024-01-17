import { useContext, useState } from "react";
import React from "react";
import CardContext from "../../context/Cardcontext";
import { FaEdit, FaRegSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CategoryList = () => {
  const { categoryArr, deleteCategories, editCategory, setCategoryToArr } =
    useContext(CardContext);
  const [editedCategory, setEditedCategory] = useState("");
  const [isEditingCategories, setIsEditingCategories] = useState(null);

  const handleSaveCategory = (categoryId) => {
    editCategory(categoryId, editedCategory);
    setEditedCategory("");
    setCategoryToArr("");
    setIsEditingCategories(null);
  };

  const handleEdit = (categoryId, currentText) => {
    setIsEditingCategories(categoryId);
    setEditedCategory(currentText);
    setCategoryToArr(currentText);
  };

  const handleDelete = (id) => {
    deleteCategories(id);
  };

  return (
    <>
      <h2>Category List</h2>
      <ul style={{ marginTop: "20px" }}>
        {categoryArr.map((item, index) => (
          <div key={item.id}>
            {isEditingCategories === item.id ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "10px",
                  fontSize: "18px",
                }}
              >
                <input
                  type="text"
                  value={editedCategory}
                  onChange={(e) => setEditedCategory(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "2px",
                  }}
                />
                <FaRegSave
                  onClick={() => handleSaveCategory(item.id)}
                  style={{
                    marginLeft: "10px",
                    fontSize: "20px",
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "10px",
                  fontSize: "18px",
                }}
              >
                <div style={{ width: "50%" }}>
                  <p>
                    {index + 1}.{item.category}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                  <FaEdit
                    style={{ fontSize: "20px" }}
                    onClick={() => handleEdit(item.id, item.category)}
                  />
                  <MdDelete
                    style={{ fontSize: "20px" }}
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </ul>
    </>
  );
};

export default CategoryList;
