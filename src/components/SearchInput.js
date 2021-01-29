import React from 'react';
import TextField from '@material-ui/core/TextField';

function SearchInput({callback}) {

  function handleChange(e) {
    callback(e.target.value)
  }

  return (
    <div>
      <TextField label="Search..." onChange={handleChange} />
    </div>
  )
}

export default SearchInput;
