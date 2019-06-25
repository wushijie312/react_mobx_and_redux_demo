import React from 'react';
// import logo from './logo.svg';
// import {Link} from 'react-router-dom';
import './App.css';
import Routes from './routes/index'
import stores from 'stores/index'
import {Provider} from 'mobx-react'
function App() {
  return (
    <div className="App">
      <Provider {...stores}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
