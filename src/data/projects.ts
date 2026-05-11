export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'KampusHub',
    description:
      'Campus-focused marketplace for buying, selling, and errands within university communities, with listings, authentication, messaging, and role-based flows.',
    image: 'https://images.pexels.com/photos/6146970/pexels-photo-6146970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'startup',
    technologies: ['React', 'Next.js', 'Node.js', 'Marketplace', 'Authentication'],
    liveUrl: 'https://www.kampushub.com.ng/',
  },
  {
    id: 2,
    title: 'ByteConnect',
    description:
      'Service discovery platform connecting users with local service providers, artisans, and businesses, backed by admin tools and dynamic listings.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'startup',
    technologies: ['Node.js', 'Admin Systems', 'Bookings', 'Service Listings'],
    githubUrl: 'https://github.com/Jabarteley/BYTE-CONNECT-PROJECT',
  },
  {
    id: 3,
    title: 'Eightplux',
    description:
      'Luxury fashion e-commerce platform with premium product presentation, search, filtering, order management, Paystack, and crypto payment support.',
    image: 'https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'ecommerce',
    technologies: ['Next.js', 'Node.js', 'Tailwind CSS', 'Paystack', 'Vercel'],
    liveUrl: 'https://eightplux.com',
  },
  {
    id: 4,
    title: 'Leave Management System',
    description:
      'MERN stack leave workflow with role-based authentication for Admin, Staff, Dean, and Registrar users, status tracking, notifications, and approvals.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'web',
    technologies: ['MongoDB', 'Express.js', 'React', 'Vite', 'JWT', 'bcrypt'],
  },
  {
    id: 5,
    title: 'CampusLiveAnnouncement',
    description: 'A campus announcement and events management platform for improving communication within school communities.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=400&q=80',
    category: 'web',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://campuslive-announcement.vercel.app',
    githubUrl: 'https://github.com/Jabarteley/CampusLiveAnnouncement',
  },
  {
    id: 6,
    title: 'University Management System',
    description: 'Complete university management system supporting academic, administrative, and internal school operations.',
    image: 'https://images.pexels.com/photos/4318160/pexels-photo-4318160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'web',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Jabarteley/UniversityCompleteManagementSystem',
  },
  {
    id: 7,
    title: 'Hospital Management System',
    description: 'Hospital management system for patient records, operational workflows, and healthcare administration.',
    image: 'https://images.pexels.com/photos/3825511/pexels-photo-3825511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'web',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Jabarteley/HospitalManagementSystem',
  },
  {
    id: 8,
    title: 'OptimalRouteFinder',
    description: 'Route planning application for finding efficient travel paths and reducing travel time.',
    image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'application',
    technologies: ['TypeScript', 'React', 'Google Maps API', 'Routing Algorithms'],
    githubUrl: 'https://github.com/Jabarteley/OptimalRouteFinder',
  },
  {
    id: 9,
    title: 'AMC-FARM-SERVICES',
    description: 'Agricultural management system for coordinating farm services, operations, and service-related workflows.',
    image: 'https://images.pexels.com/photos/325812/pexels-photo-325812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'web',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Jabarteley/AMC-FARM-SERVICES',
  },
];
