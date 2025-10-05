
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

            <p className="text-gray-500 mb-5">
                By <span className="font-medium">{blog?.author}</span> |{" "}
                {formattedDate}
            </p>

            {blog?.categories && blog?.categories.length > 0 && (
                <div className="mb-5">
                    {blog?.categories.map((cat) => (
                        <span
                            key={cat}
                            className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mr-2"
                        >
                            {cat}
                        </span>
                    ))}
                </div>
            )}

            <div
                className="text-gray-800 leading-relaxed prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
            />
        </div>
    );
};

export default BlogDetailsPage;
