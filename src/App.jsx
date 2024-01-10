import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Menu } from './components/Menu';
import { StateProvider } from './components/StateContext';
import Grid from '@mui/material/Grid';

import './assets/index.css';

function App() {

  return (
    <>
      <StateProvider>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch">
          <Menu />
          <Header />
          <Body />
        </Grid>
      </StateProvider>
    </>
  )
}

export default App
