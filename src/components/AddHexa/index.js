import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles(() => ({
	root: {
		width: '300px'
	},
  borderSelect: {
    marginTop: '10px',
    marginBottom: '10px'
  },
	button: {
    	fontStyle: 'normal',
    	fontWeight: 600,
    	fontSize: '13px',
    	lineHeight: '19px',
    	textAlign: 'center',
    	letterSpacing: '0.01em',
    	width: '100%',
    	marginBottom:'26px',
    	padding: '7px 0',
    	border: '1px solid #3E3E3E',
  	}
}))

function AddHexa() {
  const [name, setName] = useState('')
  const [border, setBorder] = useState(0)
	const classes = useStyles()

	const handleAdd = () => {
		console.log(name)
  }
  
  const handleChange = (event) => {
    setBorder(event.target.value)
  }

	return (
    <FormControl className={classes.root}>
		  <TextField
        autoFocus
        required
        margin="dense"
        id="projectUrl"
        label="Project repo URL"
        type="text"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="New hexagon name" variant="outlined"
      />

      <TextField
        autoFocus
        required
        margin="dense"
        id="projectUrl"
        label="Project repo URL"
        type="text"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Neighbor hexagon name" variant="outlined"
        />
      
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
       
        <Button className={classes.button} onClick={handleAdd}>Add</Button>
		</FormControl>
	)
}

export default AddHexa