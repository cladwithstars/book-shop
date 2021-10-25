import React from "react";
import { Container, Button } from "react-bootstrap";
import { PriceFilter } from "./PriceFilter";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectPriceFilter } from "../app/slices/localDBSlice";
import { updateBooks, resetBooks } from "../app/slices/bookSlice";
import { db } from "../db";
import { TextFilter } from "./TextFilter";
// import { setPriceFilter } from "../app/slices/localDBSlice";

export const Filters = () => {
  const priceFilter = useAppSelector(selectPriceFilter);
  const books = db;
  const dispatch = useAppDispatch();

  const filterByPrice = () => {
    if (priceFilter && (priceFilter[0] || priceFilter[1])) {
      const min = priceFilter[0] ? parseInt(priceFilter[0], 10) : 0;
      const max = priceFilter[1] ? parseInt(priceFilter[1], 10) : 99999999999;
      const res = books.filter((bk: any) => bk.price <= max && bk.price >= min);

      return res;
    } else return books;
  };

  const handleSubmit = () => {
    if (priceFilter) {
      const filteredBooks = filterByPrice();
      dispatch(updateBooks(filteredBooks));
    }
  };

  const handleReset = () => {
    dispatch(resetBooks());
  };
  return (
    <Container className="mt-3">
      <div style={{ display: "flex" }}>
        <PriceFilter />
        <StyledButton onClick={handleSubmit}>Apply Filters</StyledButton>
        <ResetButton onClick={handleReset}>Reset Filters</ResetButton>
      </div>
      <TextFilter />
    </Container>
  );
};

const StyledButton = styled(Button)`
  margin-left: 10px;
  background-color: #318c8e !important;
  border: none !important;
  font-size: 14px;
`;

const ResetButton = styled(Button)`
  margin-left: 10px;
  font-size: 14px;
  background-color: #dc3545 !important;
  border: none !important;
`;
