import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import styled from "styled-components";
import { deleteFromCart } from "../app/slices/cartSlice";

export const DeleteFromCartModal = ({
  id,
  setShowModal,
}: {
  id: number | null;
  setShowModal: any;
}) => {
  const dispatch = useAppDispatch();
  const handleClose = () => setShowModal(false);
  const handleDelete = () => {
    dispatch(deleteFromCart(id));
    setShowModal(false);
  };
  return (
    <Modal show onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-danger">Warning!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        This action will delete this item from your cart. Proceed?
      </Modal.Body>
      <Modal.Footer>
        <CloseButton variant="secondary" onClick={handleClose}>
          Close
        </CloseButton>
        <StyledButton variant="primary" onClick={handleDelete}>
          Delete From Cart
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
