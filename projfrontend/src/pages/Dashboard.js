import React from 'react';
import Navbar from '../helpers/common/Navbar';
import Title from '../helpers/common/Title';
import Test from '../helpers/dashboard/Test';
import Stages from '../helpers/dashboard/Stages';
import Grid from '@material-ui/core/Grid';

const Dashboard = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-start"
    >
      <Navbar />
      <Grid item xs={11}>
        <Title title="Dashboard" />
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Test />
          <Stages />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
