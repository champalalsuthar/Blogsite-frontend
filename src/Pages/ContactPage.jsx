import React from "react";

const ContactPage = () => {
    return (
        <div className="py-10 px-5 mx-8 my-0">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

            <p className="text-gray-700 mb-6">
                We’re here to help! Whether you have questions, feedback, or just want to say hello, feel free to get in touch with us.
            </p>

            <div className="space-y-4 text-gray-700">
                <div>
                    <h2 className="font-semibold text-lg">Email</h2>
                    <a href="mailto:support@example.com" className="text-indigo-600 hover:underline">
                        support@blogsite.com
                    </a>
                </div>

                <div>
                    <h2 className="font-semibold text-lg">Phone</h2>
                    <a href="tel:+1234567890" className="text-indigo-600 hover:underline">
                        +1 (234) 567-890
                    </a>
                </div>
            </div>

            <p className="mt-10 text-gray-600 italic">
                Our support team is available Monday through Friday, 9:00 AM to 6:00 PM.
            </p>
        </div>
    );
};

export default ContactPage;