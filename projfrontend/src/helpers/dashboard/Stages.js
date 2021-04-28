import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {getReport} from '../apis/user';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

const useStyles = makeStyles((theme) => ({
  brand: {
    height: '70vh',
    marginTop: '0vh',
  },
  step: {
    height: '73vh',
  },
  line: {
    height: '20vh',
  },
}));

const Stages = ({reportId}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState(false);

  const loadReports = rId => {
    if (rId === '') {
      return false;
    } else {
      getReport(rId).then(data => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          if (data.processing) {
            if (true) {
              setActiveStep(2);
            } else {
              setActiveStep(1);
            }
          }
        }
      });
    }
  };

  useEffect(() => {
    loadReports(reportId);
  }, [reportId]);

  return (
    <Grid className={classes.brand} item xs={3}>
      <Stepper className={classes.step} activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Collected</StepLabel>
          <StepContent className={classes.line} />
        </Step>
        <Step>
          <StepLabel>Processing</StepLabel>
          <StepContent className={classes.line} />
        </Step>
        <Step>
          <StepLabel>Result</StepLabel>
        </Step>
      </Stepper>
    </Grid>
  );
};

export default Stages;
