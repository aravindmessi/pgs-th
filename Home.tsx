import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useAnimation,
  useMotionValueEvent,
} from "framer-motion";
import AnimatedPage from "./components/AnimatedPage";
import { services } from "./constants";

import webd from "./assets/webd.webp";
import appd from "./assets/appd.webp";
import video from "./assets/videp.webp";

import bfm from "./assets/blissfullmind.webp";
import cp from "./assets/cell_park.webp";
import mb from "./assets/mobile_bazar.webp";
import ifi from "./assets/iris_logo.webp";
import vsm from "./assets/venkateshwara.webp";
import avt from "./assets/ashvattha.webp";
import bga from "./assets/bharathgas.webp";
import mk from "./assets/madurai_kadai.webp";
import ars from "./assets/arasan2.webp";
import nps from "./assets/nest_preschool.webp";
import kok from "./assets/kidsokids.webp";
import kia from "./assets/kiara.webp";
import wct from "./assets/wishdomcooltech.webp";
import hf from "./assets/hydrox_logo.webp";
import tds from "./assets/thaideptstore.webp";
import spa from "./assets/sivakasi_printers.webp";
import dsj from "./assets/ds_logo.webp";
import omj from "./assets/ommurugasarees.webp";
import hna from "./assets/hnamenswear.webp";
import vdh from "./assets/vikasadentalhospital.webp";
import tjwe from "./assets/thirupathi_jewelleries.webp";
import rlt from "./assets/ramalinga_tiles.webp";
import sm from "./assets/sm_jewelleries.webp";
import dbc from "./assets/dreamz_logo.webp";

const clientLogos = [
  bfm, cp, mb, ifi, vsm, avt,
  bga, mk, ars, nps, kok, kia,
  wct, hf, tds, spa, dsj, omj,
  hna, vdh, tjwe, rlt, sm, dbc,
];

const clientNames = [
  "Blissfull Mind", "Cell Park", "Mobile Bazar", "Iris Fitness",
  "Venkateshwara Supermarket", "Ashvattha Group", "Bharath Gas Agency",
  "Madurai Kadai", "Arasan Traders", "Nest Preschool", "Kids O Kids",
  "Kiara Interiors", "Wisdom Cool Tech", "Hydrox fitness",
  "Thai Dept Store", "Sivakasi Printers", "D&S Jewellers",
  "Om Muruga Sarees", "H&A Menswear", "Vikasa Dental",
  "Thirupathi Jewellers", "Ramalinga Tiles", "SM Jewellers", "Dreamz Beauty",
];

