import React, { useEffect, useState } from "react";
import { getAllBlogPost } from "../API/getAllBlogPost";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Loader from "../Components/Loader";



const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOrder, setSortOrder] = useState("latest");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [loading, setLoading] = useState(false);
    const blogsPerPage = 3;

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const res = await getAllBlogPost();
                const data = res.data || [];
                setBlogs(data);
                setTotalBlogs(data.length);
                const allCategories = Array.from(new Set(data.flatMap(blog => blog.categories)));
                setCategories(allCategories);
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
            finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, sortOrder]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const paginate = (page) => {
        setCurrentPage(page);
    };

    const getSortedAndFilteredBlogs = () => {
        let filteredBlogs = blogs;

        if (selectedCategory !== "All") {
            filteredBlogs = blogs.filter(blog => blog.categories.includes(selectedCategory));
        }

        filteredBlogs = filteredBlogs.sort((a, b) => {
            if (sortOrder === "latest") {
                return new Date(b.createdAt) - new Date(a.createdAt);
            } else {
                return new Date(a.createdAt) - new Date(b.createdAt);
            }
        });

        return filteredBlogs;
    };

    const paginatedBlogs = getSortedAndFilteredBlogs().slice(
        (currentPage - 1) * blogsPerPage,
        currentPage * blogsPerPage
    );

    const totalPages = Math.ceil(getSortedAndFilteredBlogs().length / blogsPerPage);

    if (loading) return <Loader />;

    return (
        <div className="py-10 px-5 lg:px-20">
            <h1 className="text-3xl font-bold mb-5">All Blogs</h1>

            <div className="mb-4">
                <select
                    onChange={handleCategoryChange}
                    value={selectedCategory}
                    className="border p-2 rounded-md mr-4"
                >
                    <option value="All">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <select
                    onChange={handleSortChange}
                    value={sortOrder}
                    className="border p-2 rounded-md"
                >
                    <option value="latest">Latest First</option>
                    <option value="oldest">Oldest First</option>
                </select>
            </div>
            {paginatedBlogs.length === 0 ? (
                <p>No blogs available.</p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 hover:cursor-pointer">
                    {paginatedBlogs.map((blog, index) => {
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
            )}

            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-8">
                <div className="flex flex-1 justify-between sm:hidden">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{(currentPage - 1) * blogsPerPage + 1}</span> to{" "}
                            <span className="font-medium">
                                {Math.min(currentPage * blogsPerPage, getSortedAndFilteredBlogs().length)}
                            </span>{" "}
                            of <span className="font-medium">{totalBlogs}</span> results
                        </p>
                    </div>
                    <div>
                        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                disabled={currentPage === 1}
                            >
                                <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => paginate(i + 1)}
                                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === i + 1
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                disabled={currentPage === totalPages}
                            >
                                <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
