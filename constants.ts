import { WebDevIcon, AppDevIcon, VideoIcon, ERPIcon, CRMIcon, AIIcon } from './components/Icons';

import webd from './assets/webd.webp';
import appd from './assets/appd.webp';
import vid from './assets/videp.webp';
import erp from './assets/erp.webp';
import crm from './assets/crm.webp';
import ai from './assets/ai.webp';

import bgas from './assets/balaji.webp'
import mk from './assets/madurai.webp';
import gg from './assets/Grocergo.webp';
import jc from './assets/jupiter.webp';

import lc from './assets/landc.webp';
import homezy from './assets/Homezy.webp';
import HL from './assets/Homeland.webp';

import pgs from './assets/pgsstudio.webp';
import df from './assets/Defashion.webp';

import mn from './assets/milletnoodles.webp';
import fd from './assets/foodelivery.webp';
import lco from './assets/coffee.webp';

import jd from './assets/Jupiterdigitals.webp';
import tree from './assets/Tree.webp';

import sm from './assets/sm.webp';

import arasan from './assets/Arasan.webp';
import ex from './assets/Expensify.webp';
import psf from './assets/pgsapp.webp';

import cr from './assets/carrental.webp';
import ig from './assets/ig.webp';
import cbe from './assets/cbe.webp';

import legals from './assets/socials.webp';


export const services = [
  { 
    id: 'web-development', 
    name: 'Web Development', 
    description: 'Crafting stunning, high-performance websites tailored to your brand.', 
    fullDescription: 'We build websites that load fast and look clean and stable No template spam just solid custom work.Mobile first designs that work properly on every device.We focus on results leads conversions and user experience.Code is structured clean and maintainable.We ensure SEO friendly pages for real reach.Security is included not optional.Our goal is a site that works every day not just on demo day.', 
    icon: WebDevIcon,
    image: webd
  },
  { 
    id: 'app-development', 
    name: 'App Development', 
    description: 'Building intuitive and powerful mobile applications for iOS and Android.',
    fullDescription: 'We create apps that solve real problems and function smoothly.Performance and stability come first.Cross platform builds so you do not waste extra budget.We develop test improve and continue support. UI is simple to use without confusion.We eliminate unnecessary features that only increase complexity.Development is planned step by step for predictable progress.You get an app that works in real conditions not just screenshots.', 
    icon: AppDevIcon,
    image: appd
  },
  { 
    id: 'video-shooting-ads', 
    name: 'Video Shooting & Ads', 
    description: 'Producing cinematic video content and compelling advertisements that convert.',
    fullDescription: 'We produce videos that hold attention and deliver a clear message.Strong visuals story flow and editing that does not feel cheap.We plan shoot edit and finish with purpose.The final output looks clean professional and effective.We avoid clutter and focus only on message impact.Lighting sound and pacing are handled carefully.We shoot content that feels modern not outdated.The result is content that viewers understand remember and engage with.', 
    icon: VideoIcon,
    image: vid
  },
  { 
    id: 'erp-solutions', 
    name: 'ERP Solutions', 
    description: 'Streamlining your business processes with custom Enterprise Resource Planning systems.',
    fullDescription: 'We build ERP systems that remove manual work and reduce confusion.All operations like inventory billing HR and sales in one system.Simple and practical interface that teams will actually use.Focus is efficiency accuracy and smooth daily workflow.We reduce duplicate data entry and repetitive tasks.The system grows with the business not against it.Training is straightforward not overwhelming.You get control clarity and consistency across departments.', 
    icon: ERPIcon,
    image: erp
  },
  { 
    id: 'crm', 
    name: 'CRM', 
    description: 'Enhancing customer relationships with powerful and integrated CRM solutions.',
    fullDescription: 'We provide CRM systems that keep leads follow ups and customers organized.No more spreadsheet mess or missed opportunities.Clear sales pipeline and automated reminders.Helps teams stay consistent and close deals faster.Easy to track who said what and when.Reduces guesswork and confusion.Simple to learn and use daily.Your sales process becomes predictable and scalable.', 
    icon: CRMIcon,
    image: crm
  },
  { 
    id: 'ai-integrations', 
    name: 'AI Integrations', 
    description: 'Leveraging Artificial Intelligence to automate tasks and unlock new potentials.',
    fullDescription: 'We integrate AI to automate repetitive tasks and improve decision making.Only where it actually delivers value no hype.AI models tuned to your business data for accuracy.Goal is to reduce workload increase speed and improve results.We cut down human error in repetitive workflows.AI supports your team not replaces it.Implementation is practical and tested.You get measurable improvement not vague promises.', 
    icon: AIIcon,
    image: ai
  },
];


