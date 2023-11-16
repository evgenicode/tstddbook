import React, { useEffect, useState } from "react";
import { useBooks } from "./useBooks";
import { BookList } from "./BookList";

export const BookListContainer = () => {
  const { loading, error, books } = useBooks();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return <BookList books={books} />;
};
