import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Typography, Box, Container } from '@mui/material';
import { useStateContext } from './StateContext';
import { AlertAlert } from './AlertAlert';
import { FormPropsTextFields } from './FormPropsTextFields';
import { isValidPlayingCard } from '../functions/shuffles';

const CardStack = () => {
  const [values, setValues] = useState('');
  const [suits, setSuits] = useState('');
  const [stack, setStack] = useState([]);
  const [errorAlert, setErrorAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  const myContext = useStateContext();

  const Emoji = React.memo(({ label, symbol }) =>
    <span role="img" aria-label={label}>
      {String.fromCodePoint(symbol)}
    </span>)

  const saveStack = () => {
    let currentDeckOrderState = { ...myContext.deckOrderState };
    currentDeckOrderState.order = stack;
    currentDeckOrderState.backup = stack;
    currentDeckOrderState.name = "other";
    myContext.updateDeckOrderState(currentDeckOrderState);
  }

  const processInput = () => {
    return document.getElementById('typed-card').value;
  }

  const deleteAlertInFive = () => {
    setTimeout(() => {
      setErrorAlert(false);
    }, 5000)
  }

  const addCard = () => {

    const userInput = processInput();

    if (userInput != "") {
      const isValid = isValidPlayingCard(userInput);
      if (!isValid) {
        setAlertMessage("You have to type a card such as 'ah' for the ace of hearts 😒");
        setErrorAlert(true);
        return;
      }
      else {
        setStack([...stack, userInput]);
        return;
      }
    }

    const cardText = `${values}${suits}`;

    if (values === "" || suits === "") {
      setAlertMessage("You have to pick a value and a suit 😒");
      setErrorAlert(true);
      deleteAlertInFive();
      return
    }
    setStack([...stack, cardText]);
  };

  const addSuit = () => {

    if (suits === "") {
      setAlertMessage("You have to pick a suit, dummy! 😒");
      setErrorAlert(true);
      deleteAlertInFive();
      return
    }

    let suitArray = [];

    for (let i = 1; i <= 13; i++) {
      let value;
      switch (i) {
        case 1:
          value = 'a';
          break;
        case 11:
          value = 'j';
          break;
        case 12:
          value = 'q';
          break;
        case 13:
          value = 'k';
          break;
        default:
          value = i;
      }
      suitArray.push(`${value}${suits}`);
    }
    setStack([...stack, ...suitArray]);
  }

  const translateCard = (cardText) => {
    cardText = cardText.toUpperCase();
    let value, suit;
    if (cardText.length == 3) {
      value = cardText[0];
      value += cardText[1];
    }
    else value = cardText[0];

    suit = cardText[cardText.length - 1];

    switch (suit) {
      case 'C':
        suit = <span>&#x2663;&#xFE0F;</span>;
        break;
      case 'H':
        suit = <span>&#x2764;&#xFE0F;</span>;
        break;
      case 'S':
        suit = <span>&#x2660;&#xFE0F;</span>;
        break;
      case 'D':
        suit = <span>&#x1F538;</span>;
        break;
    }
    const cardElement = (
      <div key={stack.length}>
        {value} {suit}
      </div>
    );
    return cardElement;

  }
  const deleteCards = () => {
    if (stack.length > 0) {
      const updatedStack = [...stack];
      Object.keys(checkedItems).forEach(cardIndexToBeRemoved => {
        updatedStack.splice(cardIndexToBeRemoved, 1);
      })
      setStack(updatedStack);
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  return (
    <Container sx={{ margin: '100px auto', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>Stack:</Typography>
      {errorAlert ? <AlertAlert severity="error" message={alertMessage} /> : ""}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, flexWrap: 'wrap' }}>
        {
          stack.length > 0 ?
            stack.map((card, index) => (
              <div key={index} className='stack-builder-card'>
                <div>
                  {translateCard(card)}
                </div>
                <div>
                  <input type="checkbox" id={index} name={index} onChange={handleCheckboxChange}  checked={checkedItems[index] || false}/>
                </div>
              </div>
            ))
            :
            "(Empty)"
        }
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
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <FormPropsTextFields elementId={'typed-card'} />
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" color="success" sx={{ mr: 5 }} onClick={addCard}>
          Add card
        </Button>
        <Button variant="contained" color="success" sx={{ mr: 5 }} onClick={deleteCards}>
          Delete card(s)
        </Button>
        <Button variant="contained" color="success" onClick={addSuit}>
          Add suit
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" color="success" onClick={saveStack}>
          Save stack
        </Button>
      </Box>
    </Container>
  );
};

export default CardStack;
