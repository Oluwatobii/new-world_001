export const menuList = {
  menu: [
    {
      name: 'Home',
      path: '#home'
    },
    {
      name: 'Competencies',
      path: '#competencies'
    },
    {
      name: 'About',
      path: '#about'
    },
    {
      name: 'Portfolio',
      path: '#portfolio'
    },
    {
      name: 'Resume',
      path: '#resume'
    },
    {
      name: 'Contact',
      path: '#contact'
    }
  ],
  groups: [
    {
      title: 'Menu',
      links: [
        {
          link: '#about',
          label: 'About Me'
        },
        {
          link: '#competencies',
          label: 'Services'
        },
        {
          link: '#portfolio',
          label: 'Portfolio'
        }
      ]
    },
    {
      title: 'Links',
      links: [
        {
          redirect: true,
          link: 'https://awss3resume.s3.ca-central-1.amazonaws.com/Resume.pdf',
          label: 'Resume'
        },
        {
          link: '#portfolio',
          label: 'Projects'
        },
        {
          link: '#contact',
          label: 'Contact Me'
        }
      ]
    }
  ]
}
