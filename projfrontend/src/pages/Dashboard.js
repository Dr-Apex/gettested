import React, {useState, useEffect} from 'react';
import {getReports} from '../helpers/apis/user';
import Navbar from '../helpers/common/Navbar';
import Title from '../helpers/common/Title';
import Test from '../helpers/dashboard/Test';
import Stages from '../helpers/dashboard/Stages';
import Message from '../helpers/dashboard/Message';
import Grid from '@material-ui/core/Grid';

const Dashboard = () => {
  const [result, setResult] = useState(true);
  const [error, setError] = useState(false);

  const loadReports = () => {
    getReports().then(data => {
      if (data.error) {
        setError(data.error);
        console.log(error);
      } else {
        data.map((d, i) => {
          if (d.result) {
            return false;
          } else {
            setResult(false);
            return true;
          }
        }
      )}
    });
  };

  useEffect(() => {
    loadReports();
  }, []);

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
          {result ? <Test /> : <Message />}
          <Stages />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
