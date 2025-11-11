import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants, useScroll, useAnimation, useMotionValueEvent } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { services } from '../constants';

import webd from '../assets/webd.webp';
import appd from '../assets/appd.webp';
import vid from '../assets/videp.webp';
import ramesh from '../assets/ramesh.webp'

const serviceImages = [webd, appd, vid];

const Home: React.FC = () => {

    console.log("HOME RENDERED ✅");

    const { scrollY } = useScroll();
    const headingControls = useAnimation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 100) {
            headingControls.start("hidden");
        } else {
            headingControls.start("visible");
        }
    });

    const headingScrollVariants: Variants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        hidden: { opacity: 0, y: -40, transition: { duration: 0.3 } },
    };

    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 } },
    };

    const descriptionVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } },
    };

    const buttonVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
    };

    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    // ✅ Tamil Nadu Testimonials (with profile images)
    const testimonials = [
    { 
        name: "Ramesh", 
        city: "Madurai", 
        quote: "They delivered exactly what my business needed.",
        avatar: ramesh
    },
    { 
        name: "Priya", 
        city: "Coimbatore", 
        quote: "Clean design and excellent communication throughout.",
        avatar: "https://i.pravatar.cc/150?u=Priya"
    },
    { 
        name: "Karthik", 
        city: "Trichy", 
        quote: "Professional team. They finish work on time.",
        avatar: "https://i.pravatar.cc/150?u=Karthik"
    },
    { 
        name: "Meena", 
        city: "Salem", 
        quote: "Very supportive even after project delivery.",
        avatar: "https://i.pravatar.cc/150?u=Meena"
    },
    { 
        name: "Sathish", 
        city: "Tirunelveli", 
        quote: "Their work genuinely improved my business presence.",
        avatar: "https://images.unsplash.com/photo-1603415526620-482b3ed59f03?auto=format&fit=crop&w=300&q=80"
    },
    { 
        name: "Divya", 
        city: "Chennai", 
        quote: "Quality output and friendly team to work with.",
        avatar: "https://i.pravatar.cc/150?u=Divya"
    }
];


    return (
        <AnimatedPage>

            {/* HERO SECTION */}
            <div className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div initial="hidden" animate="visible">
                        <motion.div variants={headingScrollVariants} animate={headingControls} initial="visible">
                            <motion.h1 variants={containerVariants} className="font-extrabold text-white leading-none mb-6 flex flex-col items-center">
                                <motion.span variants={itemVariants} className="block text-4xl md:text-7xl">OnestopSolutionsFor</motion.span>
                                <motion.span variants={itemVariants} className="block text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 my-2">Business</motion.span>
                                <motion.span variants={itemVariants} className="block text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Development</motion.span>
                            </motion.h1>
                        </motion.div>

                        <motion.p variants={descriptionVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            We help businesses grow through strong branding, clean design, and scalable digital systems.
                        </motion.p>

                        <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact" className="rounded-full px-8 py-4 bg-purple-600 hover:bg-purple-700 duration-300 text-lg font-semibold shadow-lg">
                                Start Your Project
                            </Link>
                            <Link to="/work" className="px-8 py-4 border border-purple-500 rounded-full text-lg font-semibold text-purple-400 hover:text-white hover:bg-purple-500/20 duration-300">
                                Our Work
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* SERVICES SECTION */}
            <motion.section className="py-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className="container mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>

                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
                        {services.slice(0, 3).map((service, index) => (
                            <motion.div key={service.id} variants={itemVariants}>
                                <Link to={`/services/${service.id}`} className="block h-full group">
                                    <div className="relative h-full overflow-hidden bg-gray-900/50 p-8 rounded-lg border border-gray-800 group-hover:border-purple-500 transition-all duration-300">
                                        <img
                                            src={serviceImages[index]}
                                            alt={service.name}
                                            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-500"
                                        />
                                        <div className="relative z-10">
                                            <div className="text-purple-400 mb-4"><service.icon className="h-10 w-10" /></div>
                                            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                                            <p className="text-gray-400">{service.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="text-center mt-12">
                        <Link to="/services" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                            Explore all services →
                        </Link>
                    </div>
                </div>
            </motion.section>

            {/* ✅ TESTIMONIALS SECTION WITH PROFILE IMAGES */}
            <motion.section 
                className="py-20 bg-gray-900/30" 
                variants={sectionVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-10 text-white">Client Feedback</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div 
                                key={i} 
                                className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 text-left hover:-translate-y-2 transition-all duration-300 shadow-lg"
                            >
                                <div className="flex items-center gap-4 mb-4">

                                    <img
                                        src={`https://i.pravatar.cc/150?u=${t.name}`}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover border border-purple-500/40"
                                    />

                                    <div>
                                        <h4 className="font-semibold text-white">{t.name}</h4>
                                        <p className="text-gray-400 text-sm">{t.city}, Tamil Nadu</p>
                                    </div>
                                </div>

                                <p className="text-gray-300 text-sm leading-relaxed">"{t.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

        </AnimatedPage>
    );
};

export default Home;
