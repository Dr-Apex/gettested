import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    background: 'transparent',
  },
  title: {
    flexGrow: 1,
    color: '#3f3f3f',
  },
}));

const Title = ({title}) => {
   const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={12}>
      <AppBar className={classes.toolbar} position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Title;
