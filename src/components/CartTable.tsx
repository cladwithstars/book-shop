import React, { useState } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { updateQuantity } from "../app/slices/cartSlice";
import { useAppDispatch } from "../app/hooks";
import { DeleteFromCartModal } from "./DeleteFromCartModal";

export const CartTable = (props: any) => {
  const dispatch = useAppDispatch();
  const { items } = props;
  const [showModal, setShowModal] = useState(false);
  const [currBookForModal, setCurrBookForModal] = useState<number | null>(null);

  return (
    <Table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item: any, idx: number) => (
          <tr>
            <td>{item.title} </td>
            <td>
              <div>
                <LeftCaret
                  className="fas fa-caret-left"
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch(updateQuantity({ id: item.id, amount: -1 }));
                    }
                    if (item.quantity === 1) {
                      setShowModal(true);
                      setCurrBookForModal(item.id);
                    }
                  }}
                />
                {item.quantity}
                <RightCaret
                  className="fas fa-caret-right"
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, amount: 1 }))
                  }
                />
              </div>
            </td>
            <td>
              <div style={{ marginLeft: "10px" }}>${item.price} </div>
            </td>
            <td>
              <TrashIcon
                className="fas fa-trash"
                onClick={() => {
                  setShowModal(true);
                  setCurrBookForModal(item.id);
                }}
              />{" "}
            </td>
          </tr>
        ))}
      </tbody>
      {showModal && currBookForModal && (
        <DeleteFromCartModal
          setShowModal={setShowModal}
          id={currBookForModal}
        />
      )}
    </Table>
  );
};

const LeftCaret = styled.i`
  margin-right: 5px;
  cursor: pointer;
`;

const RightCaret = styled.i`
  margin-left: 5px;
  cursor: pointer;
`;

const TrashIcon = styled.i`
  color: red !important;
  cursor: pointer;
  margin-left: 10px;
`;
