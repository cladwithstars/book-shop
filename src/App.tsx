import React from "react";

import { TopBar } from "./components/TopBar";
import { Cart } from "./components/Cart";
import { BookList } from "./components/BookList";
import { NavbarComponent } from "./components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
// import { Container, Row } from "react-bootstrap";
import { db } from "./db.js";
import { useAppSelector } from "./app/hooks";
import { selectAppView } from "./app/slices/localDBSlice";
import "./App.css";

function App() {
  const appView = useAppSelector(selectAppView);

  return (
    <div className="App">
      <NavbarComponent />
      {appView === "home" && (
        <>
          <TopBar />
          <BookList books={db} />
        </>
      )}
      {appView === "cart" && <Cart />}
    </div>
  );
}

export default App;
