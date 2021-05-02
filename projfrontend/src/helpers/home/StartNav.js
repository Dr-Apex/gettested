import React from 'react';
import GT from '../assets/GT.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    background: 'transparent',
    boxShadow: '0px 0px 0px #fff',
  },
  title: {
    flexGrow: 1,
    color: 'black',
  },
  logoBox: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    height: 30,
    width: 30,
    cursor: 'pointer',
  },
  btn: {
    marginLeft: 15,
  },
}));

const StartNav = ({setCard}) => {
   const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={12}>
      <AppBar className={classes.toolbar} position="static">
        <Toolbar>
          <div className={classes.logoBox}>
            <img
              className={classes.logo}
              src={GT}
              alt="GetTested"
              onClick={() => setCard('gs')}
            />
          </div>
          <Button variant="outlined" onClick={() => setCard('si')}>Signin</Button>
          <Button
            className={classes.btn}
            variant="outlined"
            onClick={() => setCard('su')}
          >
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default StartNav;
