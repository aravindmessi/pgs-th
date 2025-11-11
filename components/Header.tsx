import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { navLinks, services } from '../constants';
import logo from '../assets/logo.webp';

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
                  location.pathname.startsWith('/services') ? 'text-white' : 'text-gray-400 hover:text-white'
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
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
      <div className="lg:hidden flex justify-between items-center w-full relative z-[10002]">
        
        <Link to="/">
          <img src={logo} alt="logo" className="h-8 w-auto" />
        </Link>

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
                      <button onClick={() => setServicesOpen(!servicesOpen)} className="py-2 text-gray-300 hover:text-white w-full font-semibold">
                        {link.name}
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="flex flex-col items-center mt-2 space-y-3 bg-white/5 rounded-lg p-4">
                              {link.dropdown.map((service) => (
                                <Link key={service.id} to={`/services/${service.id}`} className="text-lg text-gray-400 hover:text-purple-400">
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
                       <Link to={link.path} className="py-2 block text-gray-300 hover:text-white font-semibold hover:text-purple-400 transition-colors">
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
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Always show background on pages other than home if preferred, or consistent behavior
    const isHome = location.pathname === '/';

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-[#0A0A10]/80 backdrop-blur-md py-3 shadow-lg shadow-purple-900/10' : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-6">
                <DesktopNav />
                <MobileNav />
            </div>
        </header>
    );
};

export default Header;