import React, { Component } from 'react';
import { Dialog, DialogTitle, Button, DialogContent, DialogActions,  Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import { Cell, Grid} from 'react-mdl';


class Events extends React.Component {


  render() {
    return (
      <div> 
        <div style={{background:'pink'}}> 
            <div style={{padding:'5%', opacity:'0.9'}}> 
              <div className="panel" style={{padding:'5%'}}> 
                <img style={{width: '10%', height:'auto' }} src={require('../images/yuri.png')} />

                <p style={{ fontSize: '35px'}}> Where to?  </p>

                <br /> 
                <Link to="/aboutme" style={{ textDecoration: 'none', color:'black' }}> <Button> <p className="box"> About Us</p> </Button> </Link> <br/>         
                <Link to="/projects" style={{ textDecoration: 'none', color:'black' }}> <Button> <p className="box"> Members </p> </Button> </Link> <br/>         
                <a href="https://www.youtube.com/channel/UCSXmot2ws4huu3ZzTZAP4VA?" target="_blank" style={{ textDecoration: 'none', color:'black' }}>  <Button> <p className="box"> Watch </p> </Button>  </a><br/>         
                <p className="box"> Find us on YouTube! </p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Events; 