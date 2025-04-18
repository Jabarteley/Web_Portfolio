import React from 'react';
import { 
  Code, 
  Palette, 
  Database, 
  Server, 
  Globe, 
  Figma, 
  UserCheck, 
  Briefcase, 
  Users,
  MessageSquare,
  BookOpen,
  Clock
} from 'lucide-react';

export interface Skill {
  id: number;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  proficiency?: number;
}

export const skills: Skill[] = [
  // Technical Skills
  {
    id: 1,
    name: 'JavaScript/TypeScript',
    description: 'Modern ES6+, TypeScript, async patterns, and functional programming.',
    category: 'technical',
    icon: <Code size={24} />,
    proficiency: 95,
  },
  {
    id: 2,
    name: 'React',
    description: 'Component architecture, hooks, context, and state management.',
    category: 'technical',
    icon: <Code size={24} />,
    proficiency: 90,
  },
  {
    id: 3,
    name: 'HTML5 & CSS3',
    description: 'Semantic markup, accessibility, CSS Grid, Flexbox, and animations.',
    category: 'technical',
    icon: <Code size={24} />,
    proficiency: 95,
  },
  {
    id: 4,
    name: 'TailwindCSS',
    description: 'Utility-first CSS framework for rapid UI development.',
    category: 'technical',
    icon: <Code size={24} />,
    proficiency: 90,
  },
  {
    id: 5,
    name: 'Node.js',
    description: 'Backend development, API creation, and server management.',
    category: 'technical',
    icon: <Server size={24} />,
    proficiency: 80,
  },
  {
    id: 6,
    name: 'Databases',
    description: 'MongoDB, PostgreSQL, data modeling, and querying.',
    category: 'technical',
    icon: <Database size={24} />,
    proficiency: 75,
  },
  {
    id: 7,
    name: 'Git & GitHub',
    description: 'Version control, collaboration, and CI/CD workflows.',
    category: 'technical',
    icon: <Code size={24} />,
    proficiency: 85,
  },
  {
    id: 8,
    name: 'API Integration',
    description: 'RESTful services, GraphQL, and third-party API consumption.',
    category: 'technical',
    icon: <Globe size={24} />,
    proficiency: 85,
  },
  
  // Design Skills
  {
    id: 9,
    name: 'UI Design',
    description: 'Creating visually appealing and functional user interfaces.',
    category: 'design',
    icon: <Palette size={24} />,
    proficiency: 85,
  },
  {
    id: 10,
    name: 'UX Design',
    description: 'User research, wireframing, and user-centered design principles.',
    category: 'design',
    icon: <UserCheck size={24} />,
    proficiency: 80,
  },
  {
    id: 11,
    name: 'Figma',
    description: 'Design, prototyping, and collaboration.',
    category: 'design',
    icon: <Figma size={24} />,
    proficiency: 90,
  },
  {
    id: 12,
    name: 'Responsive Design',
    description: 'Creating layouts that work across all device sizes and platforms.',
    category: 'design',
    icon: <Palette size={24} />,
    proficiency: 95,
  },
  {
    id: 13,
    name: 'Animation',
    description: 'Creating engaging UI animations and micro-interactions.',
    category: 'design',
    icon: <Palette size={24} />,
    proficiency: 80,
  },
  {
    id: 14,
    name: 'Design Systems',
    description: 'Creating and maintaining consistent component libraries.',
    category: 'design',
    icon: <Palette size={24} />,
    proficiency: 85,
  },
  
  // Soft Skills
  {
    id: 15,
    name: 'Communication',
    description: 'Clear and effective verbal and written communication.',
    category: 'soft',
    icon: <MessageSquare size={24} />,
    proficiency: 90,
  },
  {
    id: 16,
    name: 'Problem Solving',
    description: 'Analytical thinking and creative solutions to complex problems.',
    category: 'soft',
    icon: <Briefcase size={24} />,
    proficiency: 95,
  },
  {
    id: 17,
    name: 'Teamwork',
    description: 'Collaboration, knowledge sharing, and cross-functional work.',
    category: 'soft',
    icon: <Users size={24} />,
    proficiency: 90,
  },
  {
    id: 18,
    name: 'Time Management',
    description: 'Prioritization, organization, and meeting deadlines.',
    category: 'soft',
    icon: <Clock size={24} />,
    proficiency: 85,
  },
  {
    id: 19,
    name: 'Adaptability',
    description: 'Quickly learning new technologies and methodologies.',
    category: 'soft',
    icon: <BookOpen size={24} />,
    proficiency: 90,
  },
  {
    id: 20,
    name: 'Attention to Detail',
    description: 'Precision, quality control, and thorough testing.',
    category: 'soft',
    icon: <Briefcase size={24} />,
    proficiency: 95,
  },
];