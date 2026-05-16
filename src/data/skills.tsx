import type { SkillGroup } from '../types';
import {
  SiReact,
  SiMongodb,
  SiReactrouter,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiAxios,
  SiVite,
  SiExpress,
  SiPostgresql,
  SiGithubactions,
} from 'react-icons/si';
import { FaSass, FaHtml5, FaCss3, FaGithub, FaAngular } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa6';
export const skillGroups: SkillGroup[] = [
  {
    name: 'React.js',
    icone: SiReact,
    color: '#61DAFB',
  },
  {
    name: 'TypeScript',
    icone: SiTypescript,
    color: '#3178C6',
  },
  {
    name: 'JavaScript',
    icone: SiJavascript,
    color: '#F7DF1E',
  },
  {
    name: 'Next.js',
    icone: RiNextjsFill,
    color: '#818F95',
  },
  {
    name: 'Redux Toolkit ',
    icone: SiRedux,
    color: '#764ABC',
  },
  {
    name: 'Tailwind CSS',
    icone: SiTailwindcss,
    color: '#06B6D4',
  },
  {
    name: 'Sass/SCSS',
    icone: FaSass,
    color: '#CC6699',
  },
  {
    name: 'Node.js',
    icone: FaNodeJs,
    color: '#5FA04E',
  },
  {
    name: 'MongoDB',
    icone: SiMongodb,
    color: '#47A248',
  },
  {
    name: 'React Router',
    icone: SiReactrouter,
    color: '#CA4245',
  },
  {
    name: 'Axios',
    icone: SiAxios,
    color: '#5A29E4',
  },
  {
    name: 'JWT',
    icone: SiReactrouter,
    color: '#764ABC',
  },
  {
    name: 'HTML5',
    icone: FaHtml5,
    color: '#E34C26',
  },
  {
    name: 'CSS',
    icone: FaCss3,
    color: '#663399',
  },
  {
    name: 'Vite',
    icone: SiVite,
    color: '#9135FF',
  },
  {
    name: 'Express.js',
    icone: SiExpress,
    color: '#818F95',
  },
  {
    name: 'Git',
    icone: FaGithub,
    color: '#F03C2E',
  },
  {
    name: 'PostgreSQL',
    icone: SiPostgresql,
    color: '#4169E1',
  },
  {
    name: 'Angular',
    icone: FaAngular,
    color: '#818F95',
  },
  {
    name: 'GitHub Actions',
    icone: SiGithubactions,
    color: '#2088FF',
  },
];
