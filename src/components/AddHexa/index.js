import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useRef, useState } from 'react';

const useStyles = makeStyles(() => ({
  root: {
    width: '300px',
  },
  borderSelect: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  button: {
    height: '56px',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '15px',
    lineHeight: '19px',
    textAlign: 'center',
    letterSpacing: '0.01em',
    width: '100%',
    marginBottom: '26px',
    padding: '7px 0',
    border: '1px solid #3E3E3E',
  },
}));

function AddHexa(props) {
  const { onChange, isGridEmpty } = props;
  const [name, setName] = useState('');
  const [neighbor, setNeighbor] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [neighborValid, setNeighborValid] = useState(true);
  const [border, setBorder] = useState(0);
  const [nameErrorText, setNameErrorText] = useState('');
  const [neighborErrorText, setNeighborErrorText] = useState('');
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const message = useRef(0);

  const reset = () => {
    setName('');
    setNeighbor('');
  };

  const checkValidName = () => {
    if (name === '') {
      setNameValid(false);
      setNameErrorText('Please enter name of hexagon');
      return false;
    }

    setNameValid(true);
    setNameErrorText('');
    return true;
  };

  const checkValidNeighbor = () => {
    if (neighbor === '') {
      setNeighborValid(false);
      setNeighborErrorText('Please enter name of neighbor');
      return false;
    }

    setNeighborValid(true);
    setNeighborErrorText('');
    return true;
  };

  const handleAdd = () => {
    if (checkValidName() && (checkValidNeighbor() || isGridEmpty)) {
      const data = {
        name: name,
        neighbor: neighbor,
        border: border,
      };
      onChange(data);
      reset();
    }
  };

  const handleChange = (event) => {
    setBorder(event.target.value);
  };

  let button;
  if (loading) {
    button = <Button className={classes.button} onClick={handleAdd}><CircularProgress /></Button>;
  } else {
    button = <Button className={classes.button} onClick={handleAdd}>ADD</Button>;
  }

  let neighborTextField;
  if (isGridEmpty) {
    neighborTextField = (
      <></>
    );
  } else {
    neighborTextField = (
      <TextField
        error={!neighborValid}
        required
        margin="dense"
        id="projectUrl"
        label="Project repo URL"
        type="text"
        fullWidth
        value={neighbor}
        onChange={(e) => setNeighbor(e.target.value)}
        label="Neighbor hexagon name" variant="outlined"
        helperText={neighborErrorText}
      />
    );
  }

  return (
    <FormControl className={classes.root}>
      <FormLabel>Add new hexagon</FormLabel>
      <TextField
        error={!nameValid}
        required
        margin="dense"
        id="projectUrl"
        label="Project repo URL"
        type="text"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="New hexagon name" variant="outlined"
        helperText={nameErrorText}
      />

      {neighborTextField}
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={border}
        onChange={handleChange}
        variant='outlined'
        className={classes.borderSelect}
      >
        <MenuItem value="" disabled>
          <em>Select border</em>
        </MenuItem>
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
      <p ref={message}></p>
      {button}
    </FormControl>
  );
}

export default AddHexa;
