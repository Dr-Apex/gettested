import React, {useState, useEffect} from 'react';
import {isAuthenticated} from '../apis/auth';
import {getReports} from '../apis/user';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  brand: {
    height: '80vh',
    marginTop: '4vh',
  },
  itemBox: {
    color: '#3f51b5',
    border: '1px solid #3f51b5',
    opacity: 0.9,
    height: '10vh',
    marginBottom: '4vh',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      background: '#3f51b5',
      color: '#efefef',
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
  item: {
    fontSize: 30,
    marginLeft: '5vh',
  },
}));

const Timeline = ({setReportId}) => {
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
    <Grid className={classes.brand} item xs={8}>
      {reports.map((test, i) => {
        return (
          <div key={i}>
            {test.userid === user._id ?
              (
                <Grid
                  className={classes.itemBox}
                  item
                  xs={12}
                  onClick={() => setReportId(test._id)}
                >
                  <Typography className={classes.item} variant="h6">
                    {test.date} | {test.sampleid}
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

export default Timeline;
