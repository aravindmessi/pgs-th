import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useAnimation, useMotionValueEvent } from 'framer-motion';
import AnimatedPage from './components/AnimatedPage';
import { services } from './constants';
import { FastDeliveryIcon, FlexiblePricingIcon, StrongCommunicationIcon, ScalableSolutionsIcon, SupportIcon } from '../components/Icons';

import webd from './assets/webd.webp';
import appd from './assets/appd.webp';
import video from './assets/video.webp'; // FIXED NAME HERE

const M = motion as any;

// Use your local images
const serviceImages: { [key: string]: string } = {
  'web-development': webd,
  'app-development': appd,
  'video-shooting-ads': video,
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

  const headingScrollVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    hidden: { opacity: 0, y: -40, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 } },
  };

  const descriptionVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } } };
  const buttonVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } } };
  const sectionVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <M.div initial="hidden" animate="visible">
            <M.div variants={headingScrollVariants} animate={headingControls} initial="visible">
              <M.h1 variants={containerVariants} className="font-extrabold text-white leading-none mb-6 flex flex-col items-center">
                <M.span variants={itemVariants} className="block text-4xl md:text-7xl">OnestopSolutionsFor</M.span>
                <M.span variants={itemVariants} className="block text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 my-1 md:my-2">Business</M.span>
                <M.span variants={itemVariants} className="block text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Development</M.span>
              </M.h1>
            </M.div>

            <M.p variants={descriptionVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our company specializes in providing innovative digital marketing solutions tailored to elevate your brand online presence and drive business growth.
            </M.p>

            <M.div variants={buttonVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto inline-block text-center rounded-full shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] hover:scale-105 transform transition-all duration-300 p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                <span className="block bg-[#0A0A10] text-white rounded-full px-8 py-4 text-lg font-semibold hover:bg-transparent transition-colors duration-300">Start Your Project</span>
              </Link>
              <Link to="/work" className="w-full sm:w-auto inline-block text-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-purple-500 rounded-full shadow-lg hover:scale-105 hover:bg-purple-500/20 transform transition-all duration-300">Our Work</Link>
            </M.div>
          </M.div>
        </div>
      </div>

      {/* Core Services */}
      <M.section className="py-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <M.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
            {services.slice(0, 3).map((service, index) => (
              <M.div key={service.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <Link to={`/services/${service.id}`} className="block h-full group">
                  <div className="relative h-full overflow-hidden bg-gray-900/50 p-8 rounded-lg border border-gray-800 backdrop-blur-sm group-hover:border-purple-500 transition-all duration-300 transform group-hover:-translate-y-2">

                    {/* YOUR LOCAL IMAGE ✅ */}
                    <img
                      src={serviceImages[service.id]}
                      alt={service.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-50 filter blur-sm group-hover:blur-none transition-all duration-500"
                    />

                    <div className="relative z-10">
                      <div className="text-purple-400 mb-4"><service.icon className="h-10 w-10" /></div>
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </M.div>
            ))}
          </M.div>

          <div className="text-center mt-12">
            <Link to="/services" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">Explore all services →</Link>
          </div>
        </div>
      </M.section>

      {/* The rest of your code stays same */}
    </AnimatedPage>
  );
};

export default Home;
