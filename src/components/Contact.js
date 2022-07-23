import React from 'react'
import styled from 'styled-components'
import InstagramIcon  from "../assets/icons/Instagram.svg"
import GitHubIcon from "../assets/icons/GitHub.svg"
import LinkedInIcon from "../assets/icons/LinkedIn.svg"
import { contactInformation } from "../config"
import { FaLinkedinIn } from 'react-icons/fa';
const StyledContactSection = styled.section`
  width: min(80%, 80ch);
  margin-inline: auto;
  margin-bottom: 20vh;
  padding: 5rem 0;

  h2 {
    position: relative;
    background-color: var(--color-background);
    color: var(--color-text-primary);
    font-size: clamp(2rem, 4vw, 4rem);
    text-align: center;
    margin-bottom: 1rem;

    /* Add the green lines */
    &::before, &::after {
      content: "";
      position: absolute;
      display: block;
      top: 50%;

      width: calc(25% - clamp(2rem, 4vw, 4rem));
      height: 1px;
      background-color: var(--color-accent);

      @media (min-width: 25em) {
        width: calc(33% - clamp(2rem, 4vw, 4rem));
      }

      @media (min-width: 40em) {
        width: calc(33% - clamp(2rem, 4vw, 4rem));
      }
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  }

  p {
    color: var(--color-text-secondary);
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    line-height: 175%;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--color-text-primary);

    &:hover {
      color: var(--color-accent);
    }
  }
`

const StyledLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  // hacky way to make svg's green on hover
  // see ProjectCard.js for more info
  svg:hover {
    filter: brightness(0) saturate(100%) invert(85%) sepia(28%) saturate(774%) hue-rotate(101deg) brightness(93%) contrast(100%);
  }
`

export default function Contact() {
  return (
    <StyledContactSection id="contact">
      <h2>Contact Me</h2>
      <p>If you want to get in touch, send me an email at <a href={`mailto:${contactInformation.email}`} target="_blank" rel="noreferrer"></a>!</p>
      <p>Alternatively, check out my links below:</p>
      <StyledLinks>
        {contactInformation.github && <a href={contactInformation.github} target="_blank" rel="noreferrer"> <GitHubIcon /> </a>}
        {contactInformation.linkedIn && <a href={contactInformation.linkedIn} target="_blank" rel="noreferrer"> <LinkedInIcon /> </a>}
        {contactInformation.instagram && <a href={contactInformation.instagram} target="_blank" rel="noreferrer"> <InstagramIcon /> </a>}
      </StyledLinks>
    </StyledContactSection>
  )
}
