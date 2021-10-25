import React from "react";
import { Container, Row } from "react-bootstrap";
import { Book } from "./Book";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppSelector } from "../app/hooks";
import { selectBooks } from "../app/slices/bookSlice";

export const BookList = () => {
  const books = useAppSelector(selectBooks);

  return (
    <Container className="mt-4 mb-4">
      <Row>
        {books.length > 0 ? (
          books.map((bk: any, idx: number) => (
            <Book
              id={bk.id}
              title={bk.title}
              author={bk.author}
              description={bk.description}
              price={bk.price}
              imgUrl={bk.imgUrl}
            />
          ))
        ) : (
          <div className="text-danger"> No books match these filters </div>
        )}
      </Row>
    </Container>
  );
};
