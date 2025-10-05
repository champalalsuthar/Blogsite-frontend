import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="bg-gray-50 py-16 px-5 text-center">
            <h1 className="text-4xl font-bold mb-4">
                Welcome to BlogSite
            </h1>
            <p className="text-lg text-gray-600 mb-6">
                Discover amazing blog posts written by our authors. Stay updated with the latest topics.
            </p>
            <Link
                to="/blogs"
                className="inline-block bg-indigo-600 text-white text-base px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
                Explore Blogs
            </Link>
        </section>
    );
};

export default HeroSection;
