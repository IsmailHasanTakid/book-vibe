import React from "react";
import Image from "next/image";

import hero from "../../../assets/hero_img.jpg";

const HeroPage = () => {
    return (
        <section className="px-5 py-10 md:px-10 lg:px-16">
            <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-purple-100 px-6 py-10 shadow-xl md:flex-row md:px-12 lg:px-16">

                {/* Decorative background circle */}
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-200/40 blur-3xl"></div>

                {/* Left Side - Content */}
                <div className="relative z-10 max-w-xl text-center md:text-left">

                    {/* Small Badge */}
                    <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
                        📚 Your Knowledge Journey Starts Here
                    </span>

                    {/* Heading */}
                    <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                        Welcome to our{" "}
                        <span className="text-indigo-600">
                            Knowledge Arena.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
                        Discover amazing books, explore new ideas, and build
                        your personal reading journey — all in one place.
                    </p>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">

                        <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-indigo-700 hover:shadow-xl">
                            Explore Books →
                        </button>

                        <button className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition duration-300 hover:border-indigo-400 hover:text-indigo-600">
                            My Wishlist ♡
                        </button>

                    </div>

                    {/* Small Stats */}
                    <div className="mt-8 flex justify-center gap-8 md:justify-start">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                100+
                            </h3>
                            <p className="text-sm text-gray-500">
                                Books
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                50+
                            </h3>
                            <p className="text-sm text-gray-500">
                                Authors
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                4.8★
                            </h3>
                            <p className="text-sm text-gray-500">
                                Rating
                            </p>
                        </div>
                    </div>

                </div>

                {/* Right Side - Hero Image */}
                <div className="relative z-10 mt-10 md:mt-0 md:w-[45%]">

                    {/* Image Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-indigo-400/20 blur-3xl"></div>

                    <Image
                        src={hero}
                        alt="Books and knowledge"
                        width={600}
                        height={500}
                        priority
                        className="relative w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
                    />

                </div>

            </div>
        </section>
    );
};

export default HeroPage;