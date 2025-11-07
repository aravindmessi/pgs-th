import { WebDevIcon, AppDevIcon, VideoIcon, ERPIcon, CRMIcon, AIIcon } from './components/Icons';

import bg from './assets/Balajigas.webp';
import mk from './assets/Maduraikadai.webp';
import gg from './assets/Grocergo.webp';
import jupi from './assets/Jupiter.jpg';

import lc from './assets/landcube.webp';
import hz from './assets/Homezy.webp';
import hl from './assets/Homeland.webp';

import ps from './assets/pgsstudio.webp';
import df from './assets/Defashion.webp';

import res from './assets/restarunt.webp';
import mn from './assets/milletnoodles.png';
import fd from './assets/foodelivery.webp';
import lco from './assets/coffee.webp';

import jd from './assets/Jupiterdigitals.webp';
import bgas from './assets/balajiweb.webp';
import tt from './assets/Tree.webp';

import sm from './assets/sm.webp';

import arasan from './assets/Arasan.webp';
import efy from './assets/Expensify.webp';
import psf from './assets/pgsapp.webp';

import cr from './assets/carrental.webp';
import legal from './assets/legal.webp';
import cbe from './assets/coimtravel.webp';

export const services = [
  { id: 'web-development', name: 'Web Development', description: 'Crafting stunning, high-performance websites tailored to your brand.', icon: WebDevIcon },
  { id: 'app-development', name: 'App Development', description: 'Building intuitive and powerful mobile applications for iOS and Android.', icon: AppDevIcon },
  { id: 'video-shooting-ads', name: 'Video Shooting & Ads', description: 'Producing cinematic video content and compelling advertisements that convert.', icon: VideoIcon },
  { id: 'erp-solutions', name: 'ERP Solutions', description: 'Streamlining your business processes with custom systems.', icon: ERPIcon },
  { id: 'crm', name: 'CRM', description: 'Enhancing customer relationships with integrated CRM solutions.', icon: CRMIcon },
  { id: 'ai-integrations', name: 'AI Integrations', description: 'Automating workflows and unlocking new potential with AI.', icon: AIIcon },
];

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Our Work', path: '/work' },
  { name: 'Services', path: '/services', dropdown: services },
  { name: 'Contact', path: '/contact' },
];

export const workCategories = [
  { id: 'e-commerce', name: 'E-commerce' },
  { id: 'real-estate', name: 'Real Estate' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'food', name: 'Food & Restaurant' },
  { id: 'portfolios', name: 'Portfolios' },
  { id: 'jewelleries', name: 'Jewelleries' },
  { id: 'sales', name: 'Sales' },
  { id: 'rentals', name: 'Rentals' },
  { id: 'socials', name: 'Socials' },
  { id: 'travel', name: 'Travel' },
  { id: 'furniture', name: 'Furniture' },
];

