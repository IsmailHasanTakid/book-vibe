import Image from "next/image";
import Link from "next/link";
import bookLogo from "../../../assets/book.ico";
import LibraryPage from "@/app/library/page";
import ProgressPage from "@/app/progress/page";
const Navbar = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Explore", href: "/exploreall" },
        { name: "Progress", href: "/progress" },
        { name: "Wishlist", href: "/library" },
    ];

    return (
        <div className="sticky top-0 z-50 py-5 bg-gradient-to-b from-slate-900 to-transparent">
            <div
                className="mx-auto flex max-w-6xl items-center justify-between bg-slate-900/80 px-6 py-4 shadow-2xl rounded-xl shadow-black/30 backdrop-blur-xl">

                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 ring-1 ring-white/10">
                        <Image
                            className="h-6 w-auto"
                            src={bookLogo}
                            alt="Book Vibe Logo"
                            width={28}
                            height={28}
                        />
                    </div>

                    <p className="text-xl font-bold tracking-tight text-white">
                        Book <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Vibe</span>
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-1 rounded-full bg-white/5 p-1 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="rounded-full px-5 py-2 text-slate-300 transition-all duration-300 hover:bg-indigo-500/15 hover:text-indigo-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <button className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/50">
                    Get Started
                </button>

            </div >
        </div >
    );
};

export default Navbar;
