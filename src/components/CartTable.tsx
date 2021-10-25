import React, { useState } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { updateQuantity, deleteFromCart } from "../app/slices/cartSlice";
import { useAppDispatch } from "../app/hooks";
import { DeleteFromCartModal } from "./DeleteFromCartModal";

export const CartTable = (props: any) => {
  const dispatch = useAppDispatch();
  const { items } = props;
  const [showModal, setShowModal] = useState(false);
  const [currBookForModal, setCurrBookForModal] = useState<number | null>(null);

  // const renderDeleteModal = (id: number) => {
  //       return (<DeleteFromCartModal id={id} />)
  // }

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
            <td>
              {" "}
              <i className="fa fa-trash" /> {item.title}{" "}
            </td>
            <td>
              <div>
                <LeftCaret
                  className="fas fa-caret-left"
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch(updateQuantity({ id: item.id, amount: -1 }));
                    }
                    if (item.quantity === 1) {
                      // dispatch(deleteFromCart(item.id));
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
            <td>${item.price} </td>
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
