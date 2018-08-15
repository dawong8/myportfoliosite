import React from 'react';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Yuri from './yuri';

import { Switch, Route } from 'react-router-dom';

const Main = () => (
	<Switch> 
		<Route exact path="/" component={LandingPage} /> 
		<Route path='/aboutme' component={AboutMe} />
		<Route path='/projects' component={Projects} />
		<Route path='/Yuri' component={Yuri} />

	</Switch>
)

export default Main; 