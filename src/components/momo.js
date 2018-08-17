import React, { Component } from 'react'; 
import { Cell, Grid} from 'react-mdl';
import { SocialIcon } from 'react-social-icons';

class Momo extends Component {
	render() {

		return (
			<div> 
				<div style={{margin:'50px'}}> 
						<Grid style={{paddingTop:'20px', paddingBottom:'20px'}}> 
						    	
								<Cell col={12}>

									
									<img style={{width: '10%', height:'100%' }} src={('https://pre00.deviantart.net/4df6/th/pre/f/2018/189/a/a/3_by_edalie_chan-dcgo1tp.png')} />

								</Cell>
								<Cell col={12}>
									<div className="fancy-font" > 
									    <p style={{fontSize:'35px'}}> Momo </p>	 
									    <p style={{fontSize:'20px', color:'brown'}}> THE WARRIOR </p>	 

									</div>
									
								</Cell>

								
						        <Cell col={12}>

						        	<div className="box" > 
									</div>
										<SocialIcon url="https://twitter.com/CaptainMukomo" network="twitter"/>
										<SocialIcon url="https://www.youtube.com" network="youtube"/>
										<SocialIcon url="https://www.twitch.tv/mukomo" network="twitch"/> 

						        </Cell>

						        <Cell col={7}> </Cell> 
						        <Cell col={1}> </Cell>
						    </Grid>
					</div>

			</div>
				); 

	}
}

export default Momo; 