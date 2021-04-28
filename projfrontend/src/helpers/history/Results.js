import React, {useState, useEffect} from 'react';
import {isAuthenticated} from '../apis/auth';
import {getReports} from '../apis/user';
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
}));

const Results = () => {
  const classes = useStyles();
  const {user} = isAuthenticated();
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(false);

  const loadReports = () => {
    getReports().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setReports(data);
      }
    });
  };

  useEffect(() => {
    loadReports();
  }, []);

  return (
    <Grid className={classes.brand} item xs={3}>
      <Typography variant="h4" component="h2">
        Result
      </Typography>
      <Divider className={classes.divider} />
      {reports.map((test, i) => {
        return (
          <div key={i}>
            {test.userid === user._id ?
              (
                <Typography variant="body2" component="p">
                  {test.result}
                </Typography>
              ) : null
            }
          </div>
        );
      })}
    </Grid>
  );
};

export default Results;
