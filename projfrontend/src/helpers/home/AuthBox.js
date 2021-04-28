import React from 'react';
import GetStarted from './GetStarted';
import Signin from './Signin';
import Signup from './Signup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  brand: {
    height: '80vh',
    marginTop: '4vh',
  },
}));

const AuthBox = ({card}) => {
  const classes = useStyles();

  const cardType = () => {
    switch (card) {
      case 'si':
        return <Signin />;
      case 'su':
        return <Signup />;
      default: return <GetStarted />;

    }
  };

  return (
    <Grid className={classes.brand} item xs={8}>
      {cardType()}
    </Grid>
  );
};

export default AuthBox;
