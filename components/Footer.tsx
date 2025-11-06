import React from 'react';
import { useLocation } from 'react-router-dom';
import { TwitterIcon, InstagramIcon, LinkedInIcon, DribbbleIcon, MailIcon, PhoneIcon, LogoIcon } from './Icons';
import logo from '../assets/logo123.png'

const Footer: React.FC = () => {
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';

    const socialLinks = [
        { name: 'Twitter', icon: TwitterIcon, href: '#' },
        { name: 'Instagram', icon: InstagramIcon, href: '#' },
        { name: 'LinkedIn', icon: LinkedInIcon, href: '#' },
        { name: 'Dribbble', icon: DribbbleIcon, href: '#' }
    ];

    return (
        <footer className="relative z-10 border-t border-gray-800/50 bg-[#0A0A10]">
            <div className="container mx-auto px-6 py-12">
                
                {!isContactPage && (
                     <div className="py-8 border-t border-b border-gray-800/50 mb-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                            <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start space-y-3">
                                <img src={logo} alt="PGS logo" className="w-[5.5rem] h-auto" />


                                <address className="not-italic text-sm text-gray-300">
                                    IT Office, F3,1/113, Jmj Complex,<br />
                                    TNAU Nagar, Othakadai<br />
                                    Madurai - 625107, Tamil Nadu.
                                </address>
                            </div>
                            <div className="flex flex-col items-center md:items-start space-y-2">
                                <div className="flex items-center space-x-2">
                                    <MailIcon className="h-5 w-5 text-purple-400" />
                                    <h4 className="font-semibold text-white">Email</h4>
                                </div>
                                <a href="mailto:info@proglobalsolutions.in" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">info@proglobalsolutions.in</a>
                            </div>
                            <div className="flex flex-col items-center md:items-start space-y-2">
                                <div className="flex items-center space-x-2">
                                    <PhoneIcon className="h-5 w-5 text-purple-400" />
                                    <h4 className="font-semibold text-white">Phone</h4>
                                </div>
                                <a href="tel:9360620595" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">9360620595</a>
                            </div>
                            <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start space-y-2">
                                <div className="flex items-center space-x-2">
                                    <h4 className="font-semibold text-white">Follow Us</h4>
                                </div>
                                <div className="flex space-x-4">
                                    {socialLinks.map(link => {
                                        const Icon = link.icon;
                                        return (
                                            <a key={link.name} href={link.href} aria-label={link.name} className="text-gray-200 hover:text-purple-400 transition-colors">
                                                <Icon className="h-6 w-6" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                     </div>
                )}

                <div className="text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} PGS. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;