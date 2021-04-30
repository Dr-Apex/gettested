import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '35vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    color: '#3f3f3f',
  },
  input: {
    width: '25vw',
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginTop: '4vh',
    marginBottom: '2vh',
  },
}));

const ResultModal = ({open, setOpen, test, onSubmit}) => {
  const classes = useStyles();
  const [info, setInfo] = useState('');

  const handleChange = event => {
    setInfo(event.target.value);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title" className={classes.title}>Test Result</h2>
      <TextField
        className={classes.input}
        id="outlined-multiline-static"
        multiline
        rows={4}
        placeholder="Result..."
        variant="outlined"
        value={info}
        onChange={handleChange}
      />
      <div>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={() => onSubmit('result', test, info)}
        >
          Submit
        </Button>
      </div>
    </div>
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};

export default ResultModal;
