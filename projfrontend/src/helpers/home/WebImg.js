import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  brand: {
    height: '80vh',
    marginTop: '4vh',
  },
}));

const WebImg = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.brand} item xs={4}>
      WebImg
    </Grid>
  );
};

export default WebImg;