export type NavLink = { name: string; path: string; dropdown?: typeof services };

export const navLinks: NavLink[] = [
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
    { id: 'project-1', title: 'Balaji Gas', description: 'The Balaji Gas application is a streamlined solution for managing gas cylinder orders and deliveries, encompassing three main domains: Admin, Employees, and Customers. Within the Admin domain, admins can efficiently organize and assign customer orders to employees, ensuring smooth operations. Employees, in turn, can update delivery details, providing real-time status on each customer’s order. Customers have a simple, user-friendly interface where they can easily book gas cylinders, which is the core function of the application. This integrated approach simplifies the order and delivery process, ensuring a reliable and efficient service for all users.', image: bgas, logo: bgas },
    { id: 'project-2', title: 'Madurai Kadai', description: 'Our Madurai Kadai app is designed to offer an engaging shopping experience with a wide range of features to make buying items convenient and enjoyable. From browsing an extensive selection of products to seamless purchasing options, our app aims to attract customers and enhance their shopping journey. The primary goal of Madurai Kadai is to provide a user-friendly platform that encourages customers to explore, discover, and purchase items effortlessly.', image: mk, logo: mk },
    { id: 'project-3', title: 'Grocer Go', description: 'Discover a diverse selection of fresh produce, pantry essentials, and more, all at affordable prices. With speedy and reliable delivery, we bring the store to your doorstep. Our commitment to freshness, secure online ordering, and community values make us your ideal grocery partner. Shop anytime, explore our culinary inspiration, and experience grocery shopping reimagined. Welcome to GrocerGo - where every purchase is a pleasure!', image: gg, logo: gg },
    { id: 'project-4', title: 'Jupiter Crackers', description: 'Welcome to Jupiter Crackers, your one-stop online destination for purchasing premium crackers at unbeatable offer prices. Our dynamic website brings you a wide range of crackers, from sparklers to high-end fireworks, all available at discounted rates. Whether you re celebrating a festival or planning a special event, we ensure you get the best deals without compromising on quality. With easy navigation, secure payment options, and fast delivery, shopping for crackers has never been more convenient. Stay updated with our exclusive offers and promotions to enjoy incredible savings on your favorite crackers. Explore our collection and make your celebrations brighter with Jupiter Crackers!', image: jc, logo: jc },
  ],

  'real-estate': [
    { id: 'project-1', title: 'Land Cube', description: 'LandCube is a comprehensive real estate website designed to streamline property searches and connect buyers, sellers, and renters. The platform offers a user-friendly experience with advanced search filters, allowing users to explore listings based on location, property type, price, and amenities. LandCube provides detailed property descriptions, high-quality images, virtual tours, and interactive maps to help users make informed decisions. With features like real-time availability updates, neighborhood insights, and expert guidance, LandCube simplifies the property discovery process, making it easy for users to find their ideal home or investment property.', image: lc, logo: lc },
    { id: 'project-2', title: 'Homezy', description: 'Discover Most Sutable property Our mission is to engagge in issue that are concern to individuals We are build Quality realestate Projects since 1998.', image: homezy, logo: homezy },
    { id: 'project-3', title: 'Home Land', description: 'RentYour dream house with us', image: HL, logo: HL },
  ],

  'fashion': [
    { id: 'project-1', title: 'PGS Studio', description: 'We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people. We are always looking to make something that is easy for everyone. We are very dedicated to making our products. We offer unique and creative products to a wide range of people. We have a variety of styles, but for most people, all of the options are in the box. We specialize in making things that make you happy. We are a fashion studio based in California. We create unique designs that will blow your mind. We also design unique jewelry pieces. Fashion is an ART that can not be grasped by everyone.', image: pgs, logo: pgs },
    { id: 'project-2', title: 'De Fashion', description: 'Discover the Best Fashion Collection The High-Quality Collection Shop Now.', image: df, logo: df },
  ],

  'food': [
    { id: 'project-1', title: 'Millet Noodles', description: 'Fuel Your Life with millets, That Powers Wellness Discover the power of millets, natures ancient grains that pack a punch when it comes to health and wellness. Rich in essential nutrients like fiber, protein, vitamins, and minerals, millets are the perfect choice for a balanced diet.', image: mn, logo: mn },
    { id: 'project-2', title: 'Food Delivery', description: 'PGS Sales Force is a comprehensive app designed to streamline sales operations across three main domains: Super Admin, Telecaller, and Sales. The Telecaller domain enables telecallers to reach out to customers, gather essential information, and enter these details directly into the app. The Super Admin oversees the entire process, assigning customer details to telecallers and managing workflow efficiently. The Sales domain utilizes the data provided by Telecallers to follow up with leads and close sales, ensuring a smooth, coordinated sales process from customer engagement to final sale.', image: fd, logo: fd },
    { id: 'project-3', title: 'Leo Coffee', description: 'We are a family run enterprise, who understand and cherish coffee.Our philosophy exemplified by our traditions to dispatch only the freshest coffee to our customers reflects our constant strive for perfection.Passionate dedication and unrelenting efforts by every member of the Leo family is what enriched our legacy.', image: lco, logo: lco },
  ],

  'portfolios': [
    { id: 'project-1', title: 'Jupiter Digitals', description: 'Jupiter Digitals is an innovative IT company specializing in delivering customized digital solutions for businesses of all sizes. Our website showcases a range of services, including web and mobile app development, digital marketing, cloud computing, and software consulting. With a team of skilled professionals, Jupiter Digitals is dedicated to transforming ideas into powerful digital experiences that drive growth and efficiency. Explore our portfolio, read client success stories, and discover how we can help elevate your business in today’s digital landscape.', image: jd, logo: jd },
    { id: 'project-2', title: 'The Tamarind Tree', description: 'Nestled in a five-acre garden of beautiful trees, including a 400-year-old tamarind tree, a pond, a colonial Bandstand, elegant pavilions, and ample open spaces, The Tamarind Tree is a place like none other. Once someone’s home, then a restaurant, sometimes a weekend getaway, it is now a luxury space for weddings, corporate expeditions, and leisure retreats. It is one of the most understated, yet magical resorts for weddings in Bangalore. With a heartfelt commitment to preserving heritage and providing unparalleled experiences, we invite you to escape to our oasis—a hidden gem in the heart of Bangalore, where every event is infused with warmth, authenticity, and the enchantment of our surroundings.', image: tree, logo: tree },
  ],

  'jewelleries': [
    { id: 'project-1', title: 'SM Jewellery', description: '', image: sm, logo: sm },
  ],

  'sales': [
    { id: 'project-1', title: 'Arasan', description: 'The Arasan Sales Automation application is a comprehensive tool for sales tracking and expense management, tailored to enhance the efficiency of sales operations. This application features both admin and sales domains, allowing seamless interaction between managers and sales personnel. Admins have live monitoring capabilities to track the locations visited by sales representatives in real time, providing valuable insights into their field activities. The app includes an automatic live location marking feature for sales visits, enabling accurate tracking. Additionally, sales personnel can record their attendance directly through the app and conveniently log food and travel expenses, ensuring accurate expense reporting. For added convenience, admins can download detailed location reports of sales personnel for specific dates, offering a complete overview of field operations and expenses.', image: arasan, logo: arasan },
    { id: 'project-2', title: 'Expensify', description: 'Expensify is an app designed to help you track and calculate your day-to-day expenses, giving you a clear view of your savings.', image: ex, logo: ex },
    { id: 'project-3', title: 'PGS Sales Force', description: 'PGS Sales Force is a comprehensive app designed to streamline sales operations across three main domains: Super Admin, Telecaller, and Sales. The Telecaller domain enables telecallers to reach out to customers, gather essential information, and enter these details directly into the app. The Super Admin oversees the entire process, assigning customer details to telecallers and managing workflow efficiently. The Sales domain utilizes the data provided by Telecallers to follow up with leads and close sales, ensuring a smooth, coordinated sales process from customer engagement to final sale.', image: psf, logo: psf },
  ],

  'rentals': [
    { id: 'project-1', title: 'Car Rental', description: 'Our Car Rental app allows customers to easily book a car for rent, offering convenience and flexibility for their travel needs. With a user-friendly interface, customers can browse available vehicles, choose the one that best suits their preferences, and complete their booking directly through the app. Whether its for a short trip or a long journey, the app ensures a smooth rental experience, with flexible pick-up and drop-off options, all designed to provide maximum comfort and convenience during your travels.', image: cr, logo: cr },
    { id: 'project-2', title: 'Indus Go', description: 'A car subscription is a great option as it offers flexibility, convenience, and the ability to switch cars quickly with no long-term commitments and also does not require a large upfront payment such as insurance, road tax, and other payments which are required when buying a car.', image: ig, logo: ig },
    { id: 'project-3', title: 'Coimbatore Car Travels', description: 'We provide reliable car rentals in Coimbatore with professional drivers for airport drops, city travel, and outstation trips'
, image: cbe, logo: cbe },
  ],

  'socials': [
    { id: 'project-1', title: 'Legal Rights Consumer Association', description: 'Legal Rights Consumer Protection Association', image: legals, logo: legals },
  ],

  'travel': [],
  'furniture': [],
};
