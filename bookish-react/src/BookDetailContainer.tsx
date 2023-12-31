import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Book } from "./types";

export const BookDetail = ({ book }: { book?: Book }) => {
  return (
    <div className="detail">
      <h2 className="book-title">{book?.name}</h2>
    </div>
  );
};

export const BookDetailContainer = () => {
  const { id } = useParams<string>();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    const fetchBook = async () => {
      const book = await axios.get(`http://localhost:8080/books/${id}`);
      setBook(book.data);
    };
    fetchBook();
  }, [id]);

  return <BookDetail book={book} />;
};
