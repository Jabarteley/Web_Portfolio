import { Code, Palette, Layout, ShoppingBag, BookOpen, Radio } from 'lucide-react';

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
    title: 'CampusLiveAnnouncement',
    description: 'A platform for campus announcements and events management.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=400&q=80',
    category: 'web',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://campuslive-announcement.vercel.app',
    githubUrl: 'https://github.com/Jabarteley/CampusLiveAnnouncement',
  },
  {
    id: 2,
    title: 'OptimalRouteFinder',
    description: 'An application to find optimal routes and reduce travel time.',
    image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'application',
    technologies: ['TypeScript', 'React', 'Google Maps API', 'Routing Algorithms'],
    githubUrl: 'https://github.com/Jabarteley/OptimalRouteFinder',
  },
  {
    id: 3,
    title: 'AMC-FARM-SERVICES',
    description: 'Agricultural management system for farm services and operations.',
    image: 'https://images.pexels.com/photos/325812/pexels-photo-325812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'web',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Jabarteley/AMC-FARM-SERVICES',
  },
  {
    id: 4,
    title: 'HospitalManagementSystem',
    description: 'Comprehensive hospital management system for patient records and operations.',
    image: 'https://images.pexels.com/photos/3825511/pexels-photo-3825511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'web',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Jabarteley/HospitalManagementSystem',
  },
  {
    id: 5,
    title: 'CitizensReportWebApp',
    description: 'Platform for citizens to report issues and concerns to local government.',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'web',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Jabarteley/CitizensReportWebApp',
  },
  {
    id: 6,
    title: 'Academic-Staff-Service-Request',
    description: 'System for academic staff to manage service requests and administrative tasks.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'web',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Jabarteley/Academic-Staff-Service-Request',
  },
  {
    id: 7,
    title: 'BYTE-CONNECT-PROJECT',
    description: 'A project for connecting users through technology solutions.',
    image: 'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'web',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Jabarteley/BYTE-CONNECT-PROJECT',
  },
  {
    id: 8,
    title: 'FlexisafIntership',
    description: 'An internship management system solution.',
    image: 'https://images.pexels.com/photos/1181246/pexels-photo-1181246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'web',
    technologies: ['JavaScript', 'React', 'Node.js'],
    githubUrl: 'https://github.com/Jabarteley/FlexisafIntership',
  },
  {
    id: 9,
    title: 'UniversityCompleteManagementSystem',
    description: 'Complete university management system for academic operations.',
    image: 'https://images.pexels.com/photos/4318160/pexels-photo-4318160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'web',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Jabarteley/UniversityCompleteManagementSystem',
  },
  {
    id: 10,
    title: 'E-commerce-Template',
    description: 'A responsive e-commerce website template.',
    image: 'https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'web',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Jabarteley/E-commerce-Template',
  },
  {
    id: 11,
    title: 'webportfolio2.0',
    description: 'Version 2.0 of my personal web portfolio.',
    image: 'https://images.pexels.com/photos/1181350/pexels-photo-1181350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'web',
    technologies: ['TypeScript', 'React', 'Node.js'],
    githubUrl: 'https://github.com/Jabarteley/webportfolio2.0',
  },
  {
    id: 12,
    title: 'RoutesSketch',
    description: 'Application for sketching and planning routes.',
    image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'application',
    technologies: ['TypeScript', 'React', 'Google Maps API'],
    githubUrl: 'https://github.com/Jabarteley/RoutesSketch',
  }
];