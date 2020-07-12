import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'

const useStyles = makeStyles(() => ({
  root: {
    width: '300px',
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

function SearchRemoveHexa(props) {
  const { onChange } = props;
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [nameErrorText, setNameErrorText] = useState('');
  const classes = useStyles();

  const reset = () => {
    setName('');
  };

  const checkValid = () => {
    if (name === '') {
      setNameValid(false);
      setNameErrorText('Please enter name of hexagon');
      return false;
    }

    setNameValid(true);
    setNameErrorText('');
    reset();
    return true;
  };

  const handleRemove = () => {
    if (checkValid()) {
      const data = {
        name: name,
        action: 'remove',
      };
      onChange(data);
    }
  };

  const handleSearch = () => {
    if (checkValid()) {
      const data = {
        name: name,
        action: 'search',
      };
      onChange(data);
    }
  };

	return (
		<FormControl className={classes.root}>
				<FormLabel>Search and remove hexagon</FormLabel>
				<TextField
            		required
            		margin="dense"
            		id="projectUrl"
            		label="Project repo URL"
            		type="text"
            		fullWidth
            		value={name}
            		onChange={(e) => setName(e.target.value)}
								label="Please enter hexagon name" variant="outlined"
								style={{ marginBottom: '10px' }}
								error={!nameValid}
								helperText={nameErrorText}
          		/>
          		<Grid container>
          			<Grid item xs={6} style={{ paddingRight: '5px' }}>
          				<Button className={classes.button} onClick={handleSearch}>Search</Button>
          			</Grid>

        <Grid item xs={6} style={{ paddingLeft: '5px' }}>
          <Button className={classes.button} onClick={handleRemove}>Remove</Button>
        </Grid>
      </Grid>
    </FormControl>
  );
}

export default SearchRemoveHexa;
