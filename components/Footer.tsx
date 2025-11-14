import React from 'react';
import { Link } from 'react-router-dom';
import { TwitterIcon, InstagramIcon, LinkedInIcon, DribbbleIcon, MailIcon, PhoneIcon, LocationIcon } from './Icons';
import { navLinks } from '../constants';
import logo from '../assets/logo.webp';

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'Twitter', icon: TwitterIcon, href: '#' },
        { name: 'Instagram', icon: InstagramIcon, href: '#' },
        { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://www.linkedin.com/company/proglobalsolutions-in/' },
        { name: 'Dribbble', icon: DribbbleIcon, href: '#' }
    ];

    return (
        <footer className="relative z-10 border-t border-purple-500/10 bg-gradient-to-tr from-[#161224] to-[#12101e]">
            <div className="container mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:text-left">

                    {/* Column 1: About */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <img src={logo} alt="logo" className="h-10 w-auto" />
                        <p className="text-sm text-gray-400 max-w-xs">
                            Innovative digital solutions to elevate your brand's presence and drive growth.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-semibold text-white mb-4 text-lg">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-purple-400 transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-semibold text-white mb-4 text-lg">Contact Us</h4>
                        <ul className="space-y-4">

                            <li className="flex items-start">
                                <LocationIcon className="h-5 w-5 mr-3 mt-1 text-purple-400 shrink-0"/>
                                
                                <address className="not-italic text-sm text-gray-400 text-left">

                                    <span className="font-semibold text-white">Head Office:</span><br />

                                    F3,1/113, Jmj Complex, TNAU Nagar, Othakadai Madurai - 625107, Tamil Nadu.<br /><br />

                                    <span className="font-semibold text-white">Main Branch:</span><br />

                                    21-A SM St, Opp BSNL Office, Sivakasi, Tamil Nadu – 626123<br /><br />

                                    <span className="font-semibold text-white">Studio:</span><br />
                                    
                                    4-4-35A, 1st Street Railor Nagar, Koodal Nagar, Madurai – 625018
                                </address>
                            </li>

                            <li className="flex items-center">
                                <MailIcon className="h-5 w-5 mr-3 text-purple-400 shrink-0"/>
                                <a href="mailto:info@proglobalsolutions.in" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                                    info@proglobalsolutions.in
                                </a>
                            </li>

                            <li className="flex items-center">
                                <PhoneIcon className="h-5 w-5 mr-3 text-purple-400 shrink-0"/>
                                <a href="tel:9360620595" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                                    9360620595
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center text-center text-gray-500 text-sm border-t border-gray-800/50 pt-6 mt-10">
                    <p className="order-2 sm:order-1 mt-4 sm:mt-0">&copy; {new Date().getFullYear()} PGS. All Rights Reserved.</p>
                    <div className="flex space-x-4 order-1 sm:order-2">
                        {socialLinks.map(link => {
                            const Icon = link.icon;
                            return (
                                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-gray-400 hover:text-purple-400 transition-colors">
                                    <Icon className="h-6 w-6" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
