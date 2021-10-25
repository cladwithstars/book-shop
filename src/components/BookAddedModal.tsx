import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { setAppView } from "../app/slices/localDBSlice";
// @ts-ignore
import styled from "styled-components";

export const BookAddedModal = (props: any) => {
  const { title, author, setShowModal } = props;
  const dispatch = useAppDispatch();
  const handleClose = () => setShowModal(false);
  const goToCart = () => {
    dispatch(setAppView("cart"));
    setShowModal(false);
  };
  return (
    <Modal show onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Added to cart!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {title} by {author} has been added to your cart.
      </Modal.Body>
      <Modal.Footer>
        <CloseButton variant="secondary" onClick={handleClose}>
          Close
        </CloseButton>
        <StyledButton variant="primary" onClick={goToCart}>
          View Cart
        </StyledButton>
      </Modal.Footer>
    </Modal>
  );
};

const StyledButton = styled(Button)`
  background-color: #318c8e !important;
  border: 0px !important;
`;

const CloseButton = styled(Button)`
  background-color: #6c757d !important;
  border: 0px !important;
`;
