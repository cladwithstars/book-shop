import React, { useState } from "react";
import { Container, Form, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPriceFilter } from "../app/slices/localDBSlice";
import { selectPriceFilter } from "../app/slices/localDBSlice";

export const PriceFilter = () => {
  const priceFilter = useAppSelector(selectPriceFilter);
  const dispatch = useAppDispatch();
  const [lowerRangeVal, setLowerRangeVal] = useState("");
  const [upperRangeVal, setUpperRangeVal] = useState("");

  const handleLowerRangeValChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value.length < 5) {
      setLowerRangeVal(e.target.value);
      dispatch(setPriceFilter([e.target.value, upperRangeVal]));
    }
  };

  const handleUpperRangeValChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value.length < 5) {
      setUpperRangeVal(e.target.value);
      dispatch(setPriceFilter([lowerRangeVal, e.target.value]));
    }
  };

  return (
    <Dropdown>
      <Toggle id="dropdown-basic">
        {priceFilter
          ? `$${priceFilter[0]} - $${priceFilter[1]}`
          : "Filter By Price"}
      </Toggle>

      <Dropdown.Menu>
        <div style={{ margin: "10px" }}>
          <Header>Range ($) </Header>
          <div style={{ display: "flex" }}>
            <StyledInput
              type="number"
              value={lowerRangeVal}
              max={999}
              onChange={handleLowerRangeValChange}
            />{" "}
            <StyledInput
              type="number"
              value={upperRangeVal}
              max={999}
              onChange={handleUpperRangeValChange}
            />
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const StyledInput = styled.input`
  margin-left: 10px;
  width: 100px;
`;

const Toggle = styled(Dropdown.Toggle)`
  background-color: #4682c8 !important;
  border: none !important;
  font-size: 16px;
`;

const Header = styled.div`
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
`;
