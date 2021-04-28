import React, {useState} from 'react';
import {signup} from '../apis/auth'
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
}));

const Signup = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
    error: '',
    success: false
  });

  const {name, email, phone, password, cpassword, error, success} = values;

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value});
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({...values, error: false});
    signup({name, email, phone, password})
    .then(data => {
      if (data.error) {
        setValues({...values, error: data.error, success: false});
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          phone: '',
          password: '',
          cpassword: '',
          error: '',
          success: true
        });
      }
    })
    .catch(console.log('Error in Signup'));
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
            Signup
          </Typography>
          <Divider className={classes.divider} />
        </CardContent>
        <form className={classes.form} noValidate autoComplete="off">
          <div>
            <TextField
              type='text'
              placeholder="Name"
              // error
              id="outlined-error"
              // label="Invalid"
              variant="outlined"
              value={name}
              onChange={handleChange('name')}
            />
          </div>
          <div>
            <TextField
              type='email'
              placeholder="Email"
              // error
              id="outlined-error"
              // label="Invalid"
              variant="outlined"
              value={email}
              onChange={handleChange('email')}
            />
            <TextField
              type='number'
              placeholder="phone"
              // error
              id="outlined-error"
              // label="Invalid"
              variant="outlined"
              value={phone}
              onChange={handleChange('phone')}
            />
          </div>
          <div>
            <TextField
              type='password'
              placeholder="Password"
              // error
              id="outlined-error"
              // label="Invalid"
              variant="outlined"
              value={password}
              onChange={handleChange('password')}
            />
            <TextField
              type='password'
              placeholder="Confirm Password"
              // error
              id="outlined-error"
              // label="Invalid"
              variant="outlined"
              value={cpassword}
              onChange={handleChange('cpassword')}
            />
          </div>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={onSubmit}
          >
            Submit
          </Button>
        </form>
      </Card>
    </Grid>
  );
};

export default Signup;
