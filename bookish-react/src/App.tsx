import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { BookList } from "./BookList";
import axios from "axios";
import type { Book } from "./types";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => setBooks(res.data));
  }, []);
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookList books={books} />
    </>
  );
}

export default App;
