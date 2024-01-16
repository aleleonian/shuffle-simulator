import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Typography, Box, Container } from '@mui/material';

const CardStack = () => {
  const [values, setValues] = useState('');
  const [suits, setSuits] = useState('');
  const [stack, setStack] = useState([]);

  const Emoji = React.memo(({ label, symbol }) =>
    <span role="img" aria-label={label}>
      {String.fromCodePoint(symbol)}
    </span>)

  const addCard = () => {
    let suit;
    switch (suits) {
      case 'c':
        suit = <span>&#x2663;&#xFE0F;</span>;
        break;
      case 'h':
        suit = <span>&#x2764;&#xFE0F;</span>;
        break;
      case 's':
        suit = <span>&#x2660;&#xFE0F;</span>;
        break;
      case 'd':
        suit = <span>&#x1F538;</span>;
        break;
    }
    // const cardText = suit;
    const cardElement = (
      <div key={stack.length}>
        {values} {suit}
      </div>
    );

    // const cardText = `${values}${suit}`;

    setStack([...stack, cardElement]);
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
      <Typography variant="h5" gutterBottom>Stack:</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        {/* <Typography variant="body1">{stack.join(', ')}</Typography> */}
        {stack.map((card, index) => (
          <React.Fragment key={index}>{card}</React.Fragment>
        ))}
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
            <MenuItem value="">Select Value</MenuItem>
            <MenuItem value="A">A</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">5</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="J">J</MenuItem>
            <MenuItem value="Q">Q</MenuItem>
            <MenuItem value="K">K</MenuItem>
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
            <MenuItem value="">Select Suit</MenuItem>
            <MenuItem value="c">C</MenuItem>
            <MenuItem value="h">H</MenuItem>
            <MenuItem value="s">S</MenuItem>
            <MenuItem value="d">D</MenuItem>
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
