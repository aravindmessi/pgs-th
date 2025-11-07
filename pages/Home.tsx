import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants, useScroll, useAnimation, useMotionValueEvent } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { services } from '../constants';
import { FastDeliveryIcon, FlexiblePricingIcon, StrongCommunicationIcon, ScalableSolutionsIcon, SupportIcon } from '../components/Icons';

import webdev from '../assets/webdev.webp'
import appdev from '../assets/appdev.webp'
import video from '../assets/video.webp'

const serviceImagesMap: { [key: string]: string } = {
    "web-development": webdev,
    "app-development": appdev,
    "video-shooting-ads": video
};

const serviceImageSeeds: { [key: string]: string } = {
    'web-development': 'web-design-code',
    'app-development': 'mobile-app-ui',
    'video-shooting-ads': 'camera-filmmaking',
    'erp-solutions': 'business-dashboard-charts',
    'crm': 'customer-relations-team',
    'ai-integrations': 'artificial-intelligence-circuit'
};

const Home: React.FC = () => {
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        hidden: { opacity: 0, y: -40, transition: { duration: 0.3, ease: "easeInOut" } },
    };

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 15,
                stiffness: 100,
            },
        },
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
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9],
            },
        },
    };

    const testimonials = [
        { name: 'John Doe', company: 'TechCorp', quote: 'PGS transformed our online presence. Their attention to detail and creative vision are unparalleled.', avatar: '1' },
        { name: 'Jane Smith', company: 'Innovate LLC', quote: 'The team is incredibly talented and professional. They delivered beyond our expectations and on schedule.', avatar: '2' },
        { name: 'Sam Wilson', company: 'MarketPro', quote: 'Working with them was a breeze. They understood our needs perfectly and created a stunning website that our users love.', avatar: '3' },
        { name: 'Emily White', company: 'Future Ventures', quote: 'An absolute game-changer for our brand. The AI integration they developed has streamlined our entire workflow.', avatar: '4' },
        { name: 'Michael Chen', company: 'Data Dynamics', quote: 'Their data-driven approach resulted in a product that not only looks great but also performs exceptionally.', avatar: '5' },
        { name: 'Sarah Jones', company: 'Creative Solutions', quote: 'A team of true professionals. Their communication and project management skills are top-notch.', avatar: '6' },
    ];
    
    const benefits = [
        { icon: FastDeliveryIcon, title: 'Fast Delivery Timelines', description: 'We complete projects on time without excuses.' },
        { icon: FlexiblePricingIcon, title: 'Flexible Pricing', description: 'Solutions tailored to different budget sizes.' },
        { icon: StrongCommunicationIcon, title: 'Strong Communication', description: 'Clear updates and smooth collaboration throughout.' },
        { icon: ScalableSolutionsIcon, title: 'Scalable Solutions', description: 'Systems designed to grow as your business grows.' },
        { icon: SupportIcon, title: '24/7 Dedicated Support', description: 'We provide responsive support whenever needed.' },
    ];

    return (
        <AnimatedPage>
            <div className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div 
                        initial="hidden" 
                        animate="visible"
                    >
                        <motion.div
                            variants={headingScrollVariants}
                            animate={headingControls}
                            initial="visible"
                        >
                            <motion.h1
                                variants={containerVariants}
                                className="font-extrabold text-white leading-none mb-6 flex flex-col items-center"
                            >
                                <motion.span 
                                    variants={itemVariants} 
                                    className="block text-4xl md:text-7xl"
                                >
                                    OnestopSolutionsFor
                                </motion.span>
                                <motion.span 
                                    variants={itemVariants} 
                                    className="block text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 my-1 md:my-2"
                                >
                                    Business
                                </motion.span>
                                <motion.span 
                                    variants={itemVariants} 
                                    className="block text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500"
                                >
                                    Development
                                </motion.span>
                            </motion.h1>
                        </motion.div>

                        <motion.p
                            variants={descriptionVariants}
                            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                        >
                            Our company specializes in providing innovative digital marketing solutions tailored to elevate your brand online presence and drive business growth.
                        </motion.p>
                        <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto inline-block text-center rounded-full shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] hover:scale-105 transform transition-all duration-300 p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                                style={{
                                    backgroundSize: '400% auto',
                                    animation: 'animated-gradient-border-flow 2s linear infinite',
                                }}
                            >
                                <span className="block bg-[#0A0A10] text-white rounded-full px-8 py-4 text-lg font-semibold hover:bg-transparent transition-colors duration-300">
                                    Start Your Project
                                </span>
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

            {/* ✅ OUR CORE SERVICES FIXED HERE */}
            <motion.section 
                className="py-20"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {services.slice(0, 3).map((service, index) => (
                            <motion.div
                                key={service.id}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                                }}
                            >
                                <Link to={`/services/${service.id}`} className="block h-full group">
                                    <div className="relative h-full overflow-hidden bg-gray-900/50 p-8 rounded-lg border border-gray-800 backdrop-blur-sm group-hover:border-purple-500 transition-all duration-300 transform group-hover:-translate-y-2">
                                        
                                        {/* ✅ Correct local image mapping */}
                                        <img 
                                            src={serviceImagesMap[service.id]}
                                            alt={service.name}
                                            className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-50 filter blur-sm group-hover:blur-none transition-all duration-500"
                                        />

                                        <div className="relative z-10">
                                            <div className="text-purple-400 mb-4">
                                                <service.icon className="h-10 w-10" />
                                            </div>
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
                            Explore all services &rarr;
                        </Link>
                    </div>
                </div>
            </motion.section>

            {/* REST OF YOUR FILE REMAINS EXACTLY SAME */}
            
            <motion.section 
                className="py-20"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">Real feedback from the brands we’ve worked with.</p>
                    </div>
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
                                }}
                                className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 backdrop-blur-sm transform transition-transform duration-300 hover:-translate-y-2 shadow-lg flex flex-col items-center text-center"
                            >
                                <img 
                                    src={`https://i.pravatar.cc/80?u=${testimonial.avatar}`} 
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full mb-4 border-2 border-purple-500/50"
                                />
                                 <p className="text-gray-300 italic mb-4 flex-grow">"{testimonial.quote}"</p>
                                <div>
                                    <h4 className="font-bold text-white text-xl">{testimonial.name}</h4>
                                    <p className="text-gray-400">{testimonial.company}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <motion.section 
                className="py-20 bg-gray-900/30"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">We focus on delivering real value, not just services.</p>
                    </div>

                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {benefits.map((benefit, index) => (
                             <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
                                }}
                                className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 backdrop-blur-sm text-center transform transition-transform duration-300 hover:-translate-y-2"
                            >
                                <div className="flex justify-center mb-4 text-purple-400">
                                    <benefit.icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                                <p className="text-gray-400 text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </AnimatedPage>
    );
};

export default Home;
