import React, { useState } from 'react';
import Menu from './Components/MenuComponent/Menu';
import Header from './Components/HeaderComponent/Header';
import classes from './App.module.css';
import MainArea from './Components/MainAreaComponent/MainArea';

function App() {

  const [menuStatus, setMenuStatus] = useState(false);

  const menuHandler = () => {
    if (!menuStatus) {
      setMenuStatus(true);
    } else {
      setMenuStatus(false);
    }
  }

  let mainArea = classes.main_menu_close;

  if (menuStatus) {
    mainArea = classes.main_menu_open;
  }

  return (
    <div className="App">
      <Menu menuStatus={menuStatus} />
      <main className={mainArea}>
        <Header menuClick={menuHandler} />
        <MainArea />
      </main>

    </div>
  );
}

export default App;
