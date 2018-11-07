import React, { Component } from 'react';

import Main from './components/main';


import { Layout, Header, Navigation, Drawer, Content, Button, Footer, FooterLinkList, FooterSection } from 'react-mdl';
import { Link } from 'react-router-dom';
import './app.css';



class App extends React.Component {
	constructor(props) {
		super(props); 
		this.state={
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render () {
		return (
			<div>
				<div class="w3-top w3-hide-small">
  					<div class="w3-bar w3-xlarge w3-black w3-opacity w3-hover-opacity-off" id="myNavbar">
  						<Link to="/"> <img className="w3-bar-item w3-button" style={{width: '5%' }} src={require('./images/logo.png')}/>  </Link>

		            	<Link to="/aboutme"> <p className="box w3-bar-item w3-button"> About </p> </Link>

		                <a href="https://www.youtube.com/channel/UCSXmot2ws4huu3ZzTZAP4VA?" target="_blank"> <p className="box w3-bar-item w3-button"> Watch </p>  </a>
		                <Link to="/projects"> <p className="box w3-bar-item w3-button"> Events </p>  </Link>
		                <a href="https://discord.gg/yfexC3p" target="_blank">  <p className="box w3-bar-item w3-button"> Contact </p>  </a>

		            </div>
		        </div>

				<Main />


				<Footer size="mini" style={{background:'black'}}>
				    <FooterSection type="left" logo="Team Yuri ©">
				        <FooterLinkList>
				            <a href="https://www.scribd.com/document/390270528/Privacy" target="_blank">Privacy & Terms</a>

				        </FooterLinkList>
				    </FooterSection>
				</Footer>
			</div> 


			);
	}
}

export default App; 