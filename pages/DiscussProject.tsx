import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion, Variants } from 'framer-motion';
import axios from "axios";
import { services } from '../constants';
import { API_BASE_URL } from "../utils/api.js";

const DiscussProject: React.FC = () => {

    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        details: ""
    });

    const inputStyle =
        "mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition";

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
            const res = await axios.post(`${API_BASE_URL}/api/discuss`, {
                name: form.name,
                email: form.email,
                phone: form.phone,
                company: form.company,
                projectType: form.service,
                budget: form.budget,
                message: form.details
            });

            alert("Form submitted successfully!");
            console.log(res.data);

        } catch (error) {
            console.error(error);
            alert("Failed to submit form");
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
                            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Amazing</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Provide us with a few details about your project, and we'll get back to you with a plan.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl mx-auto bg-gray-900/50 p-8 sm:p-12 rounded-2xl border border-gray-800 backdrop-blur-sm"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className={inputStyle}
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-300">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    className={inputStyle}
                                    value={form.company}
                                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className={inputStyle}
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Your Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className={inputStyle}
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="service" className="block text-sm font-medium text-gray-300">What service are you interested in? *</label>
                                <select
                                    id="service"
                                    required
                                    className={inputStyle}
                                    value={form.service}
                                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                                >
                                    <option value="" disabled>Please select a service</option>
                                    {services.map(service => (
                                        <option key={service.id} value={service.id}>
                                            {service.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-300">Estimated Budget</label>
                                <select
                                    id="budget"
                                    className={inputStyle}
                                    value={form.budget}
                                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                                >
                                    <option value="">Select a range</option>
                                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                                    <option value="$50,000+">$50,000+</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="details" className="block text-sm font-medium text-gray-300">Project Details *</label>
                                <textarea
                                    id="details"
                                    rows={6}
                                    required
                                    className={inputStyle}
                                    value={form.details}
                                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                                ></textarea>
                            </div>

                            <div className="md:col-span-2 text-center">
                                <button
                                    type="submit"
                                    className="inline-block w-full md:w-auto px-12 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
                                >
                                    Submit Project
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default DiscussProject;
