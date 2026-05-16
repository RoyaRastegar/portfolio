import type { EducationItem } from '../types';
import {
  SiReact,
  SiJavascript,
} from 'react-icons/si';
import { FaHtml5,FaGraduationCap  } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa6';

export const education: EducationItem[] = [
  {
    id: 'degree',
    type: 'degree',
    name: 'B.Sc. Computer Software Engineering',
    institution: 'Islamic Azad University of Iran,Lahijan',
    date: '2009 – 2013',
    icon: FaGraduationCap ,
  },
  {
    id: 'react-cert',
    type: 'certification',
    name: 'React, Redux & More',
    institution: 'Udemy',
    date: 'Sep 2023',
    icon: SiReact,
  },
  {
    id: 'html-cert',
    type: 'certification',
    name: 'HTML, CSS & JavaScript',
    institution: 'Udemy',
    date: 'Sep 2023',
    icon: FaHtml5,
  },
  {
    id: 'js-cert',
    type: 'certification',
    name: 'JavaScript',
    institution: 'Udemy',
    date: 'Nov 2023',
    icon: SiJavascript,
  },
  {
    id: 'jnde-cert',
    type: 'certification',
    name: 'Master Node JS ',
    institution: 'Udemy',
    date: 'May 2026',
    icon: FaNodeJs,
  },
];
