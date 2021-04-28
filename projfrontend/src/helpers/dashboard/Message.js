import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    boxShadow: '0px 0px 0px #fff',
  },
  auth: {
    height: '80vh',
  },
  divider: {
    marginTop: '3vh',
    marginBottom: '3vh',
  },
  name: {
    color: '#3f3f3f',
  },
  desc: {
    color: '#3f51b5',
    fontWeight: 600,
    opacity: 0.9,
    lineHeight: 2,
  },
  box: {
    height: '80vh',
    marginTop: '4vh',
  },
}));

const Message = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.box} item xs={8}>
      <Grid
        className={classes.auth}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.name} variant="h4" component="h2">
              Requested
            </Typography>
            <Divider className={classes.divider} />
            <Typography className={classes.desc} variant="body2" component="p">
              Your request has been submitted.
              <br />
              Please wait for further instructions
              <br />
              from the hospital.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Message;
