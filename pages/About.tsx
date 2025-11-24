import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { WebDevIcon, AppDevIcon, VideoIcon } from '../components/Icons';
import about from '../assets/about.webp'

const M = motion as any;

const About: React.FC = () => {

    const sectionVariants = {
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

    const features = [
        {
            icon: WebDevIcon,
            title: "Web Development",
            description: "Crafting responsive, high-performance websites that drive engagement.",
            color: "text-blue-400"
        },
        {
            icon: AppDevIcon,
            title: "App Development",
            description: "Building intuitive mobile applications for iOS and Android platforms.",
            color: "text-green-400"
        },
        {
            icon: VideoIcon,
            title: "Video Ad Shoots",
            description: "Producing cinematic commercials that tell your brand's story.",
            color: "text-red-400"
        }
    ];
    
    return (
        <AnimatedPage>
            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <M.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">PGS</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Established in <span className="text-purple-400 font-bold">2020</span>, PGS has rapidly evolved into a powerhouse of digital innovation. We don't just build; we create experiences. From cinematic <span className="text-white font-semibold">Video Ad Shoots</span> to robust <span className="text-white font-semibold">Web & App Development</span>, we turn concepts into reality.
                        </p>
                    </M.div>

                    <M.div 
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8 mb-20"
                    >
                        {features.map((feature, index) => (
                            <M.div 
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm text-center hover:border-purple-500/50 transition-colors duration-300"
                            >
                                <div className={`mb-6 flex justify-center ${feature.color}`}>
                                    <feature.icon className="h-16 w-16" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </M.div>
                        ))}
                    </M.div>
                    
                    <M.div 
                        className="grid md:grid-cols-2 gap-12 items-center"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <M.div
                            className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
                        >
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                            <img src={about} alt="Our Team" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                            <div className="absolute bottom-0 left-0 p-6 z-20">
                                <p className="text-white font-bold text-xl">Innovation at Core</p>
                            </div>
                        </M.div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why We Started</h2>
                            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                                In a world saturated with noise, we saw a need for clarity and quality. PGS began with a simple mission: to help brands find their voice through compelling visuals and seamless technology. 
                            </p>
                            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                                Whether it's a complex <strong>Mobile App</strong> that solves a user's problem or a <strong>Video Ad</strong> that captures an emotion, we bring a blend of creativity and technical expertise that is hard to match.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-6">
                                {["Creative Strategy","Professional Video Editing","Full Stack Dev", "Cinematography", "Brand Identity"].map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </M.div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default About;