import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
	root: {
		width: '300px'
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

function SearchHexa() {
	const [name, setName] = useState('')
	const classes = useStyles()

	const handleRemove = () => {
		console.log(name)
	}

	const handleSearch = () => {
		console.log(name)
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
								label="Please enter hexagon name" variant="outlined"
								style={{ marginBottom: '10px' }}
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
	)
}

export default SearchHexa