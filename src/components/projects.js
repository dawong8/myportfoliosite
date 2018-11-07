import React, { Component } from 'react'; 

import { Card, CardText, CardActions, CardMenu, Grid, Cell, CardTitle, Button, IconButton} from 'react-mdl';

class Projects extends Component {
	render() {

		return (
				<div>
					<div> 
						<img src={require('../images/cover.png')} style={{width:'100%'}}/>
							{/*<Slideshow />*/}

					</div>
					<div classNameName="w3-center box" style={{paddingTop:'60px', background:'black'}}> 
						 <div className="w3-row-padding w3-padding-64 w3-center">
						 	<h1 className="fancy-font" style={{color:"white"}}> Top Players </h1>
						    <div className="w3-third box">

						      <img src={require('../images/momo2.png')} style={{width:'50%'}}/>
						      <p className="fancy-font" style={{fontSize:'20px'}}>Momo</p>
						      <p>  Highest Placement: 13th  </p>
						    </div>
						    <div className="w3-third box">

						      <img src={require('../images/ofriezy.png')} style={{width:'75%'}}/>
						      <p className="fancy-font" style={{fontSize:'20px'}}>oFriezzy</p>
						      <p> UHC: Witches' Night Out - Winner </p>
						    </div>
						    <div className="w3-third box">

						      <img src={require('../images/aigaming.png')} style={{width:'40%'}}/>
						      <p> </p>
						      <p className="fancy-font" style={{fontSize:'20px'}}>AIgaming</p>
						      <p> Highest Placement: 7th </p>
						    </div>
						    
						</div>
	    			</div>

			        <div className="w3-container w3-padding-64 w3-blue-grey w3-grayscale-min w3-xlarge fancy-font">
  						<div className="w3-content" style={{paddingTop:'50px'}}>

  							<iframe className="w3-half" width="560" height="315" src="https://www.youtube.com/embed/vqSevu2DCK0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  							<p className="w3-half" style={{padding:'100px', fontSize:"18px"}}> Want to particpate in our next event? Join our <a href="https://discord.gg/yfexC3p" target="_blank" style={{color:"black"}}> DISCORD </a> </p>
  						</div>
  					</div>
    			</div>


			); 

	}
}

export default Projects; 