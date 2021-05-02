import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {forgot, isAuthenticated} from '../apis/auth';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    padding: '4vh 2vh',
    paddingTop: '0vh',
  },
  btn: {
    margin: '2vh 2vh',
  },
  link: {
    color: '#3f51b5',
    textDecoration: 'none',
    marginLeft: 10,
  },
  linkBox: {
    marginBottom: '2vh',
  },
  text: {
    marginLeft: 25,
    color: '#3f51b5',
  },
}));

const Forgot = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    url: '',
    error: false,
    loading: false,
    didRedirect: false
  });

  const {email, url, error, loading, didRedirect} = values;
  const {user} = isAuthenticated();

  console.log(loading);

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value});
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({...values, error: false, loading: true});
    forgot({email})
    .then(data => {
      console.log(data);
      if (data.err) {
        setValues({...values, error: true, loading: false});
      } else {
          if (data.messageId) {
            setValues({...values, url: data.messageUrl, didRedirect: true});
          }
        }
      }
    )
    .catch(console.log('Forgot'));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        window.location.href = url;
      } else {
        window.location.href = url;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to='/' />;
    }
  };

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
          <Typography variant="h4" component="h2">
            Forgot Password
          </Typography>
          <Divider className={classes.divider} />
        </CardContent>
        <Typography className={classes.text} variant="body2" component="p">
          <b>Enter your registered email</b>
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <div>
            <TextField
              type="email"
              placeholder="Email"
              error={error}
              id="outlined-error-helper-text"
              label={error ? "Error" : ""}
              variant="outlined"
              value={email}
              onChange={handleChange('email')}
            />
          </div>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={onSubmit}
          >
            Forgot
          </Button>
          {performRedirect()}
        </form>
      </Card>
    </Grid>
  );
};

export default Forgot;
