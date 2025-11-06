
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion, Variants } from 'framer-motion';
import { services } from '../constants';
import { MailIcon, PhoneIcon, LocationIcon } from '../components/Icons';

const Contact: React.FC = () => {
    const inputStyle = "mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500";
    
    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9],
            },
        },
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
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.form 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                                <input type="text" id="name" className={inputStyle} />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                                <input type="email" id="email" className={inputStyle} />
                            </div>
                             <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-300">Select Service</label>
                                <select id="service" required className={inputStyle} defaultValue="">
                                    <option value="" disabled>Please select a service</option>
                                    {services.map(service => (
                                        <option key={service.id} value={service.id}>{service.name}</option>
                                    ))}
                                </select>
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                                <textarea id="message" rows={4} className={inputStyle}></textarea>
                            </div>
                             <div>
                                <button type="submit" className="w-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">
                                    Submit
                                </button>
                            </div>
                        </motion.form>
                        <motion.div
                           initial={{ opacity: 0, x: 30 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.7, delay: 0.2 }}
                           className="mt-12 md:mt-0"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
                            <p className="text-gray-400 mb-8">Fill up the form and our Team will get back to you within 24 hours.</p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MailIcon className="h-6 w-6 mr-4 mt-1 text-purple-400 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-white">Email</h4>
                                        <a href="mailto:info@proglobalsolutions.in" className="text-gray-300 hover:text-purple-400 transition-colors">info@proglobalsolutions.in</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <PhoneIcon className="h-6 w-6 mr-4 mt-1 text-purple-400 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-white">Phone</h4>
                                        <a href="tel:9360620595" className="text-gray-300 hover:text-purple-400 transition-colors">9360620595</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <LocationIcon className="h-6 w-6 mr-4 mt-1 text-purple-400 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-white">Address</h4>
                                        <address className="not-italic text-gray-300">
                                            IT Office<br />
                                            F3,1/113, Jmj Complex,<br />
                                            TNAU Nagar, Othakadai<br />
                                            Madurai - 625107, Tamil Nadu.
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