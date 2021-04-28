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
  itemBox: {
    background: '#3f51b5',
    color: '#fff',
    opacity: 0.9,
    height: '7vh',
    marginBottom: '4vh',
    borderRadius: 5,
  },
  item: {
    fontSize: 25,
    marginLeft: '5vh',
  },
}));

const Dates = () => {
  const classes = useStyles();
  const {user} = isAuthenticated();
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(false);

  const loadReports = () => {
    getReports().then(data => {
      if (data.error) {
        setError(data.error);
        console.log(error);
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
      <Typography variant="h5" component="h2">
        Past Testing Dates
      </Typography>
      <Divider className={classes.divider} />
        {reports.map((test, i) => {
          return (
            <div key={i}>
              {test.userid === user._id ?
                (
                  <Grid className={classes.itemBox} item xs={12}>
                    <Typography className={classes.item} variant="h6">
                      {test.date}
                    </Typography>
                  </Grid>
                ) : null
              }
            </div>
          );
        })}
    </Grid>
  );
};

export default Dates;
