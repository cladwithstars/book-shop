import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addBookToCart } from "../app/slices/cartSlice";
import styled from "styled-components";
import { BookAddedModal } from "./BookAddedModal";
import { selectCartBooks } from "../app/slices/cartSlice";

export const Book = (props: any) => {
  const { id, title, author, description, imgUrl, price } = props;
  const bks = useAppSelector(selectCartBooks);
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    // check if id is already in cart books.
    // if it is, merely update the 'count' associated with that book in the cart
    // else, add book to cart normally, with a count of 1

    // const filtered = bks.find((bk) => bk.id === id);
    dispatch(
      addBookToCart({ id, title, author, description, imgUrl, price, count: 1 })
    );
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <BookAddedModal
          title={title}
          author={author}
          setShowModal={setShowModal}
        />
      )}
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          // style={{ width: "25vw", height: "auto", alignItems: "center" }}
          className="img-fluid img-thumbnail"
          src={`/assets/${id}.jpg`}
        />
        <Card.Body>
          <Card.Title>
            <i>{title}</i>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <StyledButton onClick={handleClick}>Add to Cart</StyledButton>
        </Card.Body>
      </Card>
    </>
  );
};

const StyledButton = styled(Button)`
  background-color: #318c8e !important;
  border: 0px !important;
`;
