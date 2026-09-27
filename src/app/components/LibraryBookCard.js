"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, BookOpen, Trash2, CheckCircle2 } from "lucide-react";

export default function LibraryBookCard({ book, onRemove, onMarkAsDone, showMarkAsDone }) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200/60 bg-white p-3 shadow-sm shadow-slate-200/50 transition-shadow hover:shadow-md sm:gap-5 sm:p-4">

            <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:h-28 sm:w-20">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    sizes="80px"
                    className="object-cover"
                />
            </div>

            <div className="min-w-0 flex-1">
                <h3 className="truncate text-base font-bold text-slate-900 sm:text-lg">
                    {book.bookName}
                </h3>
                <p className="mt-0.5 truncate text-sm text-slate-500">
                    by <span className="font-medium text-slate-700">{book.author}</span>
                </p>
                <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        {book.rating}
                    </span>
                    <span className="flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5" />
                        {book.totalPages} pages
                    </span>
                    {book.completed && (
                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-medium text-emerald-600">
                            Completed
                        </span>
                    )}
                </div>
            </div>

            <div className="flex shrink-0 flex-col items-stretch gap-2 sm:flex-row">
                {showMarkAsDone && (
                    <button
                        onClick={() => onMarkAsDone(book.bookId)}
                        title={book.completed ? "Mark as unread" : "Mark as done"}
                        className={`flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${book.completed
                                ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                                : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                            }`}
                    >
                        <CheckCircle2 className="h-4 w-4" />
                        {book.completed ? "Done" : "Mark as done"}
                    </button>
                )}

                <Link
                    href={`/book/${book.bookId}`}
                    className="flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
                >
                    View details
                </Link>

                <button
                    onClick={() => onRemove(book.bookId)}
                    title="Remove"
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition-colors hover:bg-red-100"
                >
                    <Trash2 className="h-4 w-4" />
                    Remove
                </button>
            </div>
        </div>
    );
}