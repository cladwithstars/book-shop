import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { PriceFilter } from "./PriceFilter";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectPriceFilter } from "../app/slices/localDBSlice";
import { updateBooks, resetBooks } from "../app/slices/bookSlice";
import { db } from "../db";
import { TextFilter } from "./TextFilter";
import { setPriceFilter } from "../app/slices/localDBSlice";

export const Filters = () => {
  const priceFilter = useAppSelector(selectPriceFilter);
  const [resetState, setResetState] = useState(false);
  const books = db;
  const dispatch = useAppDispatch();

  const handleReset = () => {
    setResetState(true);
    dispatch(resetBooks());
    dispatch(setPriceFilter(null));
    setTimeout(() => {
      setResetState(false);
    }, 500);
  };
  return (
    <Container className="mt-3">
      <div style={{ display: "flex" }}>
        <TextFilter resetState={resetState} />
        <PriceFilter resetState={resetState} />
        <ResetButton onClick={handleReset}>Reset Filters</ResetButton>
      </div>
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
