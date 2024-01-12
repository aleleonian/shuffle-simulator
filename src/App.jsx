import { Header } from "./components/Header";
import { Body } from "./components/Body";
// import { Menu } from './components/Menu';
import { StateProvider } from './components/StateContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const black = {
  main: '#000',
  light: '#ccc',
  dark: '#000',
  contrastText: '#fff',
};


const theme = createTheme({
  typography: {
    "fontFamily": `"Times new roman", sans-serif`,
  },
  palette: {
    primary: black,
    secondary: blue,
  },
});

import './assets/index.css';

function App() {

  return (
    <>
      <StateProvider>
        <ThemeProvider theme={theme}>
          {/* <Menu /> */}
          <Header />
          <Body />
        </ThemeProvider>
      </StateProvider>
    </>
  )
}

export default App
