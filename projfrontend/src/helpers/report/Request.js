import React, {useState, useEffect} from 'react';
import {getReports, updateReport} from '../apis/user';
import {isAuthenticated} from '../apis/auth';
import ResultModal from './ResultModal';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  brand: {
    height: '80vh',
    marginTop: '4vh',
  },
  box: {
    border: '1px solid #3f51b5',
    borderRadius: 5,
    marginBottom: '4vh',
  },
  itemBox: {
    color: '#3f51b5',
    opacity: 0.9,
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
  btn: {
    borderRadius: 0,
    width: '27.96vw',
  },
}));

const Request = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(false);
  const {user, token} = isAuthenticated();


  const loadReports = () => {
    getReports().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setReports(data);
      }
    });
  };

  console.log(error);

  useEffect(() => {
    loadReports();
  }, []);

  const onSubmit = (action, test, value) => {
    var info = {
      'collected': test.collected,
      'processing': test.processing,
      'result': null
    };
    info = {...info, [action]: value};
    console.log(info);

    //backend request fired
    updateReport(test._id, user._id, token, info)
    .then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        return true;
      }
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid className={classes.brand} item xs={11}>
      {reports.map((test, i) => (
        <div key={i} className={classes.box}>
          <Grid item xs={12} className={classes.itemBox}>
            <Typography className={classes.item} variant="h6">
              {test.date} | {test.sampleid}
            </Typography>
          </Grid>
          <form>
            <Button
              className={classes.btn}
              variant={test.collected ? "contained" : "outlined"}
              color="primary"
              onClick={() => onSubmit('collected', test, true)}
            >
              Collected
            </Button>
            <Button
              className={classes.btn}
              variant={test.processing ? "contained" : "outlined"}
              color="primary"
              onClick={() => onSubmit('processing', test, true)}
            >
              Processing
            </Button>
            <Button
              className={classes.btn}
              variant={test.result ? "contained" : "outlined"}
              color="primary"
              onClick={handleOpen}
            >
              Result
            </Button>
            <ResultModal
              open={open}
              setOpen={setOpen}
              test={test}
              onSubmit={onSubmit}
            />
          </form>
        </div>
      ))}
    </Grid>
  );
};

export default Request;
