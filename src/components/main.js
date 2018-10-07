import React from 'react';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Members from './members';



import { Switch, Route } from 'react-router-dom';

const Main = () => (
	<Switch> 
		<Route exact path="/" component={LandingPage} /> 
		<Route path='/aboutme' component={AboutMe} />
		<Route path='/projects' component={Projects} />
		<Route path='/members' component={Members} />


	</Switch>
)

export default Main; 