import React, { Component } from 'react';

import Main from './components/main';
import Popup from './components/popup';


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
				                <a href="https://youtube.com" target="_blank"> <Button> <p className="box"> WATCH </p> </Button> </a>
				                <Link to="#">  <Popup />  </Link>

				                <Link to="/projects"> <Button> <p className="box"> BLOG </p> </Button> </Link>
				                <Link to="/projects"> <Button> <p className="box"> PLAY </p> </Button> </Link>
				                <a href="https://ctrlf.bigcartel.com/" target="_blank"> <Button> <p className="box"> SHOP</p>  </Button> </a>
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


				<Footer size="mini">
				    <FooterSection type="left" logo="Team Yuri">
				        <FooterLinkList>
				            <Link to="/">Help</Link>
				            <Link to="/">Privacy & Terms</Link>
				        </FooterLinkList>
				    </FooterSection>
				</Footer>
			</div> 


			);
	}
}

export default App; 