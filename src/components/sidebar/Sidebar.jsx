// import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

import logo from '../images/my-img.jpg';
import github from '../images/github.png';
// import instagram from '../images/instagram.png';
// import twitter from '../images/twitterx.png';
import facebook from '../images/facebook.jpg'
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';

export default function Sidebar() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };
  const iconList = [
    {
      component: github,
      href: 'https://github.com/Sais-opu'
    },
    {
      component: linkedin,
      href: 'https://www.linkedin.com/in/md-saidul-islam-apu-5b6306228/'
    },
    // {
    //   component: twitter,
    //   href: 'https://twitter.com/Sachin_Mittal98'
    // },
    {
      component: facebook,
      href: 'https://www.facebook.com/sais.opu.2024'
    },
    {
      component: gmail,
      href: 'mailto:saidulislamapu2024@gmail.com'
    }
  ];
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className='sidebar'>
      <div className='topHashtag'># programmer_life</div>
      <div className='topHashtag'># Full-Stack Developer</div>
      <div className='topHashtag'># coding</div>
      <h1>
        <Link smooth to='/#start' className='h1_links'>
          MD SAIDUL ISLAM APU
        </Link>
      </h1>
      <motion.div
        animate={{ y: [2, -2] }}
        transition={{ ease: 'linear', duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <img src={logo} className='my-img' />
      </motion.div>
      <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
        <a
          href='mailto:saidulislamapu2024@gmail.com'
          rel='opener noreferrer'
          target='_blank'
          className='fa fa-envelope'
        ></a>
        &nbsp; <a href="mailto:saidulislamapu2024@gmail.com">saidulislamapu2024@gmail.com</a>
      </p>


      {/* <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
        <a
          href='mailto:saidulislamapu2024@gmail.com'
          rel='opener noreferrer'
          target='_blank'
          className='fa fa-envelope'
        ></a>
        &nbsp;saidulislamapu2024@gmail.com
      </p> */}


      <ul className='sidebar-nav'>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#projects' className='links'>
            Projects
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#about' className='links'>
            About
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#interest' className='links'>
            Interest
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#education' className='links'>
            Education
          </Link>
        </li>
      </ul>

      <div>
        <motion.ul className='sidebar-nav' variants={container} initial='hidden' animate='visible'>
          {iconList.map((val, index) => (
            <motion.li key={index} variants={item}>
              <img
                onClick={() => {
                  window.open(val.href, '_blank');
                }}
                src={val.component}
                className='icon-img'
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div
        style={{
          color: 'black',
          fontWeight: 'bold',
          paddingTop: '20%'
        }}
        className='tagtop'
      >
      </div>
    </div>
  );
}
