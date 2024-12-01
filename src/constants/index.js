export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Achievements',
      href: '#achievements',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },
  ];

  
  export const myProjects = [
    {
      title: 'project-1',
      desc: 'description',
      subdesc:
        'sub-description',
      href: 'link',
      texture: 'project.mp4',
      logo: 'logo',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
      ],
    },
    {
      title: 'project - 2',
      desc: 'description',
      subdesc:
        'sub-description',
      href: 'link',
      texture: 'project.mp4',
      logo: 'logo',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.06 : isMobile ? 0.07 : isTablet ? 0.08 : 0.1,
      deskPosition: isSmall ? [0.5, -3, 0] : isMobile ? [0.5, -4.5, 0] : isTablet ? [1.2, -7, 0] : [1.2, -8.5, 0],
      cubePosition: isSmall ? [4, -6, 0] : isMobile ? [7, -6, 0] : isTablet ? [9, -6, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [9, 5, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-8, 9, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-18, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Name',
      pos: 'Web Developer',
      duration: 'year - year',
      title: "Title",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },    
  ];