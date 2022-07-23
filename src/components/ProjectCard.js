import React from 'react'
import GitHubIcon from "../assets/icons/GitHub.svg"
import ExternalLinkIcon from "../assets/icons/ExternalLink.svg"
import styled from 'styled-components'

const StyledProjectCard = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 25rem;
  border-radius: 1.5rem;
  padding: 2rem;
  background-color: var(--color-background-light);
  box-shadow: 0px 0px 8px -4px black;

  a {
    text-decoration: none;
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: var(--color-text-primary);

    &:hover {
      color: var(--color-accent)
    }
  }

  .description {
    color: var(--color-text-secondary);
    margin-bottom: auto;
    font-size: 1.1rem;
  }

  /* A very hacky way to change the color
  https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element
  */
  svg:hover {
      filter: brightness(0) saturate(100%) invert(85%) sepia(28%) saturate(774%) hue-rotate(101deg) brightness(93%) contrast(100%);
  }
`

const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  color: var(--color-text-primary);
  margin-bottom: 1rem;
  font-size: 0.8rem;
`

const StyledLinks = styled.div`
  display: flex;
  gap: 1rem;
`

export default function ProjectCard(props) {
  return (
    <StyledProjectCard>
      <a href={props.githubLink} target="_blank" rel="noreferrer"><h2>{props.name}</h2></a>
      <div className="description">
        <p>{props.description}</p>
      </div>

      <StyledTags>
        {props.tags.map((tag, index) => <p key={index}>{tag}</p>)}
      </StyledTags>

      <StyledLinks>
        <a href={props.githubLink} target="_blank" rel="noreferrer"> <GitHubIcon /> </a>
        {props.externalLink && <a href={props.externalLink} target="_blank" rel="noreferrer"> <ExternalLinkIcon /> </a>}
      </StyledLinks>

    </StyledProjectCard>
  )
}
