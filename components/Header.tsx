import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants, useScroll } from 'framer-motion';
import { navLinks, services } from '../constants';
import logo from '../assets/logo.webp';
import { useMediaQuery } from '../hooks/useMediaQuery';

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
        isActive ? 'text-white' : 'text-gray-400 hover:text-white'
      }`
    }
  >
    {({ isActive }) => (
      <>
        {children}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500"
            layoutId="underline"
          />
        )}
      </>
    )}
  </NavLink>
);

const ServicesDropdown: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 origin-top-right rounded-md bg-black bg-opacity-70 backdrop-blur-sm shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none"
  >
    <div className="py-1">
      {services.map((service) => (
        <Link
          key={service.id}
          to={`/services/${service.id}`}
          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
        >
          {service.name}
        </Link>
      ))}
    </div>
  </motion.div>
);

const DesktopNav: React.FC = () => {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center justify-between w-full">
      <Link to="/">
        <img src={logo} alt="logo" className="h-10 w-auto" />
      </Link>

      <div className="flex items-center space-x-6">
        {navLinks.map((link) =>
          link.dropdown ? (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  location.pathname.startsWith('/services')
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname.startsWith('/services') && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500"
                    layoutId="underline"
                  />
                )}
              </div>
              <AnimatePresence>{isServicesOpen && <ServicesDropdown />}</AnimatePresence>
            </div>
          ) : (
            <NavItem key={link.name} to={link.path}>
              {link.name}
            </NavItem>
          )
        )}
      </div>
    </nav>
  );
};

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const mobileMenuVariants: Variants = {
    closed: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    open: { opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="lg:hidden flex items-center w-full relative z-[10002] min-h-[40px]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/">
            <img src={logo} alt="logo" className="h-12 w-auto" />
          </Link>
        </div>

        <button onClick={toggleMenu} className="z-[10001] p-2 ml-auto text-white">
          <motion.div animate={isOpen ? 'open' : 'closed'} className="w-6 h-6 flex flex-col justify-around">
            <motion.span
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 } }}
              className="w-full h-0.5 bg-white rounded-full origin-center"
            />
            <motion.span
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              className="w-full h-0.5 bg-white rounded-full"
            />
            <motion.span
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }}
              className="w-full h-0.5 bg-white rounded-full origin-center"
            />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[10000] bg-[#0A0A10]/95 backdrop-blur-md h-[100dvh] flex flex-col justify-center overflow-hidden"
          >
            <div className="flex h-full w-full items-center justify-center overflow-y-auto px-6 py-20">
              <motion.nav
                className="flex flex-col items-center gap-6 text-2xl w-full max-w-md"
                variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <motion.div key={link.name} variants={navItemVariants} className="text-center w-full">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="py-2 text-gray-300 hover:text-white w-full font-semibold"
                      >
                        {link.name}
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col items-center mt-2 space-y-6 bg-white/5 rounded-lg p-4">
                              {link.dropdown.map((service) => (
                                <Link
                                  key={service.id}
                                  to={`/services/${service.id}`}
                                  className="text-lg text-gray-400 hover:text-purple-400 py-2"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div key={link.name} variants={navItemVariants}>
                      <Link
                        to={link.path}
                        className="py-2 block text-gray-300 hover:text-white font-semibold hover:text-purple-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )
                )}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const isMobile = useMediaQuery('(max-width: 1023px)');

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (isMobile) {
        // On mobile, always ensure the header is visible.
        setIsHidden(false);
        return;
      }

      // On desktop, hide header on scroll down, show on scroll up.
      const previous = scrollY.getPrevious() || 0;
      if (latest > previous && latest > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    });
    
    // Cleanup function for the subscription.
    return () => unsubscribe();
  }, [isMobile, scrollY]);

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    };

    if (!isMobile) {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    } else {
        setIsScrolled(false);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-colors duration-300
        ${isMobile
            ? "!py-4 bg-[#0A0A10]"
            : isScrolled
                ? "bg-[#0A0A10]/80 backdrop-blur-md py-3 shadow-lg shadow-purple-900/10"
                : "bg-transparent py-5"
        }
      `}
    >
      <div className="container mx-auto px-6">
        <DesktopNav />
        <MobileNav />
      </div>
    </motion.header>
  );
};

export default Header;