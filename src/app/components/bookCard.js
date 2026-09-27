import Image from "next/image";
import { BookOpen, Star } from "lucide-react";
import Link from "next/link";

const BookCardPage = ({ book }) => {
    return (
        <Link href={`/book/${book.bookId}`}>
            <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-md shadow-slate-200/50 transition-all duration-200 hover:-translate-y-1 ">

                {/* Book Image */}
                <div className="relative h-80 w-full overflow-hidden bg-slate-100">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain transition-transform duration-100 ease-out group-hover:scale-80"
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Rating badge */}
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-slate-800 shadow-lg backdrop-blur-md">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        {book.rating}
                    </div>

                    {/* Category badge */}
                    <div className="absolute left-3 top-3 rounded-full bg-indigo-600/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg backdrop-blur-md">
                        {book.category}
                    </div>

                    {/* Bottom-of-image title reveal on hover */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="line-clamp-2 text-sm text-white/90">
                            {book.description}
                        </p>
                    </div>
                </div>

                {/* Book Information */}
                <div className="flex flex-1 flex-col p-5">

                    {/* Book Name */}
                    <h2 className="line-clamp-1 text-lg font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="mt-1 text-sm text-slate-500">
                        by <span className="font-medium text-slate-700">{book.author}</span>
                    </p>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-1.5 text-slate-500">
                            <BookOpen className="h-4 w-4" />
                            <p className="text-sm font-semibold text-slate-800">
                                {book.totalPages} pages
                            </p>
                        </div>
                        <div
                            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-300"
                        >
                            View Details
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCardPage;