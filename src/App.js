import React, { useContext } from 'react';
import "./app.css";
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import { DataContext } from './components/context/Context';

function App() {
  const {dark} = useContext(DataContext)
  return (
    <BrowserRouter>
      <div className={dark ? "App" : "App appQora"}>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
