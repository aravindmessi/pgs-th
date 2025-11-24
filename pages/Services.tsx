import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { services } from '../constants';
import { motion, Variants } from 'framer-motion';

import webd from '../assets/webd.webp';
import appd from '../assets/appd.webp';
import vid from '../assets/videp.webp';
import erp from '../assets/erp.webp';
import crm from '../assets/crm.webp';
import ai from '../assets/ai.webp';

const serviceImages = {
  'web-development': webd,
  'app-development': appd,
  'video-shooting-ads': vid,
  'erp-solutions': erp,
  'crm': crm,
  'ai-integrations': ai,
};

const Services: React.FC = () => {
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
                            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Offer</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            A comprehensive suite of digital services designed to build, grow, and elevate your brand.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {services.map((service, index) => (
                            <motion.div 
                                key={service.id}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
                                }}
                            >
                                <Link to={`/services/${service.id}`} className="block h-full group">
                                    <div className="relative h-full overflow-hidden bg-gray-900/50 p-8 rounded-xl border border-gray-800 backdrop-blur-sm hover:border-purple-500/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20">
                                        <img 
                                            src={serviceImages[service.id]}
                                            alt={service.name}
                                            className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-all duration-500"
                                            loading="lazy"
                                        />
                                        <div className="relative z-10">
                                            <div className="text-purple-400 mb-4">
                                                <service.icon className="h-12 w-12" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2 text-white">{service.name}</h3>
                                            <p className="text-gray-400 mb-4">{service.description}</p>
                                            <span className="font-semibold text-purple-400 transition-all group-hover:text-white group-hover:pl-2">
                                                Learn More →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Services;
