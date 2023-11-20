import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { BookListContainer } from "./BookListContainer";
import { Routes, Route } from "react-router-dom";
import { BookDetailContainer } from "./BookDetailContainer";

function App() {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Routes>
        <Route path="/" element={<BookListContainer />} />
        <Route path="/books/:id" element={<BookDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;
