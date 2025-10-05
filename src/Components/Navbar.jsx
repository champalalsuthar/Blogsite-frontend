
import { useEffect, useRef, useState } from "react";
import {
    MdOutlineSupportAgent,
    MdWifiCalling2,
} from "react-icons/md";
import { Link, useLocation, useMatch } from "react-router-dom";
import { GoHome, GoPeople } from "react-icons/go";

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("/");
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);
    const sidebarRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                isSidebarOpen
            ) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen]);
    const isLinkActive = (path) => {
        return activeLink === path;
    };
    return (
        <>

            <nav
                className={` w-full shadow-md bg-white z-50 sticky top-0 left-0`}
            >
                <div className="container">
                    <div className="flex items-center justify-between mx-auto sm:px-6 py-4 w-full max-w-7xl">
                        <div className="flex items-center">
                            <button
                                onClick={toggleSidebar}
                                type="button"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-primary transition-colors lg:hidden mr-3"
                                aria-label="Open menu"
                            >
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>

                            <Link to="/" className="flex items-center group">
                                <span className="text-primary text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primaryCoral transition-colors duration-300">
                                    Blog
                                    <span className="text-primaryCoral group-hover:text-primary transition-colors duration-300">
                                        Site
                                    </span>
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link
                                to="/"
                                className={`font-medium text-sm transition-colors duration-200 flex items-center gap-2 py-2 px-3 rounded-md text-black`}
                            >
                                <span>Home</span>
                            </Link>

                            <Link
                                to="about-us"
                                className={`font-medium text-sm transition-colors duration-200 flex items-center gap-2 py-2 px-3 rounded-md text-black`}
                            >
                                <span>About</span>
                            </Link>

                            <Link
                                to="blogs"
                                className={`font-medium text-sm transition-colors duration-200 flex items-center gap-2 py-2 px-3 rounded-md text-black`}
                            >
                                <span>Blogs</span>
                            </Link>
                            <Link
                                to="contact"
                                className={`font-medium text-sm transition-colors duration-200 flex items-center gap-2 py-2 px-3 rounded-md text-black`}
                            >
                                <span>Support</span>
                            </Link>


                        </div>

                    </div>
                </div>
            </nav>

            <div
                ref={sidebarRef}
                className={`lg:hidden z-[500] fixed top-0 left-0 h-full bg-white z-50 w-72 shadow-xl transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-5 border-b">
                        <Link
                            to="/"
                            onClick={toggleSidebar}
                            className="flex items-center group"
                        >
                            <span className="text-primary text-2xl font-bold tracking-tight">
                                Blog<span className="text-primaryCoral">Sites</span>
                            </span>
                        </Link>
                        <button
                            onClick={toggleSidebar}
                            className="p-2 text-gray-500 hover:text-primary rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Close menu"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto py-3">
                        <div className="px-3 space-y-1">
                            <Link
                                to="/"
                                className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-black`}
                                onClick={toggleSidebar}
                            >
                                <GoHome className="text-xl" />
                                <span className="font-medium">Home</span>
                            </Link>

                            <Link
                                to="about-us"
                                className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-black`}
                                onClick={toggleSidebar}
                            >
                                <GoPeople className="text-xl" />
                                <span className="font-medium">About</span>
                            </Link>

                            <Link
                                to="contact"
                                className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-black`}
                                onClick={toggleSidebar}
                            >
                                <MdOutlineSupportAgent className="text-xl" />
                                <span className="font-medium">Support</span>
                            </Link>
                            <Link
                                to="blogs"
                                className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-black`}
                                onClick={toggleSidebar}
                            >
                                <MdWifiCalling2 className="text-xl" />
                                <span className="font-medium">Blogs</span>
                            </Link>


                        </div>
                    </div>
                </div>
            </div>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
};

export default Navbar;

