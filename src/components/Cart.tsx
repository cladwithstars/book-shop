import React from "react";
import { Container } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import { selectCartBooks } from "../app/slices/cartSlice";
// import { CartBook } from "./CartBook";
import { CartTable } from "./CartTable";
import { OrderSummary } from "./OrderSummary";

export const Cart = () => {
  const cartBooks = useAppSelector(selectCartBooks);
  const getTotalPrice = (bks: any) => {
    const prices = cartBooks.map((bk: any) => bk.price);
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
        <div className="text-danger">Your cart is empty!</div>
      )}
    </Container>
  );
};
