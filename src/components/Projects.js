import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from "../config"
import styled from 'styled-components'

const StyledProjectsSection = styled.section`
  width: 80%;
  margin-inline: auto;
  padding: 5rem 0;

  .section-header {
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

      width: calc(35% - clamp(2rem, 4vw, 4rem));
      height: 1px;
      background-color: var(--color-accent);

      @media (min-width: 25em) {
        width: calc(38% - clamp(2rem, 4vw, 4rem));
      }

      @media (min-width: 40em) {
        width: calc(43% - clamp(2rem, 4vw, 4rem));
      }
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  }
`

const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 43em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 75em) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default function Projects() {
  const generateProjectCards = () => {
    return projects.map((project, index) => <ProjectCard 
      name={project.name} 
      description={project.description} 
      tags={project.tags} 
      githubLink={project.githubLink} 
      externalLink={project.externalLink}
      key={index} />
    )
  }

  return (
    <StyledProjectsSection id="projects">
      <h2 className="section-header">Projects</h2>
      <GridContainer>
        {generateProjectCards()}
      </GridContainer>
    </StyledProjectsSection>
  )
}
