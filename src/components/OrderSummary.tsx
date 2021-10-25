import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { setAppView } from "../app/slices/localDBSlice";
import { useAppDispatch } from "../app/hooks";
// import { emptyCart } from "../app/slices/cartSlice";
import { PaymentModal } from "./PaymentModal";
// @ts-ignore
import styled from "styled-components";

export const OrderSummary = ({ totalPrice }: { totalPrice: number }) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <Container>
      {showModal && <PaymentModal setShowModal={setShowModal} />}
      <Header>Order Summary</Header>
      <div>Total Price: ${totalPrice} CAD</div>
      <CheckoutButton onClick={handleClick}>Proceed to checkout</CheckoutButton>
      <ReturnButton
        variant="danger"
        onClick={() => dispatch(setAppView("home"))}
      >
        Return to Home
      </ReturnButton>
    </Container>
  );
};

const Header = styled.div`
  font-weight: bold;
`;

const CheckoutButton = styled(Button)`
  background-color: #4682c8 !important;
  border: none !important;
  font-size: 14px;
  margin-top: 10px;
`;

const ReturnButton = styled(Button)`
  margin-left: 10px;
  margin-top: 10px;
  font-size: 14px;
  background-color: #318c8e !important;
  border: none !important;
`;
