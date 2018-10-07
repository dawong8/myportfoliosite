import React, { Component } from 'react';

import Main from './components/main';


import { Layout, Header, Navigation, Drawer, Content, Button, Footer, FooterLinkList, FooterSection } from 'react-mdl';
import { Link } from 'react-router-dom';
import './app.css';


class App extends React.Component {
	render () {
		return (
			<div>
				{/* Uses Link transparent header that draws on top of the layout's background */}
				<div style={{height: '50px', position: 'relative'}}>
					
					{/*<Link to="/"> <img style={{width:'4%', padding:'15px', float:'left'}}src={require('./images/yuri.png')}/> </Link>*/}


				    <Layout >
				        <Header transparent title=" " style={{color: '#000'}}>

				            <Navigation>
				            	<Link to="/"> <Button> <p className="box"> HOME </p> </Button> </Link> 
				            	<Link to="/aboutme"> <Button> <p className="box"> About Us</p> </Button> </Link>

				                <a href="https://www.youtube.com/channel/UCSXmot2ws4huu3ZzTZAP4VA?" target="_blank"> <Button> <p className="box"> WATCH </p> </Button> </a>
				                <Link to="/projects"> <Button> <p className="box"> Members </p> </Button> </Link>

				                <Button> <p className="box" style={{color:'black'}}> Stay Tuned </p> </Button>
				            </Navigation>
				        </Header>
				        <Drawer title="">
				                <Link to="/Members" > <Button> <p className="box" style={{paddingTop:'15px'}}> Click Me! </p> </Button> </Link> 

				        </Drawer>

				        <Content />
				    </Layout>
				</div>
				<div style={{background:'black', width:'100%', height:'10px'}}> </div>
				<Main />


				<Footer size="mini" style={{background:'white'}}>
				    <FooterSection type="left" logo="Team Yuri">
				        <FooterLinkList>
				        	Team Yuri ©
				            <a href="https://www.scribd.com/document/390270528/Privacy" target="_blank">Privacy & Terms</a>

				        </FooterLinkList>
				    </FooterSection>
				</Footer>
			</div> 


			);
	}
}

export default App; 