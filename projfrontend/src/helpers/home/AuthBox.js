import React from 'react';
import GetStarted from './GetStarted';
import Signin from './Signin';
import Signup from './Signup';
import Forgot from './Forgot';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  brand: {
    height: '80vh',
    marginTop: '4vh',
  },
}));

const AuthBox = ({card, setCard}) => {
  const classes = useStyles();

  const cardType = () => {
    switch (card) {
      case 'si':
        return <Signin setCard={setCard} />;
      case 'su':
        return <Signup />;
      case 'fp':
        return <Forgot />;
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
