import React from 'react';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';
import AboutMeContent from './AboutMeContent';

const StyledDiv = styled.div`
  display: inline-flex;
  width: 80%;
  text-align: center;
  left: 15%;
  top: 25%;
  position: absolute;
`;

const AboutMe = () => {
  return (
    <StyledDiv>
      <ProfileImage />
      <AboutMeContent />
    </StyledDiv>
  )
};

export default AboutMe;