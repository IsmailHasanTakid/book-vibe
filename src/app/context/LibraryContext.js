"use client"
import { useState, useEffect, createContext, useContext } from "react";

const LibraryContext = createContext();

export function LibraryProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);
    const [readingList, setReadingList] = useState([]);

    useEffect(() => {
        const savedWishlist = localStorage.getItem("wishlist")
        const savedReadingList = localStorage.getItem("readingList");
        if (savedWishlist) {
            setWishlist(JSON.parse(savedWishlist));
        }
        if (savedReadingList) {
            setReadingList(JSON.parse(savedReadingList));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );
    }, [wishlist]);


    useEffect(() => {
        localStorage.setItem(
            "readingList",
            JSON.stringify(readingList)
        );
    }, [readingList]);


    const addToWishlist = (book) => {
        setWishlist((previousBooks) => {
            const alreadyExists = previousBooks.some((item) => item.bookId === book.bookId);
            if (alreadyExists) {
                return previousBooks;
            }

            return [...previousBooks, book];
        });
    };
    const addToReadingList = (book) => {
        setReadingList((previousBooks) => {
            const alreadyExists = previousBooks.some((item) => item.bookId === book.bookId);
            if (alreadyExists) {
                return previousBooks;
            }

            return [...previousBooks, book];
        });
    };

    const removeFromWishlist = (bookId) => {
        setWishlist((previousBooks) => {

            return previousBooks.filter((book) => book.bookId !== bookId);
        });
    };
    const removeFromReadingList = (bookId) => {
        setReadingList((previousBooks) => {

            return previousBooks.filter((book) => book.bookId !== bookId);
        });
    };
    const markAsDone = (bookId) => {
        setReadingList((prev) =>
            prev.map((b) =>
                b.bookId === bookId ? { ...b, completed: !b.completed } : b
            )
        );
    };


    return (
        <LibraryContext.Provider
            value={{
                wishlist, readingList, addToWishlist, addToReadingList, removeFromReadingList, 
                removeFromWishlist, markAsDone
            }}


        >
            {children}

        </LibraryContext.Provider>
    );


}

export function useLibrary() {
    return useContext(LibraryContext);
}