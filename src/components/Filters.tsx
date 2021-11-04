import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { PriceFilter } from "./PriceFilter";
// @ts-ignore
import styled from "styled-components"; //
import { useAppDispatch } from "../app/hooks";

import { resetBooks } from "../app/slices/bookSlice";

import { TextFilter } from "./TextFilter";
import { setPriceFilter } from "../app/slices/localDBSlice"; //

export const Filters = () => {
  const [resetState, setResetState] = useState(false);
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
      <div style={{ display: "flex", marginLeft: "20px", flexWrap: "wrap" }}>
        <TextFilter resetState={resetState} />
        <PriceFilter resetState={resetState} />
        <ResetButton onClick={handleReset}>Reset</ResetButton>
      </div>
    </Container>
  );
};

const ResetButton = styled(Button)`
  margin-left: 10px;
  font-size: 14px;
  background-color: #dc3545 !important;
  border: none !important;
`;
