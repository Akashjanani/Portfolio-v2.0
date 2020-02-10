import React from 'react';
import styled from 'styled-components';
import { Box, Container, Grid } from '@material-ui/core';
import ProfileImage from './ProfileImage';
import AboutMeContent from './AboutMeContent';

const CenteredTextGrid = styled(Grid)`
  text-align: center;
`;

const AboutMe = () => {
  return (
    <Container>
      <Box display="flex" height="100vh" alignItems="center">
        <Grid container xs="6" justify="center">
          <ProfileImage />
        </Grid>
        <CenteredTextGrid container xs="6" justify="center">
          <AboutMeContent />
        </CenteredTextGrid>
      </Box>
    </Container>
  );
};

export default AboutMe;
