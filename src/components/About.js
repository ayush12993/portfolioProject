import React from 'react'
import styled from 'styled-components'

const StyledAboutSection = styled.section`
  width: min(80%, 80ch);
  margin-inline: auto;
  margin-bottom: 20vh;
  padding: 5rem 0;

  h2 {
    position: relative;

    color: var(--color-text-primary);
    background-color: var(--color-background);

    font-size: clamp(2rem, 4vw, 4rem);
    text-align: center;

    margin-bottom: 1rem;

    /* Add the green lines */
    &::before, &::after {
      content: "";
      position: absolute;
      display: block;
      top: 50%;

      width: calc(30% - clamp(2rem, 4vw, 4rem));
      height: 1px;
      background-color: var(--color-accent);
      
      /* Manual adjustment of green lines */
      @media (min-width: 25em) {
        width: calc(35% - clamp(2rem, 4vw, 4rem));
      }

      @media (min-width: 40em) {
        width: calc(38% - clamp(2rem, 4vw, 4rem));
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
`

export default function About() {
  return (
    <StyledAboutSection id="about">
      <h2>About Me</h2>
      <p>Hi! My name is Ayush and I am a passout computer science student from S.D.I.E.T. - Faridabad. </p><br/><br/>
      <p>I have worked in Align  Together Solutions as System Analyst for 6 months. </p><br/><br/>
      <p>I have always been fascinated by computers and how they make it possible to learn about almost anything in the world within a few clicks. Watching an endless amount of YouTube videos and scrolling through Wikipedia articles on random topics as a kid cemented my passion for technology, and I knew that no matter what, I had to learn how it all worked under the hood.</p>
      <p>I began my programming journey by learning Java through GeeksForGeeks. Now, I am teaching myself front-end mobile development.<br/><br/> I have learn,t backend using Udemy Platform. I have knowledge of Spring Boot,MySQL,DveOps(AWS).<br/></p>
      <p>Check out some of my projects below!</p>
    </StyledAboutSection>
  )
}
