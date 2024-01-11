import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./form.css";
import CardContext from "../context/Cardcontext";

const FormikCom = ({ editMode, editVal, onClose, setEditMode }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
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

  const { updateArr, editCard, isOpen } = useContext(CardContext);

  const handleSubmit = (values) => {
    if (editMode) {
      const updatedCard = {
        id: values.id,
        title: values.title,
        description: values.description,
      };

      editCard(values.id, updatedCard);
      setEditMode(false);
    } else {
      const newItem = {
        id: values.id,
        title: values.title,
        description: values.description,
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

  return (
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

        <button type="submit" className="submit-btn">
          {editMode ? "Save" : "Submit"}
        </button>
      </Form>
    </Formik>
  );
};

export default FormikCom;
