import React, { createContext, useState, useEffect } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [arr, setArr] = useState([]);
  const [categoryArr, setCategoryArr] = useState([]);
  const [isNotEmptyArray, setIsNotEmptyArray] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [editCategorySelect, setEditCategorySelect] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [categoryToArr, setCategoryToArr] = useState(null);
  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    setEditMode(false);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("notes"));
    if (storedData) {
      setArr(storedData);
      setIsNotEmptyArray(storedData.length > 0);
    }
    const categoryData = JSON.parse(localStorage.getItem("category"));
    if (categoryData) {
      setCategoryArr(categoryData);
    }
  }, []);

  const updateArr = (newItem) => {
    const updatedCards = [...arr, newItem];
    setArr(updatedCards);
    localStorage.setItem("notes", JSON.stringify(updatedCards));
    setIsNotEmptyArray(true);
  };

  const updateCategoryArr = (newItem) => {
    const updatedCategoryArr = [...categoryArr, newItem];
    setCategoryArr(updatedCategoryArr);
    localStorage.setItem("category", JSON.stringify(updatedCategoryArr));
  };

  const addComment = (cardId, commentId, comment) => {
    setArr((prevArr) => {
      const updatedCards = prevArr.map((card) => {
        if (card.id === cardId) {
          const commentObj = {
            id: commentId,
            text: comment,
          };
          return {
            ...card,
            comments: card.comments
              ? [...card.comments, commentObj]
              : [commentObj],
          };
        }
        return card;
      });

      localStorage.setItem("notes", JSON.stringify(updatedCards));
      return updatedCards;
    });
  };

  const deleteCard = (itemId) => {
    const updatedCards = arr.filter((item) => item.id !== itemId);
    setArr(updatedCards);
    localStorage.setItem("notes", JSON.stringify(updatedCards));
    setIsNotEmptyArray(updatedCards.length > 0);
  };

  const deleteComment = (itemId, commentId) => {
    const updatedCards = arr.map((card) => {
      if (card.id === itemId) {
        const updatedComments = card.comments.filter(
          (comment) => comment.id !== commentId
        );
        return {
          ...card,
          comments: updatedComments,
        };
      }
      return card;
    });
    localStorage.setItem("notes", JSON.stringify(updatedCards));
    setArr(updatedCards);
  };

  const editCard = (itemId, updatedCard) => {
    setArr((prevArr) => {
      const updatedCards = prevArr.map((card) => {
        if (card.id === itemId) {
          return {
            ...card,
            ...updatedCard,
          };
        }
        return card;
      });
      localStorage.setItem("notes", JSON.stringify(updatedCards));
      return updatedCards;
    });
  };

  const editComment = (itemId, updatedComment, commentId) => {
    setArr((prevArr) => {
      const updatedCards = prevArr.map((card) => {
        if (card.id === itemId) {
          const updatedComments = card.comments.map((comment) => {
            if (comment.id === commentId) {
              return {
                ...comment,
                text: updatedComment,
              };
            }
            return comment;
          });
          return {
            ...card,
            comments: updatedComments,
          };
        }
        return card;
      });
      localStorage.setItem("notes", JSON.stringify(updatedCards));
      return updatedCards;
    });
  };

  const editCategory = (itemId, updatedCategory) => {
    setCategoryArr((prevArr) => {
      const updatedCategories = prevArr.map((category) => {
        if (category.id === itemId) {
          return {
            ...category,
            category: updatedCategory,
          };
        }
        return category;
      });
      localStorage.setItem("category", JSON.stringify(updatedCategories));
      return updatedCategories;
    });

    setArr((prevArr) => {
      const updatedCards = prevArr.map((card) => {
        if (card.category === categoryToArr) {
          return {
            ...card,
            category: updatedCategory,
          };
        }
        return card;
      });
      localStorage.setItem("notes", JSON.stringify(updatedCards));
      return updatedCards;
    });
    setSelectedCategory(updatedCategory);
  };

  const selectCategoryAndDate = (category) => {
    if (category === "all" && !selectedDate) {
      return arr;
    }
    let filteredCards = arr;

    if (category !== "all") {
      filteredCards = filteredCards.filter(
        (card) => card.category === category
      );
    }

    if (selectedDate) {
      filteredCards = filteredCards.filter((card) => {
        const cardDate = new Date(card.date);
        return (
          cardDate.getMonth() === selectedDate.getMonth() &&
          cardDate.getDate() === selectedDate.getDate()
        );
      });
    }

    return filteredCards;
  };

  const deleteCategories = (categoryId) => {
    const updatedCategories = categoryArr.filter(
      (category) => category.id !== categoryId
    );
    setCategoryArr(updatedCategories);
    localStorage.setItem("category", JSON.stringify(updatedCategories));
  };

  return (
    <CardContext.Provider
      value={{
        arr,
        updateArr,
        isNotEmptyArray,
        addComment,
        deleteCard,
        selectedCard,
        editCard,
        isOpen,
        onOpen,
        onClose,
        editComment,
        deleteComment,
        categoryOpen,
        setCategoryOpen,
        updateCategoryArr,
        categoryArr,
        setSelectedDate,
        selectedDate,
        selectCategoryAndDate,
        selectedCategory,
        setSelectedCategory,
        showCategoryList,
        setShowCategoryList,
        deleteCategories,
        editCategory,
        categoryToArr,
        setCategoryToArr,
        editMode,
        setEditMode,
        editCategorySelect,
        setEditCategorySelect, 
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
