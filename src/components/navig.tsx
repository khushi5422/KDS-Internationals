import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faAddressBook, faClone, faCalendarAlt, faChartBar, faCopy } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';



const Navug = () => {
      useEffect(() => {
        const test = () => {
          const tabsNewAnim = document.getElementById('navbarSupportedContent');
          const selectorNewAnim = document.getElementById('navbarSupportedContent')?.querySelectorAll('li').length;
          const activeItemNewAnim = tabsNewAnim?.querySelector('.active') as HTMLElement;
          const activeWidthNewAnimHeight = activeItemNewAnim.offsetHeight;
          const activeWidthNewAnimWidth = activeItemNewAnim.offsetWidth;
          const itemPosNewAnimTop = activeItemNewAnim.offsetTop;
          const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;
          
          const horiSelector = document.querySelector('.hori-selector') as HTMLElement;
          horiSelector.style.top = `${itemPosNewAnimTop}px`;
          horiSelector.style.left = `${itemPosNewAnimLeft}px`;
          horiSelector.style.height = `${activeWidthNewAnimHeight}px`;
          horiSelector.style.width = `${activeWidthNewAnimWidth}px`;
        };
    
        const navbar = document.getElementById('navbarSupportedContent');
navbar?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement)?.nodeName === 'LI') {
    const activeItemNewAnim = navbar.querySelector('.active');
    (activeItemNewAnim as HTMLElement)?.classList.remove('active');
    (e.target as HTMLElement).classList.add('active');
    
    const activeWidthNewAnimHeight = (e.target as HTMLElement).offsetHeight;
    const activeWidthNewAnimWidth = (e.target as HTMLElement).offsetWidth;
    const itemPosNewAnimTop = (e.target as HTMLElement).offsetTop;
    const itemPosNewAnimLeft = (e.target as HTMLElement).offsetLeft;
    
    const horiSelector = document.querySelector('.hori-selector') as HTMLElement;
    horiSelector.style.top = `${itemPosNewAnimTop}px`;
    horiSelector.style.left = `${itemPosNewAnimLeft}px`;
    horiSelector.style.height = `${activeWidthNewAnimHeight}px`;
    horiSelector.style.width = `${activeWidthNewAnimWidth}px`;
  }
});
    
        window.addEventListener('resize', () => {
          setTimeout(() => {
            test();
          }, 500);
        });
    
        const navbarToggler = document.querySelector('.navbar-toggler');
        navbarToggler?.addEventListener('click', () => {
          const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement | null;
          if (navbarCollapse !== null) {
            navbarCollapse.style.display = 'block';
            setTimeout(() => {
              test();
            });
          }
        });
    
        setTimeout(() => {
          test();
        });
      }, []);
    
      return (
        <nav className="navbar navbar-expand-custom navbar-mainbg">
          <a className="navbar-brand navbar-logo" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <div className="hori-selector">
                <div className="left"></div>
                <div className="right"></div>
              </div>
              <li className="nav-item">
                <Link className="nav-link" href="/"><i className="fas fa-tachometer-alt"></i>Home</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link"  href="aboutus"><i className="far fa-address-book"></i>About US </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="gallery"><i className="far fa-clone"></i>Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="faq"><i className="far fa-calendar-alt"></i>FAQ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="contactus"><i className="far fa-chart-bar"></i>Contact US</Link>
              </li>
              
            </ul>
          </div>
        </nav>
      );
    };

export default Navug;
