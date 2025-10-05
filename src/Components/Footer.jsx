import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-6 sm:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold mb-4">About BlogSite</h3>
                        <p className="text-sm mb-4">
                            BlogSite is your go-to platform for the latest blogs, trends, and ideas. Join us in exploring creative writing, tech, lifestyle, and more!
                        </p>
                        <p className="text-sm">© {new Date().getFullYear()} BlogSite. All rights reserved.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li>
                                <a href="/home" className="text-sm hover:text-primary mb-2 inline-block">Home</a>
                            </li>
                            <li>
                                <a href="/about-us" className="text-sm hover:text-primary mb-2 inline-block">About Us</a>
                            </li>
                            <li>
                                <a href="/blogs" className="text-sm hover:text-primary mb-2 inline-block">Blogs</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-sm hover:text-primary mb-2 inline-block">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex justify-center space-x-6">
                            <a href="https://facebook.com" className="text-2xl hover:text-primary">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com" className="text-2xl hover:text-primary">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" className="text-2xl hover:text-primary">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" className="text-2xl hover:text-primary">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
