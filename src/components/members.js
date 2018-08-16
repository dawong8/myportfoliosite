import React, { Component } from 'react';
import { Dialog, DialogTitle, Button, DialogContent, DialogActions,  Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';


class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    return (
      <div>
        <Button  onClick={this.handleOpenDialog} ripple> <p className="box" style={{paddingTop: '10px'}}> Click Me! </p></Button>
        <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog}>
          <DialogTitle> <p className="box"> Where to? </p> </DialogTitle>
          <DialogContent>

            <Link to="/" style={{ textDecoration: 'none', color:'black' }}> <Button onClick={this.handleCloseDialog}> <p className="box"> HOME </p> </Button> </Link> 
            <Link to="/" style={{ textDecoration: 'none', color:'black' }}> <Button onClick={this.handleCloseDialog}> <p className="box"> WATCH </p> </Button> </Link>

            <Link to="/" style={{ textDecoration: 'none', color:'black' }}> <Button onClick={this.handleCloseDialog}> <p className="box"> BLOG </p> </Button> </Link>
            <Link to="/projects" style={{ textDecoration: 'none', color:'black' }}> <Button onClick={this.handleCloseDialog}> <p className="box"> PLAY </p> </Button> </Link>
            <Link to="/projects" style={{ textDecoration: 'none', color:'black' }}> <Button onClick={this.handleCloseDialog}> <p className="box"> SHOP</p>  </Button> </Link>
          </DialogContent>
          <DialogActions>
            {/*<Button type='button'></Button>*/}
            <Button type='button' onClick={this.handleCloseDialog}>Never mind</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Members; 