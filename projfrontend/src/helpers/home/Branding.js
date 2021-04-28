import React from 'react';
import Brand from '../assets/Brand.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  brand: {
    height: '95vh',
    marginLeft: '1vw',
  },
  image: {
    height: '95vh',
    marginLeft: '2vw',
    borderRadius: 7,
  },
}));

const Branding = () => {
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <div className={classes.brand}>
        <img className={classes.image} src={Brand} alt="doctor" />
      </div>
    </Grid>
  );
};

export default Branding;

// https://www.pexels.com/photo/man-in-white-dress-shirt-wearing-black-and-white-stethoscope-6129500/
