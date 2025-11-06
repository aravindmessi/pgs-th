import { WebDevIcon, AppDevIcon, VideoIcon, ERPIcon, CRMIcon, AIIcon } from './components/Icons';

export const services = [
  { id: 'web-development', name: 'Web Development', description: 'Crafting stunning, high-performance websites tailored to your brand.', icon: WebDevIcon },
  { id: 'app-development', name: 'App Development', description: 'Building intuitive and powerful mobile applications for iOS and Android.', icon: AppDevIcon },
  { id: 'video-shooting-ads', name: 'Video Shooting & Ads', description: 'Producing cinematic video content and compelling advertisements that convert.', icon: VideoIcon },
  { id: 'erp-solutions', name: 'ERP Solutions', description: 'Streamlining your business processes with custom Enterprise Resource Planning systems.', icon: ERPIcon },
  { id: 'crm', name: 'CRM', description: 'Enhancing customer relationships with powerful and integrated CRM solutions.', icon: CRMIcon },
  { id: 'ai-integrations', name: 'AI Integrations', description: 'Leveraging Artificial Intelligence to automate tasks and unlock new potentials.', icon: AIIcon },
];

// FIX: Define a type for navigation links to ensure type safety across components when arrays are combined.
export type NavLink = {
  name: string;
  path: string;
  dropdown?: typeof services;
};

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

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  logo: string;
};

type ProjectsData = {
  [key: string]: Project[];
};

const createProject = (category: {id: string, name: string}, projectId: number, title: string): Project => ({
    id: `project-${projectId}`,
    title,
    description: `This is a detailed description of the ${title} project. We collaborated closely with the client to bring their vision to life, focusing on user experience, modern design principles, and robust functionality. The result is a digital product that not only meets but exceeds expectations, driving engagement and achieving business goals.`,
    image: `https://picsum.photos/seed/${category.id}${projectId}/1200/800`,
    logo: `https://picsum.photos/seed/${category.id}logo${projectId}/100/100`,
});

export const projectsData: ProjectsData = {
    'e-commerce': [
        createProject(workCategories[0], 1, 'Balaji Gas'),
        createProject(workCategories[0], 2, 'Madurai Kadai'),
        createProject(workCategories[0], 3, 'Grocer Go'),
        createProject(workCategories[0], 4, 'PGS Store'),
    ],
    'real-estate': [
        createProject(workCategories[1], 1, 'Land Cube'),
        createProject(workCategories[1], 2, 'Homezy'),
        createProject(workCategories[1], 3, 'Home Land'),
    ],
    'fashion': [
        createProject(workCategories[2], 1, 'PGS Studio'),
        createProject(workCategories[2], 2, 'De Fashion'),
    ],
    'food': [
        createProject(workCategories[3], 1, 'Millet Noodles'),
        createProject(workCategories[3], 2, 'Food Delivery'),
        createProject(workCategories[3], 3, 'Leo Coffee'),
    ],
    'portfolios': [
        createProject(workCategories[4], 1, 'Jupiter Digitals'),
        createProject(workCategories[4], 2, 'The Tamarind Tree'),
    ],
    'jewelleries': [
        createProject(workCategories[5], 1, 'SM Jewellery'),
    ],
    'sales': [
        createProject(workCategories[6], 1, 'Arasan'),
        createProject(workCategories[6], 2, 'Expensify'),
        createProject(workCategories[6], 3, 'PGS Sales Force'),
    ],
    'rentals': [
        createProject(workCategories[7], 1, 'Car Rental'),
    ],
    'socials': [
        createProject(workCategories[8], 1, 'Legal Rights Consumer Protection Association'),
    ],
    'travel': [
        createProject(workCategories[9], 1, 'Wanderlust Adventures'),
    ],
    'furniture': [
        createProject(workCategories[10], 1, 'Modern Living'),
    ]
};