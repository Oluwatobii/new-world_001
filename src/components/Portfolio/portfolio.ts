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
        'The Bug/Project Tracker web application helps in visualizing the progress of projects and potential bugs that are related.',
      active: true,
      stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Express']
    },
    {
      id: '2',
      title: 'Scheduler',
      image: portfolioOnePath,
      color: '#DD7230',
      url: 'https://upbeat-hawking-a45e1b.netlify.app/',
      description: 'A React application that allows users to book and cancel interview on selected days of the week.',
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
        'The Tutorama App makes it easy for students to instantly connect with expert tutros for in-person lessons.',
      active: true,
      stack: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
    },
    {
      id: '4',
      title: 'QuizApp',
      image: portfolioThreePath,
      color: '#2C5F2D',
      url: '/',
      description:
        'An app that lets you create quizzes and share them between friends. The creator of the quiz can view and share all the results at the end of the quiz.',
      active: true,
      stack: ['JavaScript', 'React', 'Firebase', 'Node.js', 'MongoDB']
    }
  ]
}
