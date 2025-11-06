
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { projectsData } from '../constants';
import { motion, Variants } from 'framer-motion';

const ProjectDetail: React.FC = () => {
    const { category, projectId } = useParams<{ category: string; projectId: string }>();
    const project = category && projectId ? projectsData[category]?.find(p => p.id === projectId) : undefined;

    if (!project) {
        return (
            <AnimatedPage>
                <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
                    <Link to="/work" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                        &larr; Back to Our Work
                    </Link>
                </div>
            </AnimatedPage>
        );
    }

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
            <div className="pt-24 pb-20">
                 <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/work" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors mb-8 inline-block">
                            &larr; Back to Our Work
                        </Link>
                         <div className="relative flex items-center mb-6">
                            <img src={project.logo} alt={`${project.title} logo`} className="w-16 h-16 rounded-full mr-4 border-2 border-gray-700"/>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white">{project.title}</h1>
                         </div>
                    </motion.div>
                    
                    <motion.div 
                        className="mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-gray-800"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-auto object-cover"/>
                    </motion.div>

                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">About The Project</h2>
                        <div className="max-w-4xl prose prose-lg prose-invert prose-p:text-gray-300 text-gray-300 leading-relaxed">
                           <p>{project.description}</p>
                        </div>
                    </motion.div>
                 </div>
            </div>
        </AnimatedPage>
    );
};

export default ProjectDetail;