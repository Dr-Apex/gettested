import React from 'react';
import Navbar from '../helpers/common/Navbar';
import Title from '../helpers/common/Title';
import Details from '../helpers/account/Details';
import Dates from '../helpers/account/Dates';
import Grid from '@material-ui/core/Grid';

const Account = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-start"
    >
      <Navbar />
      <Grid item xs={11}>
        <Title title="Account" />
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Details />
          <Dates />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Account;
