import React, { Component } from 'react'; 
import { Cell, Grid} from 'react-mdl';
import { SocialIcon } from 'react-social-icons';

class Jayden extends Component {
	render() {

		return (
			<div> 
				<div style={{margin:'50px'}}> 
						<Grid style={{paddingTop:'20px', paddingBottom:'20px'}}> 
						    	
								<Cell col={12}>

									
									<img style={{width: '10%', height:'100%' }} src={('https://pre00.deviantart.net/72e4/th/pre/f/2018/227/2/1/6_by_edalie_chan-dck7ivs.png')} />

								</Cell>
								<Cell col={12}>
									<div className="fancy-font" > 
									    <p style={{fontSize:'35px'}}> Jayden </p>	 
									    <p style={{fontSize:'20px', color:'gray'}}> THE MUSE </p>	 

									</div>
									
								</Cell>

								
						        <Cell col={12}>

						        	<div className="box" > 
									</div>
										<SocialIcon url="https://www.instagram.com/black_th1rt3en/" network="instagram"/>
										<SocialIcon url="https://www.youtube.com/user/dnfwod" network="youtube"/>
										<SocialIcon url="https://www.twitch.tv/blackth1rt3en" network="twitch"/> 

						        </Cell>

						        <Cell col={7}> </Cell> 
						        <Cell col={1}> </Cell>
						    </Grid>
					</div>

			</div>
				); 

	}
}

export default Jayden;

