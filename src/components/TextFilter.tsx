import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { updateBooks } from "../app/slices/bookSlice";
import { db } from "../db";
// @ts-ignore
import styled from "styled-components";

export const TextFilter = ({ resetState }: { resetState: boolean }) => {
  const books = db;
  const dispatch = useAppDispatch();
  const [inputVal, setInputVal] = useState("");
  const handleChange = (e: any) => {
    setInputVal(e.target.value);
  };

  const filterBooks = (val: string) => {
    const formattedVal = val.toLowerCase();
    const filteredBooks = books.filter(
      (el) =>
        el.title?.toLowerCase().includes(formattedVal) ||
        el.author?.toLowerCase().includes(formattedVal)
    );

    dispatch(updateBooks(filteredBooks));
  };

  useEffect(() => {
    filterBooks(inputVal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputVal]);

  useEffect(() => {
    if (resetState === true) {
      setInputVal("");
    }
  }, [resetState]);

  return (
    <InputContainer>
      <StyledInput
        placeholder="Filter by title or author"
        value={inputVal}
        onChange={handleChange}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  margin-right: 10px;
`;

const StyledInput = styled.input`
  outline: none !important;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 16px;
  margin-top: 10px;
`;
