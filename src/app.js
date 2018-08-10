import React, { Component } from 'react';

import Main from './components/main';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import './app.css';


class App extends React.Component {
	render () {
		return (
			<div>
				{/* Uses Link transparent header that draws on top of the layout's background */}
				<div style={{height: '300px', position: 'relative'}}>
				    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
				        <Header transparent title="" style={{color: 'white'}}>
				            <Navigation>
				            	<Link to="/">Home</Link> 
				                <Link to="/resume">Resume</Link>
				                <Link to="/aboutme">About Me</Link>
				                <Link to="/projects">Projects</Link>
				            </Navigation>
				        </Header>
				        <Drawer title="Danny Wong">
				            <Navigation>
				            	<Link to="/">Home</Link> 
				                <Link to="/resume">Resume</Link>
				                <Link to="/aboutme">About Me</Link>
				                <Link to="/projects">Projects</Link>
				            </Navigation>
				        </Drawer>


				        <Content />
				    </Layout>
				</div>
				<Main />


			</div> 


			);
	}
}

export default App; 