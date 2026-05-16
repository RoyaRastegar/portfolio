import type { Project } from '../types'
export const projects: Project[] = [
  {
    id: 'notes-app',
    title: 'Auth-Protected Notes App',
    description:
      'Full-stack notes app with JWT authentication, MongoDB storage, protected routes, and a clean CRUD workflow with rich text support.',
    category: 'fullstack',
    techStack: ['React', 'JWT', 'MongoDB', 'Node.js', 'Express'],
    liveUrl: 'https://auth-protected-note.vercel.app/',
    githubUrl: '#',
    image: '/public/projects/Note-app.png'
  },

]
