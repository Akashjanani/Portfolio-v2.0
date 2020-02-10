import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, makeStyles } from '@material-ui/core';
import { isMobile } from 'react-device-detect';

import Burger from './Components/Burger';
import VerticalNavBar from './Components/VerticalNavBar';
import AboutMe from './Components/AboutMe/AboutMe';
import Work from './Components/Work/Work';

const StyledGrid = styled(Grid)`
  height: 100vh;
`;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
  const [open, setOpen] = useState(!isMobile);
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <StyledGrid container>
          <Grid item xs={0} sm={2}>
            <Burger open={open} setOpen={setOpen} />
            <VerticalNavBar open={open} setOpen={setOpen} />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Switch>
              <Route exact path="/">
                <AboutMe />
              </Route>
              <Route path="/work">
                <Work />
              </Route>
              <Route path="/resume" />
              <Route path="/contact" />
            </Switch>
          </Grid>
        </StyledGrid>
      </div>
    </Router>
  );
};

export default App;
