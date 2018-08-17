import React, { Component } from 'react'; 
import { Cell, Grid} from 'react-mdl';
import { SocialIcon } from 'react-social-icons';

class Sugar extends Component {
	render() {

		return (
			<div> 
				<div style={{margin:'50px'}}> 
						<Grid style={{paddingTop:'20px', paddingBottom:'20px'}}> 
						    	
								<Cell col={12}>

									
									<img style={{width: '10%', height:'100%' }} src={('https://pre00.deviantart.net/b6a2/th/pre/f/2018/189/d/1/2_by_edalie_chan-dcgo1uh.png')} />

								</Cell>
								<Cell col={12}>
									<div className="fancy-font" > 
									    <p style={{fontSize:'35px'}}> Sugar </p>	 
									    <p style={{fontSize:'20px', color:'orange'}}> THE WITCH </p>	 

									</div>
									
								</Cell>

								
						        <Cell col={12}>

						        	<div className="box" > 
									</div>
										<SocialIcon url="https://www.facebook.com/SugarcoatedWitchling/" network="facebook"/>
										<SocialIcon url="https://www.instagram.com/sugarcoatedwitchling/" network="instagram"/>
										<SocialIcon url="https://www.twitch.tv/sugarcoatedwitchling" network="twitch"/> 

						        </Cell>

						        <Cell col={7}> </Cell> 
						        <Cell col={1}> </Cell>
						    </Grid>
					</div>

			</div>
				); 

	}
}

export default Sugar;

