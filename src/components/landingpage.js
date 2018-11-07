import React, { Component } from 'react'; 
//import { Slide } from 'react-slideshow-image';
import { Tabs, Tab} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


/*
const images = [
  require('../images/winner.png'),

];



const Slideshow = () => {
    return (
        <Slide 
          images={images}
          duration={5000}
          transitionDuration={1000} 
          indicators={false}
          arrows={false}

        />
    )
}*/

class LandingPage extends Component {
	render() {

		return (
				<div> 
					{/* Website Cover: Slideshow */}

				{/* first(cover) section */}
					<div> 
						<img src={require('../images/winner.png')} style={{width:'100%'}}/>
							{/*<Slideshow />*/}

					</div>
					<div className="w3-container w3-black w3-padding-64 w3-xxlarge" id="menu">
					  <div className="w3-content fancy-font">
					  
					    <h1 className="w3-center w3-xxlarge box" style={{marginBottom:'64px'}}>Meet Team Yuri</h1>
						<Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="w3-center" >
						  <Tab eventKey={1} title="YURI" style={{color:'pink'}}>
						  	    <p> </p>

						        <img src={require('../images/yuri.png')} style={{width:'15%', align:'auto'}}/>
						        <p><b>THE QUEEN</b></p>

						        <p className="w3-text-white" style={{textAlign:'left'}}>I am Yuri. I started streaming a few years ago and I came to realize that the community was a lot more toxic than it had to be. I always thought a little trolling is funny, friendly banters spice up conversations and a little sarcasm could be appreciated. That wasn’t what I experienced as a streamer. I’ve had people attack me for the way I look, the way I sound and people who legitimately would not stop harassing me. I came to realize that there is a part of this gaming universe I escape to that’s simply unsafe and unkind. That’s when I decided, I’m going to start my own community. One where people like myself could escape to and find solace without being afraid to show everyone who they really are. I brought together a group of very talented people to start a movement.</p>
						  </Tab>
						  <Tab eventKey={2} title="CLIP" style={{color:'blue'}}>
						  	    <p> </p>

						        <img src={require('../images/clip.png')} style={{width:'15%', align:'auto'}}/>
						        <p> </p>

						        <p><b>THE VILLAIN</b></p>

						        <p className="w3-text-white" style={{textAlign:'left'}}>I go by the name Clip. I am an aspiring streamer and computer programmer. I like doing frontend development. This simple website was created all by myself. As a gay boy, I am extrememly supportive of all of Team Yuri values. I believe by creating a positive environment will provide an enriching atmosphere for the gaming community. Games that I enjoy include League of Legends, Minecraft, The Sims, WWE 2k18, and VR Chat. My life goals is to not only become a professional frontend developer but also become a role model to inspire others that are in similar situations. I grew up from a traditional household where it is looked down upon for my lifestyle; thus, this taught me many life lessons and made up the person who I am today. Stay tuned for more Team Yuri features.</p>
						  </Tab>
						  <Tab eventKey={3} title="MOMO" style={{color:'red'}}>
								<p> </p>

						        <img src={require('../images/momo.png')} style={{width:'15%', align:'auto'}}/>
						        <p> </p>

						        <p><b>THE SCIENTIST</b></p>

						        <p className="w3-text-white" style={{textAlign:'left'}}> Just a casual in all things. Play games with this dude called Trinimmortal sometimes.</p>
						  </Tab>
						  <Tab eventKey={4} title="SUGAR" style={{color:'orange'}}>
								<p> </p>

						        <img src={require('../images/sugar.png')} style={{width:'15%', align:'auto'}}/>
						        <p> </p>

						        <p><b>THE WITCH</b></p>

						        <p className="w3-text-white" style={{textAlign:'left'}}> Just a casual in all things. Play games with this dude called Trinimmortal sometimes.</p>
						  </Tab>
						  <Tab eventKey={5} title="JAYDEN" style={{color:'white'}}>
								<p> </p>

						        <img src={require('../images/jayden.png')} style={{width:'15%', align:'auto'}}/>
						        <p> </p>

						        <p><b>THE MUSE</b></p>

						        <p className="w3-text-white" style={{textAlign:'left'}}> Just a casual in all things. Play games with this dude called Trinimmortal sometimes.</p>
						  </Tab>
						  <Tab eventKey={6} title="EDI" style={{color:'yellow'}}>
								<p> </p>

						        <img src={require('../images/edi.png')} style={{width:'15%', align:'auto'}}/>
						        <p> </p>

						        <p><b>THE VIRTUOSO</b></p>

						        <p className="w3-text-white" style={{textAlign:'left'}}> Artist | ENG/日本語 OK! Owner of Give Me Space.</p>
						  </Tab>
						  <Tab eventKey={7} title="BUNBUN" style={{color:'brown'}}>
								<p> </p>

						        <img src={require('../images/bun.png')} style={{width:'15%', align:'auto'}}/>
						        <p> </p>

						        <p><b>THE HUNTER</b></p>

						        <p className="w3-text-white" style={{textAlign:'left'}}> Artist | ENG/日本語 OK! Owner of Give Me Space.</p>
						  </Tab>
						  <Tab eventKey={8} title="SKY" style={{color:'#008080'}}>
								<p> </p>

						        <img src={require('../images/sky.png')} style={{width:'15%', align:'auto'}}/>
						        <p> </p>

						        <p><b>THE NOBLEWOMAN</b></p>

						        <p className="w3-text-white" style={{textAlign:'left'}}> Artist | ENG/日本語 OK! Owner of Give Me Space.</p>
						  </Tab>
						  <Tab eventKey={9} title="SHADOW" style={{color:'gray'}}>
								<p> </p>

						        <img src={require('../images/shadow.png')} style={{width:'15%', align:'auto'}}/>
						        <p> </p>

						        <p><b>THE SPY</b></p>

						        <p className="w3-text-white" style={{textAlign:'left'}}> Feminist, Alcoholic, Social Entrepreneur, Community Celebratoire , Vampire Slayer. Battery low, gotta use my phone strategically now.</p>
						  </Tab>
						</Tabs>

						<hr/>

						</div>
						

					</div>


				</div>


			); 

	}
}

export default LandingPage; 