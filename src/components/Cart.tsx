import React from "react";
import { Container, Button } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectCartBooks } from "../app/slices/cartSlice";
import { CartTable } from "./CartTable";
import { OrderSummary } from "./OrderSummary";
import styled from "styled-components";
import { setAppView } from "../app/slices/localDBSlice";

export const Cart = () => {
  const cartBooks = useAppSelector(selectCartBooks);
  const dispatch = useAppDispatch();
  const getTotalPrice = (bks: any) => {
    const prices = cartBooks.map((bk: any) => bk.price * bk.quantity);
    return prices.reduce((a: any, b: any) => a + b, 0);
  };
  return (
    <Container>
      {cartBooks.length > 0 ? (
        <>
          <CartTable items={cartBooks} totalPrice={getTotalPrice(cartBooks)} />
          <OrderSummary totalPrice={getTotalPrice(cartBooks)} />
        </>
      ) : (
        <>
          <div className="text-danger" style={{ marginTop: "10px" }}>
            Your cart is empty!
          </div>
          <div>
            <StyledButton onClick={() => dispatch(setAppView("home"))}>
              Shop
            </StyledButton>
          </div>
        </>
      )}
    </Container>
  );
};

const StyledButton = styled(Button)`
  margin-top: 10px;
  width: 150px;
  background-color: #4682c8 !important;
  border: 0px !important;
`;
