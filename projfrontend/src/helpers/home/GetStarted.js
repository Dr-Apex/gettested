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
}));

const GetStarted = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.auth}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.name} variant="h2" component="h2">
            GetTested
          </Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.desc} variant="body2" component="p">
            an online platform to eliminate manual
            <br />
            interaction and revisiting of the person
            <br />
            to collect his report
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GetStarted;