const serviceImages = {
  "web-development": webd,
  "app-development": appd,
  "video-shooting-ads": video,
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const headingControls = useAnimation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    // Desktop & tablet hide-on-scroll
    if (window.innerWidth > 768) {
      if (latest > previous && latest > 100) headingControls.start("hidden");
      else headingControls.start("visible");
    }
  });

  useEffect(() => {
    if (window.innerWidth <= 768) {
      const header = document.querySelector("header");
      if (header) {
        header.style.transform = "translateY(0)";
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.zIndex = "9999";
      }
    }
  }, []);

  return (
    <AnimatedPage>

      {/* ---------------- HERO ---------------- */}
      <div className="min-h-[75vh] md:min-h-screen flex items-center justify-center pt-24 pb-6 md:pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">

          <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>

            <motion.h1 variants={staggerParent} className="font-extrabold text-white mb-6 flex flex-col items-center">

              <motion.span variants={fadeDown} className="text-3xl md:text-6xl">
                One Stop Solutions For
              </motion.span>

              <motion.span variants={zoomIn} className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500 my-1">
                Business
              </motion.span>

              <motion.span variants={fadeUp} className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
                Development
              </motion.span>

            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4 md:mb-8">
              Our company specializes in providing innovative digital marketing solutions tailored to elevate your brand.
            </motion.p>

            <motion.div variants={staggerParent} className="flex flex-col sm:flex-row items-center justify-center gap-4">

              <motion.div variants={zoomIn}>
                <Link
                  to="/contact"
                  className="relative inline-block rounded-full p-[2px] 
                  bg-gradient-to-r from-pink-500 via-red-500 to-purple-600
                  hover:animate-[rainbow_1.5s_linear_infinite] 
                  transition-all duration-300 sm:w-auto w-full"
                  style={{ backgroundSize: "300% 300%" }}
                >
                  <span className="block bg-[#0A0A10] text-white rounded-full px-8 py-4 text-lg font-semibold transition-colors duration-300">
                    Start Your Project
                  </span>
                </Link>
              </motion.div>

              <style>{`
                @keyframes rainbow {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
              `}</style>

              <motion.div variants={zoomIn}>
                <Link
                  to="/work"
                  className="w-full sm:w-auto inline-block px-8 py-4 text-lg font-semibold text-white border-2 border-purple-500 
                  rounded-full hover:bg-purple-600/20 hover:border-purple-400 hover:text-purple-300 hover:scale-110 
                  transition duration-300"
                >
                  Our Work
                </Link>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ---------------- SERVICES ---------------- */}
      <section className="pt-10 md:pt-20 pb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.slice(0, 3).map((service) => (
              <motion.div key={service.id} variants={fadeUp}>
                <Link to={`/services/${service.id}`} className="block h-full group">
                  <div className="relative h-full overflow-hidden bg-gray-900/50 p-8 rounded-lg border border-gray-800 transition-all group-hover:scale-[1.05]">

                    <img
                      src={serviceImages[service.id]}
                      alt={service.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-60"
                    />

                    <div className="relative z-10 group-hover:translate-y-1 transition">
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
            <Link to="/services" className="text-purple-400 font-semibold">Explore all services →</Link>
          </div>
        </div>
      </section>

      {/* ---------------- CLIENTS ---------------- */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We’re proud to have collaborated with these amazing businesses.
            </p>
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "0px 0px -200px 0px" }}
            className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12"
          >
            {clientLogos.map((logo, index) => {
              const bigger = [5, 19];
              const isBigger = bigger.includes(index);

              return (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? fadeLeft : fadeRight}
                  className="flex flex-col items-center text-center group"
                >
                  <motion.img
                    variants={zoomIn}
                    whileHover={{ scale: 1.25 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    src={logo}
                    alt={clientNames[index]}
                    className={
                      (isBigger
                        ? "w-[70px] h-[70px] sm:w-[120px] sm:h-[120px]"
                        : "w-14 h-14 sm:w-32 sm:h-32") + " object-contain"
                    }
                  />

                  <motion.p
                    variants={fadeUp}
                    className="hidden sm:block mt-3 text-blue-300 text-sm font-semibold tracking-wide"
                  >
                    {clientNames[index]}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="hidden sm:block py-24 bg-[#0A0A10]">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We provide powerful, modern, and reliable digital solutions to grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

            <div className="flex flex-col items-center text-center p-6 bg-gray-900/40 rounded-xl border border-gray-800 
              transition hover:scale-105 hover:border-purple-500 hover:bg-gray-900/60">
              <svg className="w-14 h-14 text-purple-400 mb-4" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M3 7h13v10H3z" /><path d="M16 10l5-3v10l-5-3" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Video Shooting & Ads</h3>
              <p className="text-gray-400 text-sm">Professional video production and high-impact advertising content for your brand.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-900/40 rounded-xl border border-gray-800 
              transition hover:scale-105 hover:border-purple-500 hover:bg-gray-900/60">
              <svg className="w-14 h-14 text-purple-400 mb-4" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M3 3h18v6H3V3zm0 12h18v6H3v-6z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Creative Designs</h3>
              <p className="text-gray-400 text-sm">Modern UI/UX driven by clarity and functionality.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-900/40 rounded-xl border border-gray-800 
              transition hover:scale-105 hover:border-purple-500 hover:bg-gray-900/60">
              <svg className="w-14 h-14 text-purple-400 mb-4" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" />
              </svg>
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-gray-400 text-sm">Projects delivered fast without compromising quality.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-900/40 rounded-xl border border-gray-800 
              transition hover:scale-105 hover:border-purple-500 hover:bg-gray-900/60">
              <svg className="w-14 h-14 text-purple-400 mb-4" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
              <h3 className="text-xl font-bold mb-2">High Performance</h3>
              <p className="text-gray-400 text-sm">Optimized websites and apps built for speed.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-900/40 rounded-xl border border-gray-800 
              transition hover:scale-105 hover:border-purple-500 hover:bg-gray-900/60">
              <svg className="w-14 h-14 text-purple-400 mb-4" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-3.5L6 21l1.5-7.5L2 9h7z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Trusted Quality</h3>
              <p className="text-gray-400 text-sm">Premium service trusted by 100+ businesses.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-900/40 rounded-xl border border-gray-800 
              transition hover:scale-105 hover:border-purple-500 hover:bg-gray-900/60">
              <svg className="w-14 h-14 text-purple-400 mb-4" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
              </svg>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-400 text-sm">We’re always available when your business needs us.</p>
            </div>

          </div>

        </div>
      </section>

    </AnimatedPage>
  );
};

export default Home;
