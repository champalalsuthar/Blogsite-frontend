import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogPostById } from "../API/fetchBlogPostById";
import Loader from "../Components/Loader";

const BlogDetailsPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);
            try {
                const res = await fetchBlogPostById(id);
                setBlog(res.data);
            } catch (err) {
                console.error("Error fetching blog details:", err);
                if (err?.response?.data?.message === "Post not found") {
                    setBlog({
                        title: "Post Not Found",
                        content: "Sorry, the blog post you are looking for does not exist or has been removed. Please check back later or explore other posts."
                    });
                }
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    if (loading) return <Loader />;

    const createdDate = new Date(blog?.createdAt);
    const formattedDate = createdDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    });

    const updatedDate = new Date(blog?.updatedAt);
    const formattedUpdatedDate = updatedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    });

    return (
        <div className="py-10 px-5 lg:px-20 mx-8 my-0">
            {blog?.featuredImage && (
                <img
                    src={blog?.featuredImage}
                    alt={blog?.title}
                    className="w-full h-80 object-cover rounded-lg mb-8 shadow-md"
                />
            )}

            <h1 className="text-4xl font-bold mb-2">{blog?.title}</h1>

            {blog && blog?.updatedAt && blog.author && (
                <p>
                    By <span className="font-medium">{blog?.author}</span> | Last update on {formattedUpdatedDate}
                </p>
            )}

            {/* Categories */}
            {
                blog?.categories && blog?.categories.length > 0 && (
                    <div className="mb-5">
                        <h4 className="text-lg font-semibold text-gray-700">Categories:</h4>
                        <div className="flex flex-wrap">
                            {blog?.categories.map((cat) => (
                                <span
                                    key={cat}
                                    className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mr-2 mt-2"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>
                )
            }

            {/* Tags */}
            {
                blog?.tags && blog?.tags.length > 0 && (
                    <div className="mb-5">
                        <h4 className="text-lg font-semibold text-gray-700">Tags:</h4>
                        <div className="flex flex-wrap">
                            {blog?.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mr-2 mt-2"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )
            }

            <div
                className="text-gray-800 leading-relaxed prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
            />
        </div >
    );
};

export default BlogDetailsPage;
