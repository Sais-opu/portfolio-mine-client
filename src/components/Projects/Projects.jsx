import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import marathon from '../images/marathon.png'

import crowd from '../images/crowd.png'
import github from '../images/github.png';
import edu from '../images/edu.png';



// Web projects
const webItem = [
  {
    link: 'https://edumanage-f0f88.web.app/',
    title: 'Edu-Manageemnt',
    techStack: 'Useful repo for most common frontend and backend challenges',
    desc: 'Technology used: React Js, Mantine UI, Context API',
    image: edu,
    color: '#E5E483',
    githubLink: 'https://github.com/mittalsam98/frontenddev'
  },
  {
    link: 'https://marathon-manage-system.web.app/',
    title: 'Marathon-Manageemnt',
    techStack: 'Useful repo for most common frontend and backend challenges',
    desc: 'Technology used: React Js, Mantine UI, Context API',
    image: marathon,
    color: '#E5E483',
    githubLink: 'https://github.com/mittalsam98/frontenddev'
  },
  {
    link: 'https://crowdcube-1249a.web.app/',
    title: 'Crowdcube ',
    techStack: 'Useful repo for most common frontend and backend challenges',
    desc: 'Technology used: React Js, Mantine UI, Context API',
    image: crowd,
    color: '#E5E483',
    githubLink: 'https://github.com/Sais-opu/CrowdCube-Client-side'
  },
  
  
  
];

// const androidAppItems = [
//   {
//     link: 'https://play.google.com/store/apps/details?id=com.thesachin.your_dictionary',
//     title: 'Definition Finder',
//     techStack: 'Tech Stack: Flutter',
//     desc: 'Definition Finder is absolutely free online dictionary with every word you look up. Millions of definitions from the most trusted source.',
//     image: definition,
//     color: '#CBD18F',
//     githubLink:
//       'https://github.com/mittalsam98?tab=repositories&q=&type=&language=dart&sort=stargazers'
//   },
// ]
  

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      {/* <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
      <ul className={classes.cards}>
        {androidAppItems.map((item) => {
          return getProjectCard(item);
        })}
      </ul> */}
      {/* </ScrollAnimation> */}
    </div>
  );
}
