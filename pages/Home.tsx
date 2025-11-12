import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useAnimation, useMotionValueEvent } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import { services } from "../constants";
import { FastDeliveryIcon, FlexiblePricingIcon, StrongCommunicationIcon, ScalableSolutionsIcon, SupportIcon } from "../components/Icons";

import webd from "../assets/webd.webp";
import appd from "../assets/appd.webp";
import video from "../assets/videp.webp";

import karthik from '../assets/ramesh.webp';
import shanthi from '../assets/shanthi.webp';
import arjun from '../assets/arjun.webp';
import kishore from '../assets/kishore.webp';

const serviceImages: { [key: string]: string } = {
  "web-development": webd,
  "app-development": appd,
  "video-shooting-ads": video,
};

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const headingControls = useAnimation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() || 0;
    latest > prev && latest > 100 ? headingControls.start("hidden") : headingControls.start("visible");
  });

  const benefits = [
    { icon: FastDeliveryIcon, title: "Fast Delivery Timelines", description: "We complete projects on time without excuses." },
    { icon: FlexiblePricingIcon, title: "Flexible Pricing", description: "Solutions tailored to different budget sizes." },
    { icon: StrongCommunicationIcon, title: "Strong Communication", description: "Clear updates and collaboration always." },
    { icon: ScalableSolutionsIcon, title: "Scalable Solutions", description: "Designed to grow with your business." },
    { icon: SupportIcon, title: "24/7 Dedicated Support", description: "Fast and responsive support anytime." },
  ];

  // CLIENT LOGOS (from AI Studio section)
  const clientLogoIds = Array.from({ length: 24 }, (_, i) => (i % 12) + 1);

  return (
    <AnimatedPage>
      {/* HERO */}
      <div className="min-h-screen flex items-center justify-center pt-24 pb-12">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 animate={headingControls} className="font-extrabold text-white leading-tight mb-6">
            <span className="block text-4xl md:text-7xl">OnestopSolutionsFor</span>
            <span className="block text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mt-2">
              Business
            </span>
            <span className="block text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              Development
            </span>
          </motion.h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl mb-8">
            We provide powerful digital solutions to elevate your brand’s online presence and accelerate business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >

              <Link
                to="/contact"
                className="relative px-10 py-4 text-lg font-semibold rounded-full text-white 
                bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#06b6d4]
                shadow-[0_0_24px_rgba(124,58,237,0.45)]
                hover:shadow-[0_0_45px_rgba(124,58,237,0.75)]
                hover:scale-[1.08] active:scale-[0.98]
                transition-all duration-300"
              >
                Start Your Project
              </Link>

              <Link
                to="/work"
                className="px-10 py-4 text-lg font-semibold text-white border-2 border-purple-500 rounded-full
                hover:bg-purple-500/25 hover:border-purple-400
                hover:scale-[1.06] active:scale-[0.98]
                transition-all duration-300"
              >
                Our Work
              </Link>

            </motion.div>
          </div>
        </div>
      </div>

      {/* OUR CORE SERVICES */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <Link key={service.id} to={`/services/${service.id}`} className="group block">
                <div className="relative p-8 bg-gray-900/50 border border-gray-800 rounded-lg backdrop-blur-lg overflow-hidden transition hover:border-purple-500 hover:-translate-y-2">
                  <img src={serviceImages[service.id]} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition duration-500" />
                  <div className="relative z-10">
                    <service.icon className="h-10 w-10 text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <p className="text-gray-400 mt-2">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="text-purple-400 hover:text-purple-300 font-semibold">Explore all services →</Link>
          </div>
        </div>
      </section>

      {/* ✅ OUR CLIENTS SECTION (kept intact) */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Clients</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We're proud to have collaborated with some amazing companies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
            {clientLogoIds.map((id, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 flex justify-center items-center h-32 sm:h-36 p-6 rounded-xl border border-gray-800 backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/20"
              >
                <img
                  src={`https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-${id}.svg`}
                  alt={`Client Logo ${index + 1}`}
                  className="h-8 md:h-10 w-auto object-contain transition-all duration-300 filter invert grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:-translate-y-2 transition">
                <b.icon className="h-10 w-10 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-1">{b.title}</h3>
                <p className="text-gray-400 text-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;
