import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  logOut = () => {
    localStorage.removeItem('jwt');
  }

  render() {
    return (
      <div className='signUpBtn'>
        {localStorage.getItem('jwt') ? <Button variant="outlined" color="inherit" onClick={this.logOut}>
          Sign Out
        </Button> : <Button variant="outlined" color="inherit" onClick={this.handleClickOpen}>
          Sign Up
        </Button> }
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="Password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
          <Button onClick={this.handleClose} color="primary">
              Sign Up
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Log In
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}