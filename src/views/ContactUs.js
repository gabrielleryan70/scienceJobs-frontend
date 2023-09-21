import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        desc: '',
    });

    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const endpoint = 'https://x0p2y2mno7.execute-api.us-east-1.amazonaws.com/default/sendMail2PostJob';

        axios
            .post(endpoint, formData)
            .then((response) => {
                setSubmitStatus('success');
            })
            .catch((error) => {
                setSubmitStatus('error');
            });
    };

    return (
        <div className="">
            <div className="container mx-auto py-16">
                <h1 className="text-5xl font-semibold text-center text-[#f4a10c] ">LET'S GO!</h1>
                <h4 className="text-center text-gray-500 text-lg mt-4">Tell us what you need, we make it easy.</h4>
                <form className="mt-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name-input"
                                    name="name"
                                    className="w-full px-4 py-3 bg-gray-300 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                    placeholder="Name"
                                    onChange={handleChange}
                                />

                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="email-input"
                                    name="email"
                                    className="w-full px-4 py-3 bg-gray-300 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />

                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="phone-input"
                                    name="phone"
                                    className="w-full px-4 py-3 bg-gray-300 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                />

                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="relative">
                                <textarea
                                    id="description-input"
                                    name="desc"
                                    className="w-full px-4 py-3 bg-gray-300 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                    placeholder="Message"
                                    onChange={handleChange}
                                />
                                <label htmlFor="description-input" className="absolute left-4 top-2 text-gray-600 transition-all">

                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="text-right mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-full bg-transparent border-2 border-orange-500 text-orange-500 font-semibold hover:bg-[#f4a10c] hover:text-white transition duration-300 ease-in-out"
                        >
                            Send
                        </button>
                    </div>
                    {submitStatus === 'success' && (
                        <p className="mt-4 text-center text-green-500">Thank you for your message/feedback, our team will get back to you soon!</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="mt-4 text-center text-red-500">An unknown error occurred.</p>
                    )}
                </form>
            </div>
            <div className="mainContent">
                <div className="container1b bg-white text-yellow-500 font-openSans">
                    GLOBAL OFFICE PHONE NUMBERS
                </div>
                <div className="container1b bg-white text-yellow-500 font-openSans grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ul>
                        <li>
                            <a className="footer-nav__link" href="tel:+1234567890">
                                Asia: +852-3730021(Hong Kong)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:+1234567890">
                                Australia: +61-452070156 (Melbourne)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:+1234567890">
                                Canada: 778 819 1866(Vancouver)
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a className="footer-nav__link" href="tel:+1234567890">
                                Europe: +49-4158730021(Berlin)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:+1234567890">
                                New Zealand: +61-452070156 (Wellington)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:+1234567890">
                                India: +91-2250972736 (Mumbai)
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a className="footer-nav__link" href="tel:+1234567890">
                                United Kingdom: +44-2045876329(London)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:+1234567890">
                                United States: 4158190021 (San Francisco )
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;