import React from "react";
import { Table } from "react-bootstrap";

export const CartTable = (props: any) => {
  const { items, totalPrice } = props;
  return (
    <Table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item: any, idx: number) => (
          <tr>
            <td>{item.title} </td>
            <td>{item.author} </td>
            <td>${item.price} </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
