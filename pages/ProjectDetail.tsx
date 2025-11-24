
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { projectsData, workCategories } from '../constants';
import { motion, Variants } from 'framer-motion';

const ProjectDetail: React.FC = () => {
    const { category, projectId } = useParams<{ category: string; projectId:string }>();
    const project = category && projectId ? projectsData[category]?.find(p => p.id === projectId) : undefined;
    const projectCategory = workCategories.find(c => c.id === category);

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

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
        }
    };

    // FIX: The custom cubic-bezier value for 'ease' was causing a type error.
    // Replaced with a standard 'easeOut' string and explicitly typed as Variants to ensure type safety.
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <AnimatedPage>
            <div className="pt-32 pb-20">
                 <div className="container mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div variants={itemVariants} className="mb-8">
                           <Link to="/work" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors inline-block">
                                &larr; Back to Our Work
                            </Link>
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="text-center mb-12">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-4 leading-tight">
                                {project.title}
                            </h1>
                             {projectCategory && (
                                <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">
                                    {projectCategory.name}
                                </span>
                            )}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-purple-900/20 border border-gray-800"
                            />
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="text-center mt-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Project Details</h2>
                            <div className="prose prose-lg prose-invert max-w-3xl mx-auto prose-p:text-gray-300 text-gray-300 leading-relaxed mt-6 mb-10">
                               <p>{project.description}</p>
                            </div>

                            <Link 
                                to="/discuss-project" 
                                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
                            >
                                Discuss a Similar Project
                            </Link>
                        </motion.div>
                    </motion.div>
                 </div>
            </div>
        </AnimatedPage>
    );
};

export default ProjectDetail;
