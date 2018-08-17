import React from 'react';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Yuri from './yuri';
import Members from './members';
import Clip from './clip';
import Momo from './momo';
import Sugar from './sugar';
import Jayden from './jayden';


import { Switch, Route } from 'react-router-dom';

const Main = () => (
	<Switch> 
		<Route exact path="/" component={LandingPage} /> 
		<Route path='/aboutme' component={AboutMe} />
		<Route path='/projects' component={Projects} />
		<Route path='/yuri' component={Yuri} />
		<Route path='/members' component={Members} />
		<Route path='/clip' component={Clip} />
		<Route path='/momo' component={Momo} />
		<Route path='/sugar' component={Sugar} />
		<Route path='/jayden' component={Jayden} />

	</Switch>
)

export default Main; 