export const projectsData = {
  'e-commerce': [
    {
      id: 'project-1',
      title: 'Balaji Gas',
      description:
        'The Balaji Gas application is a streamlined solution for managing gas cylinder orders and deliveries, encompassing three main domains: Admin, Employees, and Customers. Admins can assign orders, employees update delivery status, and customers can book cylinders seamlessly, ensuring reliable and efficient workflow.',
      image: bg,
      logo: ''
    },
    {
      id: 'project-2',
      title: 'Madurai Kadai',
      description:
        'Our Madurai Kadai app provides an engaging shopping experience with a wide range of products, easy browsing, and smooth purchasing flow to encourage users to discover and buy items effortlessly.',
      image: mk,
      logo: ''
    },
    {
      id: 'project-3',
      title: 'Grocer Go',
      description:
        'Discover a diverse selection of groceries with affordable pricing and fast doorstep delivery. Grocer Go focuses on freshness, convenience, and a pleasant shopping experience.',
      image: gg,
      logo: ''
    },
    {
      id: 'project-4',
      title: 'PGS Store',
      description:
        'Welcome to Jupiter Crackers, your one-stop platform for premium crackers at unbeatable offers. Easy navigation, secure checkout, and fast delivery make shopping seamless and enjoyable.',
      image: bgas,
      logo: ''
    },
  ],

  'real-estate': [
    {
      id: 'project-1',
      title: 'Land Cube',
      description:
        'LandCube simplifies property discovery with advanced filters, detailed listings, virtual tours, and real-time data to help users find the perfect home or investment property.',
      image: lc,
      logo: ''
    },
    {
      id: 'project-2',
      title: 'Homezy',
      description:
        'Discover the most suitable property with ease. Homezy focuses on quality real estate development backed by decades of expertise.',
      image: hz,
      logo: ''
    },
    {
      id: 'project-3',
      title: 'Home Land',
      description:
        'Find and rent your dream home with a simple and smooth property browsing experience.',
      image: hl,
      logo: ''
    },
  ],

  'fashion': [
    {
      id: 'project-1',
      title: 'PGS Studio',
      description:
        'A fashion studio offering unique and artistic clothing experiences designed to inspire creativity and style.',
      image: ps,
      logo: ''
    },
    {
      id: 'project-2',
      title: 'De Fashion',
      description:
        'Discover a premium clothing collection designed for elegance, comfort, and everyday style.',
      image: df,
      logo: ''
    },
  ],

  'food': [
    { id: 'project-1', title: 'Restaurant Website', description: '', image: res, logo: '' },
    {
      id: 'project-2',
      title: 'Millet Noodles',
      description:
        'Millets are nutrient-rich grains perfect for a healthy lifestyle. Our Millet Noodles blend taste and wellness effortlessly.',
      image: mn,
      logo: ''
    },
    {
      id: 'project-3',
      title: 'Food Delivery',
      description:
        'A complete restaurant POS and delivery system managing orders, kitchen flow, billing, reservations, and analytics efficiently.',
      image: fd,
      logo: ''
    },
    {
      id: 'project-4',
      title: 'Leo Coffee',
      description:
        'Order freshly brewed premium coffee blends and manage subscriptions with ease using the Leo Coffee application.',
      image: lco,
      logo: ''
    },
  ],

  'portfolios': [
    {
      id: 'project-1',
      title: 'Jupiter Digitals',
      description:
        'A complete showcase website for a digital agency offering software development, marketing, and cloud solutions.',
      image: jd,
      logo: ''
    },
    {
      id: 'project-2',
      title: 'The Tamarind Tree',
      description:
        'A luxury wedding and retreat venue surrounded by heritage architecture and natural beauty, crafted for unforgettable experiences.',
      image: tt,
      logo: ''
    },
  ],

  'jewelleries': [
    {
      id: 'project-1',
      title: 'SM Jewellery',
      description:
        'A luxurious jewelry shopping platform offering detailed product showcases and a smooth online buying experience.',
      image: sm,
      logo: ''
    },
  ],

  'sales': [
    {
      id: 'project-1',
      title: 'Arasan',
      description:
        'A sales tracking and expense management system enabling real-time employee location monitoring and attendance logging.',
      image: arasan,
      logo: ''
    },
    {
      id: 'project-2',
      title: 'Expensify',
      description:
        'An app designed to track daily expenses and help users gain control over their savings.',
      image: efy,
      logo: ''
    },
    {
      id: 'project-3',
      title: 'PGS Sales Force',
      description:
        'Sales workflows are automated across Super Admin, Telecaller, and Sales domains to streamline lead handling and conversions.',
      image: psf,
      logo: ''
    },
  ],

  'rentals': [
    {
      id: 'project-1',
      title: 'Car Rental',
      description:
        'A user-friendly car rental booking platform with flexible vehicle selection and convenient pickup and drop options.',
      image: cr,
      logo: ''
    },
  ],

  'socials': [
    {
      id: 'project-1',
      title: 'Legal Rights Association',
      description:
        'A platform dedicated to consumer awareness, legal rights education, and support for resolving consumer issues.',
      image: legal,
      logo: ''
    },
  ],

  'travel': [
    { id: 'project-1', title: 'Travel Agency Website', description: '', image: 'https://picsum.photos/seed/mountain-adventure/1200/800', logo: 'https://picsum.photos/seed/travellogo1/100/100' },
  ],

  'furniture': [
    {
      id: 'project-1',
      title: 'Modern Living Furniture',
      description:
        'A premium furniture e-commerce platform with contemporary design collections and immersive shopping experience.',
      image: `https://picsum.photos/seed/stylish-furniture/1200/800`,
      logo: 'https://picsum.photos/seed/furniturelogo1/100/100',
    },
  ],
};
