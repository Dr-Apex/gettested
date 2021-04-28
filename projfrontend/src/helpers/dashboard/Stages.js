import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const Stages = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

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
