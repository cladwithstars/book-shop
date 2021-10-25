import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { setAppView } from "../app/slices/localDBSlice";
import { useAppDispatch } from "../app/hooks";
// import { emptyCart } from "../app/slices/cartSlice";
import { PaymentModal } from "./PaymentModal";
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
      <Button
        style={{ marginTop: "10px" }}
        variant="success"
        onClick={handleClick}
      >
        Proceed to checkout
      </Button>
      <Button
        style={{ marginTop: "10px", marginLeft: "10px" }}
        variant="danger"
        onClick={() => dispatch(setAppView("home"))}
      >
        Return to Home
      </Button>
    </Container>
  );
};

const Header = styled.div`
  font-weight: bold;
`;
