import portfolioOnePath from '../../assets/images/port-1.png'
import portfolioTwoPath from '../../assets/images/port-2.png'
import portfolioThreePath from '../../assets/images/port-3.png'
import portfolioFourPath from '../../assets/images/port-4.png'

export const portfolioData = {
  data: [
    {
      title: 'Tracker',
      image: portfolioFourPath,
      imageOverLayColor: '#2A9BD4',
      url: 'https://tracker.tbello.dev',
      description:
        'The Bug/Project Tracker web application helps in visualizing the progress of projects and potential bugs that are related.'
    },
    {
      title: 'Scheduler',
      image: portfolioOnePath,
      imageOverLayColor: '#DD7230',
      url: 'https://upbeat-hawking-a45e1b.netlify.app/',
      description: 'A React application that allows users to book and cancel interview on selected days of the week.'
    },
    {
      title: 'Tutorama',
      image: portfolioTwoPath,
      imageOverLayColor: '#5643FA',
      url: '/',
      description:
        'The Tutorama App makes it easy for students to instantly connect with expert tutros for in-person lessons.'
    },
    {
      title: 'QuizApp',
      image: portfolioThreePath,
      imageOverLayColor: '#2C5F2D',
      url: '/',
      description:
        'An app that lets you create quizzes and share them between friends. The creator of the quiz can view and share all the results at the end of the quiz.'
    }
  ]
}
