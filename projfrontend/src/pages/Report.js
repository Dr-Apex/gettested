import React from 'react';
import ReportNav from '../helpers/report/ReportNav';
import Title from '../helpers/common/Title';
import Request from '../helpers/report/Request';
import Grid from '@material-ui/core/Grid';

const Report = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-start"
    >
      <ReportNav />
      <Grid item xs={11}>
        <Title title="Admin Panel" />
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Request />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Report;
