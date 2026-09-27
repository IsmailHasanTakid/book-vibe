"use client"
import { useState, useEffect } from "react";
import HeroPage from "./components/hero/page";
import BookCardPage from "./components/bookCard";


export default function Home() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch("/data.json")
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);




  return (
    <div>

      <HeroPage />

      <div className="grid grid-cols-1 gap-8 px-20  py-10 sm:grid-cols-2 lg:grid-cols-3">
        {books.slice(0, 9).map((book) => (
          <BookCardPage key={book.bookId} book={book} />
        ))}
      </div>

    </div>
  );
}
