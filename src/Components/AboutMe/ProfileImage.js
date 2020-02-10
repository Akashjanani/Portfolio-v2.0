import React from 'react';
import styled from 'styled-components';
import Profile from '../../images/Profile.jpeg';

const ProfileImageContainer = styled.img`
  border-radius: 50px;
  width: 300px;
`;

const ProfileImage = () => {
  return (
      <ProfileImageContainer src={Profile} alt="" />
  );
};

export default ProfileImage;
