import Image from "next/image";
import { Fraunces, Inter } from "next/font/google";
import BookActions from "../../components/BookAction";

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    style: ["normal", "italic"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export default async function BookDetailsPage({ params }) {

    const { id } = await params;

    const res = await fetch("http://localhost:3000/data.json");
    if (!res.ok) {
        return (
            <main className={`${inter.className} flex min-h-screen items-center justify-center bg-[#EAE3D3] px-5`}>
                <p className="text-[#4B453D]">The book details page couldn&apos;t open. Please try again.</p>
            </main>
        );
    }
    const books = await res.json();

    const book = books.find(
        book => book.bookId === parseInt(id)
    );

    if (!book) {
        return (
            <main className={`${inter.className} flex min-h-screen items-center justify-center bg-[#EAE3D3] px-5`}>
                <p className="text-[#4B453D]">This book isn&apos;t in the catalog.</p>
            </main>
        );
    }

    return (
        <main
            className={`${inter.className} relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-4`}
            style={{
                background: `
                    radial-gradient(circle at 12% 18%, rgba(166,87,62,0.20), transparent 42%),
                    radial-gradient(circle at 88% 10%, rgba(27,58,43,0.22), transparent 48%),
                    radial-gradient(circle at 50% 92%, rgba(184,146,75,0.20), transparent 55%),
                    linear-gradient(160deg, #F1EBDC 0%, #E7DDC6 55%, #E0D3B7 100%)
                `,
            }}
        >

            {/* Ambient color blobs for depth */}
            <div aria-hidden className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[#B8924B]/25 blur-[100px]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-20 h-[26rem] w-[26rem] rounded-full bg-[#1B3A2B]/25 blur-[110px]" />
            <div aria-hidden className="pointer-events-none absolute right-1/4 top-0 h-64 w-64 rounded-full bg-[#A6573E]/20 blur-[90px]" />

            {/* Fine grain texture over the whole scene */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
            />

            {/* Gradient-ring wrapper around the book */}
            <div className="relative w-full max-w-4xl rounded-2xl bg-gradient-to-br from-[#B8924B] via-[#E3D9C4]/60 to-[#1B3A2B]/50 p-[1.5px] shadow-[0_45px_90px_-25px_rgba(20,42,31,0.5),0_18px_40px_-15px_rgba(184,146,75,0.35)]">

                <div className="max-h-[92vh] overflow-hidden rounded-[15px]">

                    {/* Gilt top edge, like the gold-leafed edge of a hardcover */}
                    <div className="h-[6px] w-full bg-gradient-to-r from-[#8F7139] via-[#EDCB7E] to-[#8F7139]" />

                    <div className="flex flex-col bg-[#F7F2E7] lg:flex-row">

                        {/* ================= LEFT PAGE — COVER ================= */}
                        <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1F4531] to-[#132A1F] px-8 py-6 sm:py-8 lg:w-[38%]">

                            {/* Linen texture */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                                style={{ backgroundImage: "repeating-linear-gradient(45deg, #E9C88A 0 1px, transparent 1px 7px)" }}
                            />
                            {/* Spotlight glow behind the cover */}
                            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E9C88A]/25 blur-[70px]" />

                            <div className="group relative">

                                {/* Brass mat frame */}
                                <div className="pointer-events-none absolute -inset-3 rounded-[2px] border border-[#B8924B]/40" />
                                <span className="pointer-events-none absolute -left-3 -top-3 h-4 w-4 border-l-2 border-t-2 border-[#E9C88A]" />
                                <span className="pointer-events-none absolute -right-3 -top-3 h-4 w-4 border-r-2 border-t-2 border-[#E9C88A]" />
                                <span className="pointer-events-none absolute -bottom-3 -left-3 h-4 w-4 border-b-2 border-l-2 border-[#E9C88A]" />
                                <span className="pointer-events-none absolute -bottom-3 -right-3 h-4 w-4 border-b-2 border-r-2 border-[#E9C88A]" />

                                <div className="relative overflow-hidden rounded-[2px] shadow-[0_25px_55px_-12px_rgba(0,0,0,0.65)] transition-transform duration-500 group-hover:-translate-y-1.5">
                                    <Image
                                        src={book.image}
                                        alt={book.bookName}
                                        width={220}
                                        height={330}
                                        className="h-[240px] w-[170px] object-cover sm:h-[320px] sm:w-[220px]"
                                        priority
                                    />
                                </div>

                                {/* Rating seal */}
                                <div className="absolute -bottom-5 -right-5 hidden h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-[#E9C88A] bg-gradient-to-br from-[#24503B] to-[#122219] shadow-[0_12px_25px_-8px_rgba(0,0,0,0.65)] lg:flex">
                                    <span className={`${fraunces.className} text-base text-[#F7F2E7]`}>{book.rating}</span>
                                    <span className="text-[9px] text-[#E9C88A]">rating</span>
                                </div>

                            </div>

                        </div>

                        {/* Page-edge stack, mimicking an open book's gutter */}
                        <div className="relative hidden w-4 shrink-0 bg-[#F7F2E7] lg:block">
                            <div className="absolute inset-y-3 left-0 w-[3px] bg-[#EFE6D3]" />
                            <div className="absolute inset-y-4 left-[4px] w-[3px] bg-[#E3D6B8]" />
                            <div className="absolute inset-y-5 left-[8px] w-[3px] bg-[#D8C79E]" />
                            <div className="absolute inset-y-0 left-[12px] w-[6px] bg-gradient-to-r from-black/20 to-transparent" />
                        </div>

                        {/* ================= RIGHT PAGE — DETAILS ================= */}
                        <div className="relative flex-1 overflow-y-auto px-6 py-5 sm:px-10 sm:py-6" style={{ maxHeight: "92vh" }}>

                            {/* Faint paper dot-grain */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                                style={{ backgroundImage: "radial-gradient(#1B3A2B 0.6px, transparent 0.6px)", backgroundSize: "14px 14px" }}
                            />

                            <div className="relative">

                                {/* Category */}
                                <span className="inline-block rounded-sm border border-[#B8924B]/40 bg-gradient-to-r from-[#EFE6D3] to-[#E3D2A8] px-3 py-1 text-xs font-medium text-[#1B3A2B] shadow-sm">
                                    {book.category}
                                </span>

                                {/* Title */}
                                <h1 className={`${fraunces.className} mt-3 text-2xl font-medium leading-[1.15] text-[#241F1B] sm:text-3xl`}>
                                    {book.bookName}
                                </h1>

                                {/* Author */}
                                <p className="mt-1.5 text-sm text-[#6E6355]">
                                    by <span className="font-medium text-[#241F1B]">{book.author}</span>
                                </p>

                                <div className="my-3 h-px bg-gradient-to-r from-[#B8924B]/50 via-[#E3D9C4] to-transparent" />

                                {/* Rating + Pages (colophon line) */}
                                <div className="flex flex-wrap gap-x-10 gap-y-1">
                                    <div>
                                        <p className="text-xs text-[#9A8F7D]">Rating</p>
                                        <p className={`${fraunces.className} text-base text-[#241F1B]`}>{book.rating} / 5</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#9A8F7D]">Pages</p>
                                        <p className={`${fraunces.className} text-base text-[#241F1B]`}>{book.totalPages}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mt-4">
                                    <h2 className="text-sm font-semibold text-[#241F1B]">About this book</h2>
                                    <p
                                        className="mt-1 max-w-[62ch] text-[14px] leading-6 text-[#4B453D]"
                                        style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}
                                    >
                                        {book.description}
                                    </p>
                                </div>

                                {/* Review */}
                                <div className="relative mt-4 max-w-[62ch] rounded-r-sm border-l-2 border-[#B8924B] bg-gradient-to-r from-[#EFE6D3]/60 to-transparent py-2 pl-5">
                                    <span className={`${fraunces.className} pointer-events-none absolute -left-1 -top-2 text-3xl italic text-[#B8924B]/50`}>
                                        &rdquo;
                                    </span>
                                    <p
                                        className={`${fraunces.className} text-[14px] italic leading-6 text-[#4B453D]`}
                                        style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
                                    >
                                        {book.review}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="mt-4">
                                    <h2 className="text-sm font-semibold text-[#241F1B]">Tags</h2>
                                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                                        {book.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-sm border border-[#E3D9C4] bg-[#F7F2E7] px-2 py-0.5 text-[12px] text-[#6E6355] shadow-sm transition-colors hover:border-[#B8924B] hover:text-[#1B3A2B]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Metadata */}
                                <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[#E3D9C4] pt-4">
                                    <div>
                                        <p className="text-xs text-[#9A8F7D]">Publisher</p>
                                        <p className="mt-0.5 text-sm font-medium text-[#241F1B]">{book.publisher}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#9A8F7D]">Published</p>
                                        <p className="mt-0.5 text-sm font-medium text-[#241F1B]">{book.yearOfPublishing}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#9A8F7D]">Book ID</p>
                                        <p className="mt-0.5 text-sm font-medium text-[#241F1B]">#{book.bookId}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#9A8F7D]">Category</p>
                                        <p className="mt-0.5 text-sm font-medium text-[#241F1B]">{book.category}</p>
                                    </div>
                                </div>

                                {/* Actions */}
                               <BookActions book={book}/>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
}