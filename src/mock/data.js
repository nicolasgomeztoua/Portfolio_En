import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nicolas Gomez', // e.g: 'Name | Developer'
  lang: 'ES', // e.g: en, es, fr, jp
  description: 'Nicolas Gomez´s Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nicolas Gomez',
  subtitle: 'I am a frontend web developer',
  cta: 'About Me',

};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a 21 year old frontend web developer. After a year of university studies in finance and accounting in 2020, I decided to pursue a secondary interest that has become a passion and my job.',
  paragraphTwo:
    'I come from a variety of backgrounds. And I´ve been exposed to a multicultural environment all my life. I have spent years of my life in Spain, Morocco, France, and the UK, as well as graduating from an American high school in Morocco.',
  paragraphThree:
    'In an ever-growing industry, I´m primarily concerned with learning the complex parts early on. I am proud of where I am today, and I make a constant effort to learn new skills and improve current ones every day.',
  resume: 'https://pdfhost.io/v/wH8QHv7by_Nicolas_Gomez_Toua_EN', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'boostify.png',
    title: 'Boostify',
    info: 'My biggest project to date. A React app for help with video games. Using React-Router, Styled-Components/CSS and Hooks for the Frontend. Node.js, MongoDB, Mongoose, Bycrypt, CORS, and Stripe were used in the backend. ',
    info2: 'Used in a production enviorment.',
    url: 'https://www.boostify.es/',
    repo: 'https://github.com/nicolasgomeztoua/Boostify',
  },
  {
    id: nanoid(),
    img: 'AlgoPic.png',
    title: 'Forex Trading Robot',
    info: 'A piece of software written for the MQL4 framework based on C++',
    info2:
      'This trading robot makes operations in the financial markets of money exchange based on an algorithm with 6 different parameters.',
    url: 'https://youtu.be/4Pl4wrVCB3g',
    repo: 'https://github.com/nicolasgomeztoua/No-Nonsense-Trading-Robot',
  },
  {
    id: nanoid(),
    img: 'Gatsby.png',
    title: 'Gatsby && Contentful',
    info: 'Thanks to gatsby the need to use suboptimal and slow systems like wordpress and php is eliminated.',
    info2:
      'The content and the url of the description page is autogenerated thanks to Gatsby and a CMS where the client can write their content as worpdress or contentful and not have to expose the client to html and allow developers to work with better tools',
    url: 'https://reactestate.netlify.app/',
    repo: 'https://github.com/nicolasgomeztoua/ReactEstate',
  },
  {
    id: nanoid(),
    img: 'Pathfinder.png',
    title: 'Pathfinding visualizer',
    info: 'A visualizer of the Dijkstras graph traversal algorithm. In order to find the shortest path.',
    info2:'Place walls and bombs to experiment with the shortest path.',
    url: 'https://pathfinder-two.vercel.app/',
    repo: 'https://github.com/nicolasgomeztoua/Pathfinder',
  },

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nicolasnourgt@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nicolas-nour-gomez-toua-36b3731b2/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nicolasgomeztoua',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
