import React from 'react';
import BookCardPage from '../components/bookCard';
import booksData from "../../../public/data.json";

const ExplorAllBookPage = () => {
    return (
        <section className="mx-auto max-w-6xl px-6 py-16">
            {/* Header */}
            <div className="mb-10 flex flex-col gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white">
                        Every book,
                        <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            one shelf.
                        </span>
                    </h1>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                        Browse the full collection and pick up where your next story starts.
                    </p>
                </div>

                <p className="text-sm text-slate-500">
                    {booksData.length} {booksData.length === 1 ? "book" : "books"} available
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {booksData.map((book) => (
                    <BookCardPage key={book.id} book={book} />
                ))}
            </div>
        </section>
    );
};

export default ExplorAllBookPage;