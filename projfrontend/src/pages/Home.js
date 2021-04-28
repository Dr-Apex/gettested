import React, {useState} from 'react';
import StartNav from '../helpers/home/StartNav';
import AuthBox from '../helpers/home/AuthBox';
import WebImg from '../helpers/home/WebImg';
import Branding from '../helpers/home/Branding';
import Grid from '@material-ui/core/Grid';

const Home = () => {
  const [card, setCard] = useState('gs');

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-start"
    >
      <Grid item xs={8}>
        <StartNav setCard={setCard} />
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <AuthBox card={card} />
          <WebImg />
        </Grid>
      </Grid>
      <Branding />
    </Grid>
  );
};

export default Home;
