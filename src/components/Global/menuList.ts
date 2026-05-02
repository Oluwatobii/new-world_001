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
          label: 'About'
        },
        {
          link: '#competencies',
          label: 'Skills'
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
          link: '/api/resume',
          label: 'Resume',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        {
          link: '#portfolio',
          label: 'Projects'
        },
        {
          link: '#contact',
          label: 'Contact'
        }
      ]
    }
  ]
}
