
import React from 'react';
import { Link } from 'react-router-dom';
// FIX: Import Variants, useScroll, and useTransform types to explicitly type animation variants and hooks.
import { motion, Variants } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { services } from '../constants';

const Home: React.FC = () => {
    // FIX: Explicitly type animation variants as Variants.
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    // FIX: Explicitly type animation variants as Variants to fix type incompatibility error.
    const itemVariants: Variants = {
        hidden: (i: number) => ({
            opacity: 0,
            x: i % 2 === 0 ? -50 : 50,
            y: 30,
            rotate: i % 2 === 0 ? -10 : 10,
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };
    
    // FIX: Explicitly type animation variants as Variants.
    const descriptionVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } },
    };
    
    // FIX: Explicitly type animation variants as Variants.
    const buttonVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
    };

    const heading = "Transforming Ideas into Scalable Digital Solutions.";
    const words = heading.split(" ");
    const gradientWords = ["Scalable", "Digital", "Solutions."];

    return (
        <AnimatedPage>
            <div className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div 
                        initial="hidden" 
                        animate="visible"
                    >
                        <motion.h1
                            variants={containerVariants}
                            className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-4"
                        >
                            {words.map((word, index) => (
                                <motion.span
                                    key={index}
                                    custom={index}
                                    variants={itemVariants}
                                    className={`inline-block ${gradientWords.includes(word) 
                                        ? "text-purple-300" 
                                        : ""}`}
                                >
                                    {word}{' '}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <motion.p
                            variants={descriptionVariants}
                            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                        >
                            We merge innovation and trust to build future-proof technologies that empower your business and drive growth.
                        </motion.p>
                        <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto inline-block text-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
                            >
                                Start Your Project
                            </Link>
                             <Link
                                to="/work"
                                className="w-full sm:w-auto inline-block text-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-purple-500 rounded-full shadow-lg hover:scale-105 hover:bg-purple-500/20 transform transition-all duration-300"
                            >
                                Our Work
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {services.slice(0, 3).map((service) => (
                            <motion.div
                                key={service.id}
                                custom={0} // Reset custom prop for this variant set
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                                }}
                                className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 backdrop-blur-sm hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="text-purple-400 mb-4">
                                    <service.icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                     <div className="text-center mt-12">
                        <Link to="/services" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                            Explore all services &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-900/30">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Creations</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                            Dive into our portfolio of diverse projects and witness the fusion of creativity and technology that defines our work.
                        </p>
                        <div>
                            <Link
                                to="/work"
                                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
                            >
                                Explore Our Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Home;