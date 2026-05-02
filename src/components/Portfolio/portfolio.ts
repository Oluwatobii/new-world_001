import portfolioOnePath from '@/assets/images/port-1.png'
import portfolioTwoPath from '@/assets/images/port-2.png'
import portfolioThreePath from '@/assets/images/port-3.png'
import portfolioFourPath from '@/assets/images/port-4.png'

export const portfolioData = {
  data: [
    {
      id: '1',
      title: 'Tracker',
      image: portfolioFourPath,
      color: '#2A9BD4',
      url: 'https://tracker.tbello.dev',
      description:
        'A bug and project tracker that visualizes work in progress, milestones, and related issues in one place.',
      active: true,
      stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Express']
    },
    {
      id: '2',
      title: 'Scheduler',
      image: portfolioOnePath,
      color: '#DD7230',
      url: 'https://upbeat-hawking-a45e1b.netlify.app/',
      description: 'A scheduling app for booking and canceling interview slots on selected days, built with React.',
      active: true,
      stack: ['JavaScript', 'React', 'Node.js', 'Ruby', 'PostgreSQL']
    },
    {
      id: '3',
      title: 'Tutorama',
      image: portfolioTwoPath,
      color: '#5643FA',
      url: '/',
      description:
        'Connects students with vetted tutors for in-person lessons, with a smooth booking and matching flow.',
      active: true,
      stack: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
    },
    {
      id: '4',
      title: 'QuizApp',
      image: portfolioThreePath,
      color: '#2C5F2D',
      url: '/',
      description: 'Create quizzes, share them with others, and review aggregated results when a session ends.',
      active: true,
      stack: ['JavaScript', 'React', 'Firebase', 'Node.js', 'MongoDB']
    }
  ]
}
