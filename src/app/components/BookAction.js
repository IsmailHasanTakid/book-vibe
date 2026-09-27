"use client";
import { useLibrary } from "@/app/context/LibraryContext";


export default function BookActions({ book }) {


    const { addToWishlist, addToReadingList, wishlist, readingList } = useLibrary();
    const inWishlist = wishlist.some((item) => item.bookId === book.bookId);
    const inReadingList = readingList.some((item) => item.bookId === book.bookId);

    return (
        <div className="mt-5 flex flex-wrap gap-3">
            <button
                onClick={() => addToWishlist(book)}
                disabled={inWishlist}
                className="rounded-sm bg-gradient-to-r from-[#1F4531] to-[#132A1F] px-5 py-2.5 text-sm font-medium text-[#F7F2E7] shadow-[0_10px_20px_-8px_rgba(19,42,31,0.6)] transition-transform hover:-translate-y-0.5 disabled:opacity-50"
            >
                {inWishlist ? "Added to wishlist" : "Add to wishlist"}
            </button>
            <button
                onClick={() => addToReadingList(book)}
                disabled={inReadingList}
                className="rounded-sm border border-[#1B3A2B] px-5 py-2.5 text-sm font-medium text-[#1B3A2B] transition-colors hover:bg-[#1B3A2B] hover:text-[#F7F2E7] disabled:opacity-50"
            >
                {inReadingList ? "Added to reading list" : "Add to reading list"}
            </button>
        </div>

    );
}

