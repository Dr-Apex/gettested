import React from 'react';
import Dashboard from '../assets/Dashboard.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  brand: {
    height: '80vh',
    marginTop: '4vh',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    height: '60vh',
    border: '1px solid #ddd',
    borderRadius: 10,
    marginLeft: '2vw',
  },
}));

const WebImg = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.brand} item xs={4}>
      <img className={classes.image} src={Dashboard} alt="Dashboard" />
    </Grid>
  );
};

export default WebImg;
