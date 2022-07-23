import React, { useState, useEffect} from 'react'
import Link from "next/link"
import Logo from "../assets/icons/Logo.svg"
import HamburgerOpen from "../assets/icons/HamburgerOpen.svg"
import HamburgerClose from "../assets/icons/HamburgerClose.svg"
import styled, { css } from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;

  width: 100%;
  height: var(--nav-height);

  backdrop-filter: blur(1rem);

  /* Change nav color and add shadow if not at top of page */
  transition: background-color 1s ease-in-out, box-sahdow 1s ease-in-out, transform 0.25s ease-in-out;

  ${props => props.scrolledToTop ? 
  css`background-color: var(--color-background);` 
  : css`background-color: var(--color-background-dark-transparent);
        box-shadow: 0px 0px 4px -1px black;`
  }

  /* Hide nav on scroll down */
  ${props => props.scrollDirection === "up" && css`
    transform: translateY(0);`
  }

  ${props => props.scrollDirection === "down" && css`
    transform: translateY(calc(var(--nav-height) * -1));`
  }

  /* Hamburger Menu Styling */
  .hamburger-menu {
    display: none;
  }

  @media (max-width: 40em) {
    .hamburger-menu {
      display: block;
      position: absolute;
      top: 2.5rem;
      right: 2.5rem;
    }

    ul {
      position: fixed;
      inset: 0 0 0 0;

      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding: 8rem 0rem;
      
      height: 100vh;
      background-color: var(--color-background-dark);
      font-size: 1.5rem;

      transform: translateX(100%);
      transition: transform 0.5s ease-in-out;

      ${props => props.hamburgerMenuVisible && css`
        transform: translateX(0%);`
      }
    }
  }
`

const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;

    li {
      list-style: none;

      a {
        text-decoration: none;
        font-weight: var(--fw-bold);
        color: var(--color-text-primary);
        
        &.outline {
          outline: 1px solid var(--color-text-primary);
          padding: 0.625em 1.25em
        }

        &:hover {
          color: var(--color-accent);
          outline-color: var(--color-accent);
        }
      }
    }
  }
`

export default function NavBar() {
  const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("up")
  const [scrolledToTop, setScrolledToTop] = useState(true)

  // used to hide nav on scroll down
  // https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js
  useEffect(() => {
    const THRESHOLD = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < THRESHOLD) {
        ticking = false;
        return;
      }
      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
    
    const onScroll = () => {
      setHamburgerMenuVisible(false) // close hamburger menu on scroll
      window.scrollY > 100 ? setScrolledToTop(false) : setScrolledToTop(true) 
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [scrollDirection]);

  // open and close hamburger menu
  const hamburgerToggle = () => {
    setHamburgerMenuVisible(prev => !prev)
  }

  // used to close the sidebar when a link is clicked
  const closeHamburgerMenu = (e) => {
    setHamburgerMenuVisible(false)
  }

  return (
    <StyledHeader hamburgerMenuVisible={hamburgerMenuVisible} scrollDirection={scrollDirection} scrolledToTop ={scrolledToTop}>
      <Logo />
      <StyledNav>
        <ul>
          {/* clicking on a link in the hamburger menu usually closes the window because of scrolling but 
          on the rare case that you are on the exact pixel that the anchor scrolls you to, the screen won't scroll.
          because of this, the closeHamburgerMenu forces a close regardless*/}
          <li><Link href="/#about"><a onClick={closeHamburgerMenu}>About Me</a></Link></li>
          <li><Link href="/#projects"><a onClick={closeHamburgerMenu}>Projects</a></Link></li>
          <li><Link href="/#contact"><a onClick={closeHamburgerMenu}>Contact</a></Link></li>
          <li><a href="/resume.pdf" className="outline">Resume</a></li>
        </ul>
      </StyledNav>

      {hamburgerMenuVisible ? 
      <HamburgerClose className='hamburger-menu' onClick={hamburgerToggle}/> 
      : <HamburgerOpen className="hamburger-menu" onClick={hamburgerToggle}/>}

    </StyledHeader>
  )
}
