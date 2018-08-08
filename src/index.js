import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class Main extends React.Component {
	render () {
		return (
			<div>
				{/* Uses a transparent header that draws on top of the layout's background */}
				<div style={{height: '300px', position: 'relative'}}>
				    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
				        <Header transparent title="Title" style={{color: 'white'}}>
				            <Navigation>
				                <a href="#">Link</a>
				                <a href="#">Link</a>
				                <a href="#">Link</a>
				                <a href="#">Link</a>
				            </Navigation>
				        </Header>
				        <Drawer title="Title">
				            <Navigation>
				                <a href="#">Link</a>
				                <a href="#">Link</a>
				                <a href="#">Link</a>
				                <a href="#">Link</a>
				            </Navigation>
				        </Drawer>
				        <Content />
				    </Layout>
				</div>

			</div> 


			);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
