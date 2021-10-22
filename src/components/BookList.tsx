import React from "react";
import { Container, Row } from "react-bootstrap";
import { Book } from "./Book";
import "bootstrap/dist/css/bootstrap.min.css";

export const BookList = (props: any) => {
  const { books } = props;

  return (
    <Container className="mt-4">
      {/* <BookAddedModal
        title={"Beyond good and evil"}
        author={"nietzsche"}
        showModal={showModal}
      /> */}

      <Row>
        {books.map((bk: any, idx: number) => (
          <Book
            id={bk.id}
            title={bk.title}
            author={bk.author}
            description={bk.description}
            price={bk.price}
            imgUrl={bk.imgUrl}
            // setShowModal={setShowModal}
          />
        ))}
      </Row>
    </Container>
  );
};
