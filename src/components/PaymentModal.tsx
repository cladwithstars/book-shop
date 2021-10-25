import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { setAppView } from "../app/slices/localDBSlice";
// @ts-ignore
import styled from "styled-components";
import { emptyCart } from "../app/slices/cartSlice";

export const PaymentModal = (props: any) => {
  const { setShowModal } = props;
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(emptyCart());
    setShowModal(false);
  };
  const returnHome = () => {
    setShowModal(false);

    dispatch(setAppView("home"));
    dispatch(emptyCart());
  };
  return (
    <Modal show onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Payment successful!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Thanks for shopping with us.</Modal.Body>
      <Modal.Footer>
        <CloseButton variant="secondary" onClick={handleClose}>
          Close
        </CloseButton>
        <StyledButton variant="success" onClick={returnHome}>
          Return Home
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
