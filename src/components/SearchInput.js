import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '20px',
  },
  textField: {
    width: '600px'
  }
});

function SearchInput({callback}) {

  const classes = useStyles();

  function handleChange(e) {
    callback(e.target.value)
  }

  return (
    <div className={classes.root}>
      <TextField className={classes.textField} label="Search emojis..." variant="outlined" onChange={handleChange} />
    </div>
  )
}

export default SearchInput;
