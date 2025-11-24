
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { workCategories, projectsData } from '../constants';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '../components/Icons';

const OurWork: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState(workCategories[0].id);
    const navRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkArrows = useCallback(() => {
        if (navRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
            setShowLeftArrow(scrollLeft > 5);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
        }
    }, []);

    useEffect(() => {
        const navEl = navRef.current;
        if (navEl) {
            checkArrows();
            navEl.addEventListener('scroll', checkArrows);
        }
        window.addEventListener('resize', checkArrows);

        return () => {
            if (navEl) {
                navEl.removeEventListener('scroll', checkArrows);
            }
            window.removeEventListener('resize', checkArrows);
        };
    }, [checkArrows]);

    const handleScroll = (direction: 'left' | 'right') => {
        if (navRef.current) {
            const scrollAmount = navRef.current.clientWidth * 0.8;
            navRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const filterBarVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            },
        },
    };

    const gridContainerVariants: Variants = {
        hidden: { transition: { staggerChildren: 0.08, staggerDirection: -1 } },
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
    };

    const projectCardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: { 
            opacity: 1, 
            scale: 1,
            y: 0, 
            transition: { 
                type: 'spring',
                stiffness: 100,
                damping: 12,
            } 
        },
        exit: { 
            opacity: 0, 
            scale: 0.8, 
            y: -50,
            transition: {
                duration: 0.3,
                ease: 'anticipate'
            }
        }
    };
    
    return (
        <AnimatedPage>
            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Work</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Browse through our curated collection of projects that showcase our passion for digital excellence.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-gray-900/50 rounded-xl border border-gray-800 backdrop-blur-sm p-2 mb-12 sticky top-[70px] lg:top-[80px] z-20"
                        variants={filterBarVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="relative flex items-center">
                            <AnimatePresence>
                                {showLeftArrow && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900/50 to-transparent z-10 pointer-events-none" 
                                        />
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                            onClick={() => handleScroll('left')}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-purple-600/60 transition-colors backdrop-blur-sm"
                                            aria-label="Scroll left"
                                        >
                                            <ChevronLeftIcon className="h-6 w-6" />
                                        </motion.button>
                                    </>
                                )}
                            </AnimatePresence>
                            
                            <div ref={navRef} className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto scrollbar-hide px-8">
                                {workCategories.map(category => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`relative shrink-0 px-4 py-2 text-sm md:text-base font-semibold rounded-lg transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-purple-500
                                        ${activeCategory === category.id 
                                            ? 'text-white' 
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800/60'}`}
                                    >
                                        {category.name}
                                        {activeCategory === category.id && (
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg -z-10"
                                                layoutId="active-category-pill"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                            
                            <AnimatePresence>
                                {showRightArrow && (
                                    <>
                                        <motion.div 
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900/50 to-transparent z-10 pointer-events-none"
                                        />
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                            onClick={() => handleScroll('right')}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-purple-600/60 transition-colors backdrop-blur-sm"
                                            aria-label="Scroll right"
                                        >
                                            <ChevronRightIcon className="h-6 w-6" />
                                        </motion.button>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            variants={gridContainerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                        >
                            {projectsData[activeCategory].map((project) => (
                                <motion.div key={`${activeCategory}-${project.id}`} variants={projectCardVariants} className="h-full">
                                    <Link to={`/work/${activeCategory}/${project.id}`} className="block group bg-gray-900/50 p-4 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full">
                                        <div className="overflow-hidden rounded-lg">
                                            <img src={project.image} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <div className="mt-4 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                            <p className="text-gray-400 text-sm mt-2 flex-grow">
                                                {project.description.substring(0, 100)}...
                                            </p>
                                            <span className="mt-4 font-semibold text-purple-400 transition-all group-hover:text-white self-start">
                                                View Details &rarr;
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default OurWork;
