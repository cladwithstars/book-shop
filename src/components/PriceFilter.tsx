import React, { useState, useEffect } from "react";
import { Dropdown, Button } from "react-bootstrap";
// @ts-ignore
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPriceFilter } from "../app/slices/localDBSlice";
import { selectPriceFilter } from "../app/slices/localDBSlice";
import { db } from "../db";
import { updateBooks } from "../app/slices/bookSlice";

export const PriceFilter = ({ resetState }: { resetState: boolean }) => {
  const priceFilter = useAppSelector(selectPriceFilter);
  const books = db;
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

  const getPriceFilterHeader = () => {
    if (!priceFilter || (priceFilter[0] === "" && priceFilter[1] === "")) {
      return "Filter By Price";
    }
    if (priceFilter && priceFilter[0] && priceFilter[1]) {
      return `$${priceFilter[0]} - $${priceFilter[1]}`;
    } else if (priceFilter[0] && !priceFilter[1]) {
      return `$${priceFilter[0]} - `;
    } else if (priceFilter[1] && !priceFilter[0]) {
      return ` - $${priceFilter[1]} `;
    }
  };

  const filterByPrice = () => {
    if (priceFilter && (priceFilter[0] || priceFilter[1])) {
      const min = priceFilter[0] ? parseInt(priceFilter[0], 10) : 0;
      const max = priceFilter[1] ? parseInt(priceFilter[1], 10) : 99999999999;
      const res = books.filter((bk: any) => bk.price <= max && bk.price >= min);

      return res;
    } else return books;
  };

  const handleApply = () => {
    if (priceFilter) {
      const filteredBooks = filterByPrice();
      dispatch(updateBooks(filteredBooks));
    }
  };

  useEffect(() => {
    if (resetState === true) {
      setLowerRangeVal("");
      setUpperRangeVal("");
    }
  }, [resetState]);

  return (
    <Dropdown>
      <Toggle>{getPriceFilterHeader()}</Toggle>

      <Dropdown.Menu>
        <div style={{ margin: "10px" }}>
          <Header>Range ($) </Header>
          <div style={{ display: "flex" }}>
            <StyledInput
              type="number"
              value={lowerRangeVal}
              max={999}
              onChange={handleLowerRangeValChange}
            />
            <StyledInput
              type="number"
              value={upperRangeVal}
              max={999}
              onChange={handleUpperRangeValChange}
            />
          </div>
          <Dropdown.Item>
            <StyledButton onClick={handleApply}>Apply Filter</StyledButton>
          </Dropdown.Item>
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

const StyledButton = styled(Button)`
  margin-left: 10px;
  margin-top: 10px;
  background-color: #318c8e !important;
  border: none !important;
  font-size: 14px;
  width: 95%;
  cursor: pointer;
`;
