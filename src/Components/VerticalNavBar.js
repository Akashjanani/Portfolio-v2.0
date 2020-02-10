import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active';

const StyledMenu = styled.nav`
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 0 2rem;
  text-align: left;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    color: #0d0c1d;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5rem;
    padding: 3rem 0;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition-duration: 0.3s;
    transition-property: color, font-size;
    transition-timing-function: linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: gray;
    }

    &.${activeClassName} {
      border-bottom: 1px solid gray;
    }
  }
`;

const VerticalNavBar = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavLink exact to="/">
        About
      </NavLink>
      <NavLink to="/work" activeClassName={activeClassName}>
        Work
      </NavLink>
      <NavLink to="/resume" activeClassName={activeClassName}>
        Resume
      </NavLink>
      <NavLink to="/contact" activeClassName={activeClassName}>
        Contact
      </NavLink>
    </StyledMenu>
  );
};

VerticalNavBar.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default VerticalNavBar;
