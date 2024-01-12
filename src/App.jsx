import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Menu } from './components/Menu';
import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import { StateProvider } from './components/StateContext';

import './assets/index.css';

function App() {

  return (
    <>
      <StateProvider>
          <Menu />
          <Header />
          <Body />
      </StateProvider>
    </>
  )
}

export default App
