import * as React from 'react';
import TextField from '@mui/material/TextField';

export function FormPropsTextFields({ elementId, handleKeyPress }) {

  return (
    <React.Fragment >
      <TextField
        id={elementId}
        label="Type it"
        onKeyPress={handleKeyPress}
      />
    </React.Fragment >
  );
}
