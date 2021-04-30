import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {signin, authenticate, isAuthenticated} from '../apis/auth';
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
}));

const Signin = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: 'drew01@gmail.com',
    password: 'ab@dAbc9',
    error: false,
    loading: false,
    didRedirect: false
  });

  const {email, password, error, loading, didRedirect} = values;
  const {user} = isAuthenticated();

  console.log(loading);

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value});
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({...values, error: false, loading: true});
    signin({email, password})
    .then(data => {
      console.log(data);
      if (data.err) {
        setValues({...values, error: true, loading: false});
      } else {
        if (data.token) {
          authenticate(data, () => {
            setValues({...values, didRedirect: true});
          });
        }
      }
    })
    .catch(console.log('Signin'));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to='/report' />;
      } else {
        return <Redirect to='/dashboard' />;
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
            Signin
          </Typography>
          <Divider className={classes.divider} />
        </CardContent>
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
          <div>
            <TextField
              type="password"
              placeholder="Password"
              error={error}
              id="outlined-error-helper-text"
              label={error ? "Error" : ""}
              variant="outlined"
              value={password}
              onChange={handleChange('password')}
            />
          </div>
          <div className={classes.linkBox}>
            <Link to="" className={classes.link}>
              Forgot Password?
            </Link>
          </div>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={onSubmit}
          >
            Signin
          </Button>
          {performRedirect()}
        </form>
      </Card>
    </Grid>
  );
};

export default Signin;
