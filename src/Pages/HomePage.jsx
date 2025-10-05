import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import { getAllBlogPost } from "../API/getAllBlogPost";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const res = await getAllBlogPost();
                const data = res.data || [];
                setBlogs(data?.slice(0, 3));
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
            finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <>
            <section className="bg-gray-50 py-16 px-5 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Welcome to BlogSite
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Discover amazing blog posts written by our authors. Stay updated with the latest topics.
                </p>

            </section>
            <div className="py-10 px-5 lg:px-20">
                {blogs.length === 0 ? (
                    <></>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold mb-5">Most Popular Blogs</h1>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 hover:cursor-pointer">
                            {blogs.map((blog, index) => {
                                const date = new Date(blog.createdAt);
                                const dateOptions = { year: 'numeric', month: 'short', day: '2-digit' };
                                const formattedDate = date.toLocaleDateString('en-US', dateOptions);

                                return (
                                    <div
                                        key={blog._id}
                                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
                                        onClick={() => window.location.href = `/blogpost/${blog._id}`}
                                    >
                                        <div className="h-52 overflow-hidden relative">
                                            <img
                                                src={blog.featuredImage || "https://via.placeholder.com/400x300?text=No+Image"}
                                                alt={blog.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                                                    {blog.categories?.[0] || "General"}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            <div className="flex justify-end mb-2">
                                                <span className="text-xs text-gray-500">{formattedDate}</span>
                                            </div>

                                            <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                                                {blog.title}
                                            </h2>

                                            <div
                                                className="text-gray-800 leading-relaxed prose max-w-none"
                                                dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 150) + "..." }}
                                            />

                                            <p className="text-sm text-gray-500">By {blog?.author}</p>

                                            <div className="flex items-center pt-2 border-t border-gray-100">
                                                <span className="text-blue-500 group-hover:text-blue-600 text-sm font-medium flex items-center transition-colors ">
                                                    Read More
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )
                }
            </div >
            <section className="bg-gray-50 py-16 px-5 text-center">
                <Link
                    to="/blogs"
                    className="inline-block bg-indigo-600 text-white text-base px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200"
                >
                    Explore All Blogs
                </Link>
            </section>

        </>
    );
};

export default HomePage;
