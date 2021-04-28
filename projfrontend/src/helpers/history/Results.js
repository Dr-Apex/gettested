import React, {useState, useEffect} from 'react';
import {isAuthenticated} from '../apis/auth';
import {getReport} from '../apis/user';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  brand: {
    height: '80vh',
    marginTop: '4vh',
  },
  divider: {
    marginTop: '3vh',
    marginBottom: '3vh',
  },
  desc: {
    fontSize: 20,
  },
}));

const Results = ({reportId}) => {
  const classes = useStyles();
  const {user} = isAuthenticated();
  const [report, setReport] = useState([]);
  const [error, setError] = useState(false);

  const loadReports = rId => {
    if (rId === '') {
      return false;
    } else {
      getReport(rId).then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setReport(data);
        }
      });
    }
  };

  useEffect(() => {
    loadReports(reportId);
  }, [reportId]);

  return (
    <Grid className={classes.brand} item xs={3}>
      <Typography variant="h4" component="h2">
        Result
      </Typography>
      <Divider className={classes.divider} />
      <div>
        <Typography className={classes.desc} variant="body2" component="p">
          {report.result}
        </Typography>
      </div>
    </Grid>
  );
};

export default Results;
