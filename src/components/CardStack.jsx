import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Typography, Box, Container } from '@mui/material';

const CardStack = () => {
  const [values, setValues] = useState('a');
  const [suits, setSuits] = useState('c');
  const [stack, setStack] = useState([]);

  const addCard = () => {
    const cardText = `${values} ${suits}`;
    setStack([...stack, cardText]);
  };

  const deleteLastCard = () => {
    if (stack.length > 0) {
      const updatedStack = [...stack];
      updatedStack.pop();
      setStack(updatedStack);
    }
  };

  return (
    <Container sx={{ margin: '100px auto', textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Typography variant="h5">Stack:</Typography>
        <Typography variant="body1">{stack.join(', ')}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="values">Values:</InputLabel>
          <Select
            value={values}
            onChange={(e) => setValues(e.target.value)}
            label="Values"
            inputProps={{
              name: 'values',
              id: 'values',
            }}
          >
            {/* Options for values */}
            <MenuItem value="a" selected>a</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">5</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="j">J</MenuItem>
            <MenuItem value="q">Q</MenuItem>
            <MenuItem value="k">K</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="suits">Suits:</InputLabel>
          <Select
            value={suits}
            onChange={(e) => setSuits(e.target.value)}
            label="Suits"
            inputProps={{
              name: 'suits',
              id: 'suits',
            }}
          >
            {/* Options for suits */}
            <MenuItem value="c" selected>c</MenuItem>
            <MenuItem value="h">h</MenuItem>
            <MenuItem value="s">s</MenuItem>
            <MenuItem value="d">d</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" onClick={addCard}>
          Add card
        </Button>
        <Button variant="contained" onClick={deleteLastCard}>
          Delete last card
        </Button>
      </Box>
    </Container>
  );
};

export default CardStack;
