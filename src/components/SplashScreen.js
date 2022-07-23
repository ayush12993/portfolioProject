import React, { useState, useEffect }from 'react'
import styled, { css } from 'styled-components'

const StyledSplashScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100%;
  height: 100vh;

  background-color: var(--color-background-darkest);

  transition: top 1s;
  ${props => props.transitionComplete && css`
  top: -100vh;`
  }
`

const StyledH1 = styled.h1`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%); /* center text */
  color: var(--color-accent);
`

const StyledSpan = styled.span`
  position: relative;
  bottom: -20px;
  opacity: 0;

  transition: ease-in-out 0.5s;

  ${props => props.fade === "fadeIn" && css`
  bottom: 0px;
  opacity: 1;`
  }

  ${props => props.fade === "fadeOut" && css`
  bottom: 150px;
  opacity: 0;`
  }
`

export default function SplashScreen() {
  const [firstNameFade, setFirstNameFade] = useState("")
  const [lastNameFade, setLastNameFade] = useState("")

  const [transitionComplete, setTransitionComplete] = useState(false)

  useEffect(() => {
    animateSplashScreen()
  }, [])

  const animateSplashScreen = () => {
    // Timings and explanation: https://www.youtube.com/watch?v=2ak37WrbSDg
    setTimeout(() => {
      setFirstNameFade("fadeIn")
    }, 400)
  
    setTimeout(() => {
      setLastNameFade("fadeIn")
    }, 800)
  
    setTimeout(() => {
        
      setTimeout(() => {
        setFirstNameFade("fadeOut")
      }, 50)
  
      setTimeout(() => {
        setLastNameFade("fadeOut")
      }, 100)
  
    }, 2000)
  
    setTimeout(() => {
      setTransitionComplete(true)
    }, 2400)
  }

  return (
      <StyledSplashScreen transitionComplete={transitionComplete}>
          <StyledH1>
              <StyledSpan fade={firstNameFade}>Ayush</StyledSpan> <StyledSpan fade={lastNameFade}>Jain</StyledSpan>
          </StyledH1>
      </StyledSplashScreen>
  )
}
