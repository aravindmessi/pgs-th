import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { services } from '../constants';
import { motion, Variants } from 'framer-motion';

import webdev from '../assets/webdev.webp'
import appdev from '../assets/appdev.webp'
import video from '../assets/video.webp'
import erp from '../assets/erp.webp'
import crm from '../assets/crm.webp'
import ai from '../assets/ai.webp'

// ✅ Local image mapping based on service id
const serviceImagesMap: { [key: string]: string } = {
    "web-development": webdev,
    "app-development": appdev,
    "video-shooting-ads": video,
    "erp-solutions": erp,
    "crm": crm,
    "ai-integrations": ai
};

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const service = services.find(s => s.id === id);

    if (!service) {
        return (
            <AnimatedPage>
                <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <p className="text-gray-400 mb-8">The service you're looking for doesn't exist.</p>
                    <Link to="/services" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                        &larr; Back to Services
                    </Link>
                </div>
            </AnimatedPage>
        );
    }

    const IconComponent = service.icon;

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
            <div className="pt-24 pb-20 overflow-hidden">

                {/* ✅ BG IMAGE FIXED HERE */}
                <div 
                    className="h-96 w-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${serviceImagesMap[service.id]})` }}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"
                    >
                        <h1 className="text-4xl md:text-7xl font-extrabold mb-4">{service.name}</h1>
                        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl">{service.description}</p>
                    </motion.div>
                </div>

                <motion.div 
                    className="container mx-auto px-6 mt-16"
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="grid md:grid-cols-3 gap-12">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="md:col-span-2"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Our Approach</h2>
                            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p>Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="md:col-span-1"
                        >
                            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 backdrop-blur-sm sticky top-28">
                                <div className="flex items-center space-x-4 mb-6">
                                    <IconComponent className="h-12 w-12 text-purple-400" />
                                    <h3 className="text-2xl font-bold text-white">Key Features</h3>
                                </div>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-center"><span className="text-purple-500 mr-2">&#10003;</span> Custom Strategy</li>
                                    <li className="flex items-center"><span className="text-purple-500 mr-2">&#10003;</span> Scalable Solutions</li>
                                    <li className="flex items-center"><span className="text-purple-500 mr-2">&#10003;</span> Cutting-Edge Tech</li>
                                    <li className="flex items-center"><span className="text-purple-500 mr-2">&#10003;</span> Dedicated Support</li>
                                </ul>
                                <Link to="/discuss-project" className="block w-full mt-8 px-6 py-3 text-center font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </AnimatedPage>
    );
};

export default ServiceDetail;
