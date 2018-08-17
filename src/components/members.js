import React, { Component } from 'react';
import { Dialog, DialogTitle, Button, DialogContent, DialogActions,  Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import { Cell, Grid} from 'react-mdl';


class Members extends React.Component {


  render() {
    return (
      <div> 
        <div style={{background:'pink'}}> 
            <div style={{padding:'5%', opacity:'0.9'}}> 
              <div className="panel" style={{padding:'5%'}}> 
                <img style={{width: '10%', height:'auto' }} src={require('../images/yuri.png')} />

                <p style={{ fontSize: '35px'}}> Where to?  </p>

                <br /> 
                <Link to="/yuri" style={{ textDecoration: 'none', color:'black' }}> <Button> <p className="box"> Watch </p> </Button> </Link> <br/>         
                <Link to="/yuri" style={{ textDecoration: 'none', color:'black' }}> <Button> <p className="box"> Blog </p> </Button> </Link> <br/>         
                <Link to="/yuri" style={{ textDecoration: 'none', color:'black' }}> <Button> <p className="box"> Shop </p> </Button>  </Link> <br/>         
                <Link to="/yuri" style={{ textDecoration: 'none', color:'black' }}> <Button> <p className="box"> Play </p> </Button> </Link> <br/>         
                <Grid> 
                    <Cell col={2}>

                    <img style={{width: '70%', height:'90%' }} src={'https://pre00.deviantart.net/b6a2/th/pre/f/2018/189/d/1/2_by_edalie_chan-dcgo1uh.png'} />
                      </Cell>
                      <Cell col={2}>

                    <Link to="/yuri" > <img style={{width: '70%', height:'100%' }} src={('https://pre00.deviantart.net/0694/th/pre/f/2018/189/d/2/1_by_edalie_chan-dcgo1vg.png')} />
                      </Link> </Cell><Cell col={2}>

                    <Link to="/clip" ><img style={{width: '75%', height:'100%' }} src={('https://pre00.deviantart.net/2331/th/pre/f/2018/189/a/2/4_by_edalie_chan-dcgo1t6.png')} />
                      </Link></Cell><Cell col={2}>

                    <img style={{width: '75%', height:'100%' }} src={('https://pre00.deviantart.net/4df6/th/pre/f/2018/189/a/a/3_by_edalie_chan-dcgo1tp.png')} />
                      </Cell><Cell col={2}>

                    <img style={{width: '70%', height:'100%' }} src={('https://pre00.deviantart.net/72e4/th/pre/f/2018/227/2/1/6_by_edalie_chan-dck7ivs.png')} />
                      </Cell>
                      <Cell col={2}>

                    <img style={{width: '75%', height:'100%' }} src={('https://pre00.deviantart.net/b238/th/pre/i/2018/227/d/6/5_by_edalie_chan-dck7iwc.png')} />
                      </Cell>
                </Grid>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Members; 