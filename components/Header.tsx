
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { navLinks, services } from '../constants';
import { LogoIcon } from './Icons';
import logo from '../assets/logo123.png'

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

  return (
    <nav className="hidden lg:flex items-center justify-between w-full">
     <Link to="/">
  <img src={logo} alt="PGS logo" className="h-11 w-auto" />

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
              <NavItem to={link.path}>{link.name}</NavItem>
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

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.left = '0';
    document.body.style.right = '0';
    
    return () => {
      const scrollYRestored = parseInt(document.body.style.top || '0') * -1;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.left = '';
      document.body.style.right = '';
      // We don't manually scroll here anymore to let the main app handler manage it.
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

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
      <div className="lg:hidden flex justify-between items-center w-full relative">
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <LogoIcon className="h-10 w-10" />
        </Link>
        <div />
        <button onClick={toggleMenu} className="z-[10001] p-2">
          <motion.div animate={isOpen ? 'open' : 'closed'} className="w-6 h-6 flex flex-col justify-around">
            <motion.span
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 5.5 } }}
              className="w-full h-0.5 bg-white rounded-full"
            />
            <motion.span
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              className="w-full h-0.5 bg-white rounded-full"
            />
            <motion.span
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -5.5 } }}
              className="w-full h-0.5 bg-white rounded-full"
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
            className="fixed inset-0 z-[10000] bg-[#0A0A10]/90 backdrop-blur-md"
          >
            <div className="flex h-full w-full items-center justify-center">
              <motion.nav
                className="flex flex-col items-center gap-8 text-3xl"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <motion.div key={link.name} variants={navItemVariants} className="text-center w-full">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="py-2 text-gray-300 hover:text-white w-full"
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
                            <div className="flex flex-col items-center mt-2 space-y-3">
                              {link.dropdown.map((service) => (
                                <Link
                                  key={service.id}
                                  to={`/services/${service.id}`}
                                  className="text-xl text-gray-400 hover:text-purple-400"
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
                        className="block py-2 text-gray-300 hover:text-white transition-colors"
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-black/50 backdrop-blur-md' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center">
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;