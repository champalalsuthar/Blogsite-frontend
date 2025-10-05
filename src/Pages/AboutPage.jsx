import React from "react";

const AboutPage = () => {
    return (
        <div className="py-16 px-6 mx-8 my-0">
            <h1 className="text-4xl font-bold text-center mb-6 text-primary">
                About Us
            </h1>

            <section className="mb-12 text-center md:text-left">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    BlogSite is a platform built for sharing knowledge. Our mission is to provide a space where writers can share their thoughts and readers can gain valuable insights.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Whether you’re passionate about writing or exploring new ideas, BlogSite has something for everyone. We aim to create a community where ideas are exchanged freely, and learning is encouraged.
                </p>
            </section>

            <section className="text-center">
                <h2 className="text-2xl font-semibold text-primary mb-4">Want to Know More?</h2>
                <p className="text-lg text-gray-700 mb-6">
                    If you have any questions or want to collaborate, feel free to reach out to us. We're always open to new ideas and partnerships.
                </p>
                <a
                    href="/contact"
                    className="bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-primary-dark transition-colors"
                >
                    Contact Us
                </a>
            </section>
        </div>
    );
};

export default AboutPage;
