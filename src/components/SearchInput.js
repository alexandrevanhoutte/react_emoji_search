import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

function SearchInput({callback}) {

  const [value, setValue] = useState(null)

  function handleChange(e) {
    setValue(e.target.value);
    callback(value)
  }

  return (
    <div>
      <TextField label="Search..." onChange={handleChange} />
    </div>
  )
}

export default SearchInput;
