import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { BottomMenu } from './components/BottomMenu';
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

          <Header />
          <Body />
          <BottomMenu />

        </Grid>
      </StateProvider>
    </>
  )
}

export default App
