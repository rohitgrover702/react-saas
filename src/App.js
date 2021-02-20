import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import Role from './component/Role/Role';
import Feed from './component/Feed/Feed';
import CommunityProjects from './component/CommunityProjects/CommunityProjects';
import EarnStarModal from './component/Modal/EarnStarModal/EarnStarModal';
import Home from './container/Home/Home';
import FundedProject from './container/FundedProject/FundedProject';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <Router>
        <Box>
          <Switch>
            <Route path="/" exact component={Role} />
            <Route path="/feed" component={Feed} />
            <Route path="/earn-star" component={EarnStarModal} />
            <Route path="/community-projects" component={CommunityProjects} />
            <Route path="/home" component={Home} />
            <Route path="/funded-project" component={FundedProject} />
          </Switch>
        </Box>
      </Router>
    );
  }
}
