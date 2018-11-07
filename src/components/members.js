import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Members extends React.Component {


  render() {
    return (
      <div> 
        <div className="w3-container w3-padding-64 w3-blue-grey w3-grayscale-min w3-xlarge box">
          <div className="w3-content" style={{paddingTop:'50px'}}>
            <p className="w3-center w3-jumbo fancy-text" style={{marginBottom:'64px'}}>Contact</p>

            <p>Have feedback or want to participate in our future events?</p>
            <p><span className="w3-tag">Team Yuri!</span> wants to hear from you! Send us a message.</p>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Members; 