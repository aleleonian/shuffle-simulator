import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { BottomMenu } from './components/BottomMenu';
import { StateProvider } from './components/StateContext';

import './assets/index.css';

function App() {

  return (
    <>
      <StateProvider>
        <Header />
        <Body />
        <BottomMenu />
      </StateProvider>
    </>
  )
}

export default App
