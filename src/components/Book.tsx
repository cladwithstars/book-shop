import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { addBookToCart } from "../app/slices/cartSlice";
import styled from "styled-components";
import { BookAddedModal } from "./BookAddedModal";

export const Book = (props: any) => {
  const { id, title, author, description, imgUrl, price } = props;
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    dispatch(addBookToCart({ id, title, author, description, imgUrl, price }));
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
