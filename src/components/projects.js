import React, { Component } from 'react'; 

import { Card, CardText, CardActions, CardMenu, Grid, Cell, CardTitle, Button, IconButton} from 'react-mdl';

class Projects extends Component {
	render() {

		return (
				<div> 
					
					<div style={{padding: '50px'}}> 

						<Grid> 
							<Cell col={6}> 
								<img style={{width: '15%' }} src={require('../images/yuri.png')} /> 
								<p> </p>
								<div className="fancy-font"  > 
									    <p style={{fontSize:'20px', color:'purple'}}> YURI </p>	 

									</div>
								<p className="box"> I am Yuri. I started streaming a few years ago and I came to realize that the community was a lot more toxic than it had to be. I always thought a little trolling is funny, friendly banters spice up conversations and a little sarcasm could be appreciated. That wasn’t what I experienced as a streamer. I’ve had people attack me for the way I look, the way I sound and people who legitimately would not stop harassing me. I came to realize that there is a part of this gaming universe I escape to that’s simply unsafe and unkind. That’s when I decided, I’m going to start my own community. One where people like myself could escape to and find solace without being afraid to show everyone who they really are. I brought together a group of very talented people to start a movement.				</p>

							</Cell>

							<Cell col={6}> 
								<img style={{width: '15%' }} src={require('../images/clip.png')} /> 
								<p> </p>
								<div className="fancy-font"  > 
									    <p style={{fontSize:'20px', color:'blue'}}> CLIP </p>	 

									</div>
								<p className="box"> I go by the name Clip. I am an aspiring streamer and computer programmer. I like doing frontend development. This simple website was created all by myself. As a gay boy, I am extrememly supportive of all of Team Yuri values. I believe by creating a positive environment will provide an enriching atmosphere for the gaming community. Games that I enjoy include League of Legends, Minecraft, The Sims, WWE 2k18, and VR Chat. My life goals is to not only become a professional frontend developer but also become a role model to inspire others that are in similar situations. I grew up from a traditional household where it is looked down upon for my lifestyle; thus, this taught me many life lessons and made up the person who I am today. Stay tuned for more Team Yuri features.  </p>
								
							</Cell>

							<Cell col={6}> 
								<img style={{width: '15%' }} src={require('../images/jayden.png')} /> 
								<p> </p>
								<div className="fancy-font"  > 
									    <p style={{fontSize:'20px', color:'gray'}}> JAYDEN </p>	 

									</div>
								<p className="box"> Currently no bio. :( </p> 
							</Cell>

							<Cell col={6}> 
								<img style={{width: '15%' }} src={require('../images/sugar.png')} /> 
								<p> </p>
								<div className="fancy-font"  > 
									    <p style={{fontSize:'20px', color:'orange'}}> SUGAR </p>	 

									</div>
								<p className="box"> Currently no bio. :( </p> 
							</Cell>
							<Cell col={6}> 
								<img style={{width: '15%' }} src={require('../images/momo.png')} /> 
								<p> </p>
								<div className="fancy-font"  > 
									    <p style={{fontSize:'20px', color:'red'}}> MOMO </p>	 

									</div>
								<p className="box"> Currently no bio. :( </p> 
							</Cell>
							<Cell col={6}> 
								<img style={{width: '15%' }} src={require('../images/edi.png')} /> 
								<p> </p>
								<div className="fancy-font"  > 
									    <p style={{fontSize:'20px', color:'brown'}}> EDI </p>	 

									</div>
								<p className="box"> Currently no bio. :( </p> 
							</Cell>
							<Cell col={6}> 
								<img style={{width: '15%' }} src={require('../images/ann.png')} /> 
								<p> </p>
								<div className="fancy-font"  > 
									    <p style={{fontSize:'20px', color:'green'}}> TRAGEDYANN </p>	 

									</div>
								<p className="box"> Currently no bio. :( </p> 
							</Cell>

						</Grid>
					</div>

				</div>


			); 

	}
}

export default Projects; 