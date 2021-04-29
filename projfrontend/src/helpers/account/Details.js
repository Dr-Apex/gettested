import React from 'react';
import {isAuthenticated} from '../apis/auth';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  brand: {
    height: '80vh',
    marginTop: '4vh',
  },
  divider: {
    marginTop: '3vh',
    marginBottom: '3vh',
  },
  text: {
    marginTop: '2vh',
    marginBottom: '2vh',
    width: '20vw',
  },
  head: {
    color: '#3f3f3f',
  },
}));

const Details = () => {
  const classes = useStyles();
  const {user} = isAuthenticated();

  return (
    <Grid className={classes.brand} item xs={8}>
      <Typography className={classes.head} variant="h4" component="h2">
        Details
      </Typography>
      <Divider className={classes.divider} />
      <div>
        <TextField
          className={classes.text}
          id="standard-read-only-input"
          label="Name"
          defaultValue={user.name}
          placeholder="Name"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          id="standard-read-only-input"
          label="Email"
          defaultValue={user.email}
          placeholder="Email"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          id="standard-read-only-input"
          label="Phone"
          defaultValue={user.phone}
          placeholder="Phone"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Grid>
  );
};

export default Details;
