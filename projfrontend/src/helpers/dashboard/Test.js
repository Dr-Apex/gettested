import React, {useState} from 'react';
import {createReport} from '../apis/user';
import {isAuthenticated} from '../apis/auth';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: '3vh',
    marginBottom: '3vh',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  box: {
    height: '80vh',
    marginTop: '4vh',
  },
  age: {
    marginTop: 12,
    marginBottom: '8vh',
  },
  date: {
    marginBottom: '7vh',
  },
  btn: {
    marginTop: '5vh',
    marginLeft: 30,
  },
  head: {
    color: '#3f3f3f',
  },
}));

const Test = () => {
  const classes = useStyles();
  const {user, token} = isAuthenticated();
  const [info, setInfo] = useState([]);

  const [values, setValues] = useState({
    userid: '',
    age: '',
    date: '',
    symptoms: '',
    sampleid: ''
  });

  const {
    userid,
    age,
    date,
    symptoms,
    sampleid
  } = values;

  var today = new Date();
  var Tdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const [selectedDate, setSelectedDate] = React.useState(Tdate);

  const [state, setState] = React.useState({
    Fever: false,
    Cough: false,
    Fatigue: false,
    BodyAches: false,
    Headache: false,
    SoreThroat: false,
    RunnyNose: false,
    Loss: false,
    Nausea: false,
    Diarrhea: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      setValues({...values, symptoms: event.target.name});
      setInfo({...info, symptoms: event.target.name});
    }
  };

  const handleDateChange = d => {
    var Sdate = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
    var Cdate = d.getDate();
    var Cmonth = d.getMonth() + 1;

    if (Cdate.toString().length === 1) {
      Cdate = String(Cdate).padStart(2, '0');
    }
    if (Cmonth.toString().length === 1) {
      Cmonth = String(Cmonth).padStart(2, '0');
    }

    var ftl = user.name.substring(0, 2).toUpperCase();
    var sampleid = Cdate + Cmonth + ftl + '01';

    setSelectedDate(Sdate);
    setValues({...values, date: Sdate, sampleid: sampleid, userid: user._id});
    setInfo({...info, date: Sdate, sampleid: sampleid, userid: user._id});
  };

  const handleValueChange = name => event => {
    const value = event.target.value;
    setValues({...values, [name]: value});
    setInfo({...info, [name]: value});
  };

  const onSubmit = event => {
    event.preventDefault();
    setInfo({
      ...info,
      age: age,
      date: date,
      symptoms: symptoms
    });
    setValues({...values, error: '', loading: true});
    console.log(info);

    //backend request fired
    createReport(user._id, token, info)
    .then(data => {
      if (data.error) {
        setValues({...values, error: data.error});
      } else {
        setValues({
          ...values,
          age: '',
          loading: false
        });
      }
    });
  };

  return (
    <Grid className={classes.box} item xs={8}>
      <Typography className={classes.head} variant="h4" component="h2">
        Get Myself Tested
      </Typography>
      <Divider className={classes.divider} />
      <form>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
        >
          <Grid className={classes.field} item xs={5}>
            <TextField
              className={classes.age}
              id="standard-required"
              label="Age"
              value={age}
              onChange={handleValueChange("age")}
            />
            <FormGroup column>
              <FormControlLabel
                control={<Checkbox checked={state.Fever} onChange={handleChange} name="Fever" color="primary" />}
                label="Fever"
              />
              <FormControlLabel
                control={<Checkbox checked={state.Cough} onChange={handleChange} name="Cough" color="primary" />}
                label="Cough"
              />
              <FormControlLabel
                control={<Checkbox checked={state.Fatigue} onChange={handleChange} name="Fatigue" color="primary" />}
                label="Fatigue"
              />
              <FormControlLabel
                control={<Checkbox checked={state.BodyAches} onChange={handleChange} name="BodyAches" color="primary" />}
                label="Body Aches"
              />
              <FormControlLabel
                control={<Checkbox checked={state.Headache} onChange={handleChange} name="Headache" color="primary" />}
                label="Headache"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={5}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container className={classes.date} justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <FormGroup column>
              <FormControlLabel
                control={<Checkbox checked={state.SoreThroat} onChange={handleChange} name="SoreThroat" color="primary" />}
                label="SoreThroat"
              />
              <FormControlLabel
                control={<Checkbox checked={state.RunnyNose} onChange={handleChange} name="RunnyNose" color="primary" />}
                label="Runny Nose"
              />
              <FormControlLabel
                control={<Checkbox checked={state.Loss} onChange={handleChange} name="Loss" color="primary" />}
                label="New loss of Taste or Smell"
              />
              <FormControlLabel
                control={<Checkbox checked={state.Nausea} onChange={handleChange} name="Nausea" color="primary" />}
                label="Nausea"
              />
              <FormControlLabel
                control={<Checkbox checked={state.Diarrhea} onChange={handleChange} name="Diarrhea" color="primary" />}
                label="Diarrhea"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </form>
      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Grid>
  );
};

export default Test;
