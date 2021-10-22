import React from "react";
import { Container } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import { selectCartBooks } from "../redux/slices/cartSlice";
// import { CartBook } from "./CartBook";
import { CartTable } from "./CartTable";

export const Cart = () => {
  const cartBooks = useAppSelector(selectCartBooks);
  const getTotalPrice = (bks: any) => {
    const prices = cartBooks.map((bk: any) => bk.price);
    return prices.reduce((a: any, b: any) => a + b, 0);
  };
  return (
    <Container>
      <CartTable />
      {/* <ul>
        {cartBooks.map((bk: any, idx: number) => (
          <CartBook
            title={bk.title}
            author={bk.author}
            description={bk.description}
            id={bk.id}
          />
        ))}
      </ul> */}
      Total cost: ${getTotalPrice(cartBooks)}
    </Container>
  );
};
