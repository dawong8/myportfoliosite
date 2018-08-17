import React, { Component } from 'react'; 
import { Cell, Grid} from 'react-mdl';
import { SocialIcon } from 'react-social-icons';


const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Hello extends React.Component {
    componentDidMount() {
    let embed;
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      EMBED_URL
    );
    script.addEventListener('load', () => {
      embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
    });
        document.body.appendChild(script);
  }

  render() {

    return (
        <div>
        <div id={this.props.targetID}></div>
      </div>
    )
  }
}

Hello.defaultProps = {
	targetID: 'twitch-embed',
	width: '75%',
	height: '480',
	channel: 'yuguretv',
}



class Yuri extends Component {
	render() {

		return (
				<div> 
					<div style={{margin:'50px'}}> 
						<Grid style={{paddingTop:'20px', paddingBottom:'20px'}}> 
						    	
								<Cell col={12}>

									
									<img style={{width: '10%', height:'100%' }} src={('https://pre00.deviantart.net/0694/th/pre/f/2018/189/d/2/1_by_edalie_chan-dcgo1vg.png')} />

								</Cell>
								<Cell col={12}>
									<div className="fancy-font" > 
									    <p style={{fontSize:'35px'}}> Yuri </p>	 
									    <p style={{fontSize:'20px', color:'purple'}}> THE QUEEN </p>	 

									</div>
									
								</Cell>

								 <Cell col={6}>

									<div className="box" > 
										<p > I am Yuri. I started streaming a few years ago and I came to realize that the community was a lot more toxic than it had to be. I always thought a little trolling is funny, friendly banters spice up conversations and a little sarcasm could be appreciated. That wasn’t what I experienced as a streamer. I’ve had people attack me for the way I look, the way I sound and people who legitimately would not stop harassing me. I came to realize that there is a part of this gaming universe I escape to that’s simply unsafe and unkind. That’s when I decided, I’m going to start my own community. <br />One where people like myself could escape to and find solace without being afraid to show everyone who they really are. I brought together a group of very talented people  to start a movement. We call it “Under the Sun”. <br />We decided to become a collaborative channel and be known as Team Yuri. We want to reach out and shape our own little community where people get to meet people and you will be accepted for who you are. A place where regardless of your race, religion and sexual orientation, you will belong. Because there is only one race under the sun — The human race. We want to reach out to people through our content and influence people one at a time. So if you ever feel like you could use a friend or just someone to talk to, you know where we’ll be. If you feel like you don’t belong, then come to us. Because with us, you’ll always feel like you have someone to lean on and a place you can fit in.
										I think what I’m about to say from here is very important because it is one of the biggest reason why I am how I am today why the “Under the Sun” movement is so important to me. I came from a broken family. My  step father is a piece of shit that would beat me up as and when he pleased. I became depressed at a very young age, struggling with illnesses and drama that went on within my family. I had to choose between getting beat up or risk my step father hurting my mother. I started becoming suicidal. I was afraid of death and the thought of not knowing what’s to come after scared me. I would have nightmares and would find myself weighing the pros and cons of if I took my life versus the pros and cons of taking my step father with me.. I didn’t want to die, I just didn’t have a reason to live. I didn’t feel like I lived a life. It felt more like I was simply an existence. I just, exist. That’s when blogging was starting to get popular.  I used to visit the library daily and posted on my old anti-suicide blog “Immortality”. There I told everyone who found me to send in their stories and I would share it with everyone and tried to be there for them while feeling like I had someone to talk to all the time. </p>

									</div>
								</Cell>
								

								

								


						       
								
						        <Cell col={6}>

						        	<div className="box" > 
						        		<p> 
       That’s when I met my best friend, Zachariah Leeroy. Years passed and the blog took off, he became my admin and we were each other’s pillar. We leaned onto each other, talked on MSN and Skype for hours about how bad things were going. We shared our happiness and sorrows for many years and helped each other cope. <br />The blog started growing rapidly, we had so many submissions and I got so much love for doing what I did. And that’s when it went wrong. I was so young and naïve. The popularity got to my head and I gradually started to forget my purpose. One day, I checked my phone after hanging out with new friends. So many missed calls from Zach. I rejected the first 2 calls. The very next day I received news that Zach had hung himself. The pain of realizing me not being  there for my best friend might have be the reason why he was overwhelmed with stress and took his own life damn near killed me. That night I tried to get overdosed on about 100 pills of paracetamol, a substance I was allergic to and got sent to the hospital. There I was forced to see a therapist and it was after meeting my therapist, I found a resolve and desire to change the world. Starting from me. I’m not going to think about killing myself even when things become difficult. I owe it to Zach to at least try. I cannot bring him back but I might be able to help stop others from taking their lives. Even if it was hard, I’m gonna try and if I succeed, the world will know his name. Because I do this in honour of him for he still lives in me. </p>
									</div>
										<SocialIcon url="https://twitter.com/yuguretv" network="twitter"/>
										<SocialIcon url="https://www.instagram.com/yuguretv/" network="instagram"/>
										<SocialIcon url="https://www.twitch.tv/yuguretv" network="twitch"/> 

						        </Cell>

						        <Cell col={7}> </Cell> 
						        <Cell col={1}> </Cell>
						    </Grid>
					</div>

					<div style={{paddingBottom:'100px'}}> <Hello /> </div>



				</div>


			); 

	}
}

export default Yuri; 