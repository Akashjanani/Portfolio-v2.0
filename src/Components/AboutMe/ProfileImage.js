import React from 'react';
import styled from 'styled-components';
import Profile from '../../images/Profile.jpeg';

const ProfileImageContainer = styled.img`
  width: 300px;
  border-radius: 50px;
`;

const ProfileImage = () => {
  return (
    <ProfileImageContainer src={Profile} alt=""/>
  )
}

export default ProfileImage;