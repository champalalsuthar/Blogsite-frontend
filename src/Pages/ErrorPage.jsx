import { useRouteError } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <Navbar />
            <div
                id="error-page"
                className="flex flex-col items-center justify-center h-screen w-full bg-gray-100"
            >
                <h1 className="text-4xl font-bold text-[#B91C1C]">Oops!</h1>
                <p className="text-lg text-gray-600">
                    Sorry, an unexpected error has occurred.
                </p>
                <p className="text-lg text-gray-600">
                    <i>{error.statusText || error.message}</i>
                </p>
                <p className="mt-4">
                    <a href="/" className="text-blue-600 underline">
                        Go back to the homepage
                    </a>
                </p>
            </div>
            <Footer />
        </>
    );
}
export default ErrorPage;
