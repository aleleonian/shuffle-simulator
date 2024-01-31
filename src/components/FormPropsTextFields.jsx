import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function FormPropsTextFields({ elementId }) {
  return (
    <React.Fragment >
      <TextField
        id={elementId}
        label="Type it"
      />
    </React.Fragment >
  );
}
