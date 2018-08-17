import React, { Component } from 'react'; 
import { Cell, Grid} from 'react-mdl';
import { SocialIcon } from 'react-social-icons';

class Clip extends Component {
	render() {

		return (
			<div> 
				<div style={{margin:'50px'}}> 
						<Grid style={{paddingTop:'20px', paddingBottom:'20px'}}> 
						    	
								<Cell col={12}>

									
									<img style={{width: '10%', height:'100%' }} src={('https://pre00.deviantart.net/2331/th/pre/f/2018/189/a/2/4_by_edalie_chan-dcgo1t6.png')} />

								</Cell>
								<Cell col={12}>
									<div className="fancy-font" > 
									    <p style={{fontSize:'35px'}}> Clip </p>	 
									    <p style={{fontSize:'20px', color:'blue'}}> THE VILLAIN </p>	 

									</div>
									
								</Cell>

								
						        <Cell col={12}>

						        	<div className="box" > 
									</div>
										<SocialIcon url="https://www.youtube.com/channel/UCR7FyFJRDULUTpYFAWsxqVw?view_as=subscriber" network="youtube"/>
										<SocialIcon url="https://www.instagram.com/_clipclopper/" network="instagram"/>
										<SocialIcon url="https://www.twitch.tv/clipclopper" network="twitch"/> 

						        </Cell>

						        <Cell col={7}> </Cell> 
						        <Cell col={1}> </Cell>
						    </Grid>
					</div>

			</div>
				); 

	}
}

export default Clip; 