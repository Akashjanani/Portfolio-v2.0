import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import AboutMe from './Components/AboutMe/AboutMe';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  height: 100vh;
  text-align: center;
  padding: 0 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 16px;
    text-transform: uppercase;
    padding: 3rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: gray;
    }
  }
`

const App = () => {
  return (
    <Router>
      <div>
        <StyledMenu>
          <Link to="/">About Me</Link>
          <Link to="/">Work</Link>
          <Link to="/">Resume</Link>
          <Link to="/">Contact</Link>
        </StyledMenu>

        <Switch>
          <Route path="/">
            <AboutMe/>
          </Route>
          <Route path="/work" />
          <Route path="/resume" />
          <Route path="/contact" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
