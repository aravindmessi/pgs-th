import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { services } from '../constants';
import { motion, Variants } from 'framer-motion';

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
            transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
        },
    };

    return (
        <AnimatedPage>
            <div className="pt-24 pb-20 overflow-hidden">

                {/* ✅ Banner Updated to Use Local Image */}
                <div 
                    className="h-96 w-full bg-cover bg-center relative flex items-center justify-center text-center px-6"
                    style={{ backgroundImage: `url(${service.image})` }}
                >
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                    <div className="relative z-10 max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                            {service.name}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200">
                            {service.description}
                        </p>
                    </div>
                </div>
                {/* ✅ Banner End */}

                {/* Full Description */}
                <motion.div 
                    className="container mx-auto px-6 mt-16"
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="grid md:grid-cols-3 gap-12">

                        <div className="md:col-span-2 text-gray-300 text-lg leading-relaxed space-y-6">
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                                About This Service
                            </h2>
                            <p>
                                {service.fullDescription}
                            </p>
                        </div>

                        {/* Sidebar */}
                        <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 backdrop-blur-sm sticky top-28">
                            <div className="flex items-center space-x-4 mb-6">
                                <IconComponent className="h-12 w-12 text-purple-400" />
                                <h3 className="text-2xl font-bold text-white">Key Features</h3>
                            </div>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-center"><span className="text-purple-500 mr-2">&#10003;</span> Tailored to Your Needs</li>
                                <li className="flex items-center"><span className="text-purple-500 mr-2">&#10003;</span> Scalable & Future-Proof</li>
                                <li className="flex items-center"><span className="text-purple-500 mr-2">&#10003;</span> Professional Support</li>
                                <li className="flex items-center"><span className="text-purple-500 mr-2">&#10003;</span> Clean & Modern Execution</li>
                            </ul>

                            <Link 
                                to="/contact" 
                                className="block w-full mt-8 px-6 py-3 text-center font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:scale-105 transition-transform"
                            >
                                Start Your Project
                            </Link>
                        </div>

                    </div>
                </motion.div>
            </div>
        </AnimatedPage>
    );
};

export default ServiceDetail;
