import React from 'react'
import Link from "next/link"
import styled from 'styled-components'
import { contactInformation } from "../config"
import { FaLinkedinIn } from 'react-icons/fa';
import {AiFillMail} from 'react-icons/ai';

const StyledHeroSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  min-height: 100vh;
  max-width: 80%;

  margin-inline: auto;
  
  h1 {
    color: var(--color-accent);
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: var(--fw-regular);
  }

  h2 {
    color: var(--color-text-primary);
    font-size: clamp(2.9rem, 10vw, 5rem);
  }


  p {
    color: var(--color-text-secondary);

    font-size: clamp(1rem, 2vw, 2rem);
    line-height: 150%;
    margin-bottom: 2rem;

    a {
      color: var(--color-accent);
      text-decoration: none;

      &:hover {
        color: var(--color-text-primary);
      }
    }
  }

  span {
      a {
        color: var(--color-accent);
        font-size: clamp(1rem, 2vw, 2rem);
        text-decoration: none;

        outline: 1px solid var(--color-accent);
        padding: 0.625em 1.25em;
        
        &:hover {
          color: var(--color-text-primary);
          outline-color: var(--color-text-primary);
        }
      }
  }
`
function openInNewTab(url) {
      window.open(url, '_blank').focus();
     }
export default function Hero() {
  
  return (
    
    <StyledHeroSection>
      <h1>Hello! My name is</h1>
      <h2>Ayush Jain.</h2>
      <p>Currently, I am a looking for opportunities. Connect me <a  href={contactInformation.linkedIn}><FaLinkedinIn /></a>.</p>
      <p>Or Mail me at <a href={`mailto:${contactInformation.email}`}><AiFillMail /></a>.</p>
      <span><Link href="/#contact"><a>Come say hi!</a></Link></span>
      
    </StyledHeroSection>
  )
}
