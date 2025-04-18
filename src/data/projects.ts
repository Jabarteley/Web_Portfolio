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
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce site with product filtering, user accounts, and secure checkout functionality.',
    image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Professional portfolio site with smooth animations and responsive design.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    category: 'web',
    technologies: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity application with task categorization, deadlines, and collaboration features.',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg',
    category: 'application',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Company Rebrand',
    description: 'Complete visual identity redesign including logo, color palette, and brand guidelines.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg',
    category: 'design',
    technologies: ['Figma', 'Illustrator', 'Photoshop', 'After Effects'],
    liveUrl: 'https://example.com',
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'Interactive weather visualization with forecast data and location-based services.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    category: 'application',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 6,
    title: 'Mobile App UI Design',
    description: 'Complete user interface design for a fitness tracking mobile application.',
    image: 'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg',
    category: 'design',
    technologies: ['Figma', 'Sketch', 'Prototyping', 'User Testing'],
    liveUrl: 'https://example.com',
  }
];