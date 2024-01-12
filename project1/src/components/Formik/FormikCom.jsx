import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./form.css";
import CardContext from "../../context/Cardcontext";

const FormikCom = ({ editMode, editVal, onClose, setEditMode }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const validationSchemaCategory = Yup.object().shape({
    category: Yup.string().required("Category is required"),
  });

  const initialValues = editMode
    ? {
        id: editVal.id,
        title: editVal.title,
        description: editVal.description,
      }
    : {
        id: Date.now(),
        title: "",
        description: "",
      };

  const initialValuesCategory = {
    category: "",
  };

  const {
    updateArr,
    editCard,
    isOpen,
    setCategoryOpen,
    categoryOpen,
    updateCategoryArr,
    categoryArr,
  } = useContext(CardContext);

  const handleSubmit = (values) => {
    if (editMode) {
      const updatedCard = {
        id: values.id,
        title: values.title,
        description: values.description,
        category: values.category,
      };

      editCard(values.id, updatedCard);
      setEditMode(false);
    } else {
      const newItem = {
        id: values.id,
        title: values.title,
        description: values.description,
        category: values.category,
        date: new Date().toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      updateArr(newItem);
    }

    onClose();
  };

  const handleSubmitCategory = (values) => {
    const newItem = {
      category: values.category,
    };
    updateCategoryArr(newItem);
    setCategoryOpen(false);
    onClose();
  };

  return categoryOpen ? (
    <Formik
      initialValues={initialValuesCategory}
      validationSchema={validationSchemaCategory}
      onSubmit={handleSubmitCategory}
    >
      <Form className="my-form">
        <div className="text-field">
          <label htmlFor="category">Category:</label>
          <Field
            type="text"
            id="category"
            name="category"
            placeholder="Add category..."
          />
          <ErrorMessage name="category" component="div" className="error" />
        </div>
        <button type="submit" className="submit-btn">
          {editMode ? "Save" : "Submit"}
        </button>
      </Form>
    </Formik>
  ) : (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="my-form">
        <div className="text-field">
          <label htmlFor="title">Title:</label>
          <Field
            type="text"
            id="title"
            name="title"
            placeholder="Add title..."
          />
          <ErrorMessage name="title" component="div" className="error" />
        </div>

        <div className="text-field">
          <label htmlFor="description">Description:</label>
          <Field
            as="textarea"
            id="description"
            name="description"
            placeholder="Add description..."
          />
          <ErrorMessage name="description" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="category" style={{ marginRight: "10px" }}>
            Select Category
          </label>
          <Field as="select" name="category">
            <option value="">Select a category</option>
            {categoryArr.map((item) => (
              <option key={item.category} value={item.category}>
                {item.category}
              </option>
            ))}
          </Field>
        </div>

        <button type="submit" className="submit-btn">
          {editMode ? "Save" : "Submit"}
        </button>
      </Form>
    </Formik>
  );
};

export default FormikCom;
