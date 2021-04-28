import React from 'react';
import Navbar from '../helpers/common/Navbar';
import Title from '../helpers/common/Title';
import Timeline from '../helpers/history/Timeline';
import Results from '../helpers/history/Results';
import Grid from '@material-ui/core/Grid';

const History = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-start"
    >
      <Navbar />
      <Grid item xs={11}>
        <Title title="History" />
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Timeline />
          <Results />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default History;
