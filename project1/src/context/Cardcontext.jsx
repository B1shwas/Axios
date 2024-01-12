// CardContext.js

import React, { createContext, useState, useEffect } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [arr, setArr] = useState([]);
  const [isNotEmptyArray, setIsNotEmptyArray] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("notes"));
    if (storedData) {
      setArr(storedData);
      setIsNotEmptyArray(storedData.length > 0);
    }
  }, []);

  const updateArr = (newItem) => {
    const updatedCards = [...arr, newItem];
    setArr(updatedCards);
    localStorage.setItem("notes", JSON.stringify(updatedCards));
    setIsNotEmptyArray(true);
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
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
