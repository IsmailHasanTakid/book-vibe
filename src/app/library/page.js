"use client";

import { useState } from "react";
import { useLibrary } from "../context/LibraryContext";
import LibraryBookCard from "../components/LibraryBookCard";

export default function LibraryPage() {
    const [activeTab, setActiveTab] = useState("wishlist");
    const { wishlist, readingList, removeFromWishlist, removeFromReadingList, markAsDone } = useLibrary();

    const isWishlist = activeTab === "wishlist";
    const books = isWishlist ? wishlist : readingList;

    const handleRemove = (bookId) => {
        if (isWishlist) removeFromWishlist(bookId);
        else removeFromReadingList(bookId);
    };

    return (
        <main className="min-h-screen bg-[#EAE3D3] px-4 py-8 sm:px-6">
            <div className="mx-auto max-w-3xl">

                {/* Tabs */}
                <div className="flex gap-4 border-b border-slate-300">
                    <button
                        onClick={() => setActiveTab("wishlist")}
                        className={`pb-3 text-sm font-semibold ${isWishlist
                                ? "border-b-2 border-indigo-600 text-indigo-600"
                                : "text-slate-500"
                            }`}
                    >
                        Wishlist ({wishlist.length})
                    </button>
                    <button
                        onClick={() => setActiveTab("readinglist")}
                        className={`pb-3 text-sm font-semibold ${!isWishlist
                                ? "border-b-2 border-indigo-600 text-indigo-600"
                                : "text-slate-500"
                            }`}
                    >
                        Reading List ({readingList.length})
                    </button>
                </div>

                {/* Cards — single column list */}
                <div className="mt-6 flex flex-col gap-4">
                    {books.length === 0 ? (
                        <p className="text-slate-500">এখানে এখনো কিছু নেই।</p>
                    ) : (
                        books.map((book) => (
                            <LibraryBookCard
                                key={book.bookId}
                                book={book}
                                onRemove={handleRemove}
                                onMarkAsDone={markAsDone}
                                showMarkAsDone={!isWishlist}
                            />
                        ))
                    )}
                </div>
            </div>
        </main>
    );
}