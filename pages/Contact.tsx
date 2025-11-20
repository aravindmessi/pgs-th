import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion, Variants } from 'framer-motion';
import axios from "axios";
import { services } from '../constants';
import { MailIcon, PhoneIcon, LocationIcon } from '../components/Icons';
import { API_BASE_URL } from "../utils/api.js";

const Contact: React.FC = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        service: "",
        message: ""
    });

    const inputStyle =
        "mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500";

    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9]
            }
        }
    };

    // ------------------------------
    // SUBMIT HANDLER
    // ------------------------------
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${API_BASE_URL}/api/contact`, {
                name: form.name,
                email: form.email,
                subject: form.service,
                message: form.message
            });

            alert("Message sent successfully!");
            console.log(res.data);
        } catch (error) {
            console.error(error);
            alert("Failed to send message");
        }
    };

    return (
        <AnimatedPage>
            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Touch</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Have a question or a project in mind? We'd love to hear from you.
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 bg-gray-900/50 p-8 sm:p-12 rounded-xl border border-gray-800 backdrop-blur-sm"
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                    >

                        {/* LEFT FORM */}
                        <motion.form
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className={inputStyle}
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={inputStyle}
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-300">Select Service</label>
                                <select
                                    id="service"
                                    required
                                    className={inputStyle}
                                    value={form.service}
                                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                                >
                                    <option value="" disabled>Please select a service</option>
                                    {services.map(service => (
                                        <option key={service.id} value={service.id}>{service.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className={inputStyle}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full relative rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 transition-all duration-300 group"
                                    style={{
                                        backgroundSize: '300% 300%',
                                        animation: 'animated-gradient-border-flow 3s linear infinite',
                                    }}
                                >
                                    <span className="block bg-[#0A0A10] text-white rounded-full w-full py-3 text-base font-semibold transition-colors duration-300 group-hover:bg-gradient-to-r from-violet-600 to-indigo-700">
                                        Submit
                                    </span>
                                </button>
                            </div>
                        </motion.form>

                        {/* RIGHT INFO */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-12 md:mt-0"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
                            <p className="text-gray-400 mb-8">
                                Fill up the form and our Team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MailIcon className="h-6 w-6 mr-4 mt-1 text-purple-400 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-white">Email</h4>
                                        <a href="mailto:info@proglobalsolutions.in" className="text-gray-300 hover:text-purple-400 transition-colors">info@proglobalsolutions.in</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <PhoneIcon className="h-6 w-6 mr-4 mt-1 text-purple-400 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-white">Phone</h4>
                                        <a href="tel:9360620595" className="text-gray-300 hover:text-purple-400 transition-colors">9360620595</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <LocationIcon className="h-6 w-6 mr-4 mt-1 text-purple-400 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-white">Address</h4>
                                        <address className="not-italic text-gray-300">
                                            <span className="font-semibold text-white">Studio:</span><br />
                                            F3,1/113, Jmj Complex, TNAU Nagar,<br />
                                            Othakadai Madurai - 625107, Tamil Nadu.<br /><br />

                                            <span className="font-semibold text-white">Main Branch:</span><br />
                                            21-A SM St, Opp BSNL Office,<br />
                                            Sivakasi, Tamil Nadu – 626123
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Contact;
