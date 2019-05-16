import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import { PaymentRoute } from './route/PaymentRoute'
import { CustomerRoute } from './route/CustomerRoute'
import { HalRoute } from './route/HalRoute'

function App() {
  return (
    <Router>
      <Route path='/payment' component={PaymentRoute}></Route>
      <Route path='/customer/:id' component={CustomerRoute}></Route>
      <Route path='/hal' component={HalRoute}></Route>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div> */}
    </Router>

  );
}

export default App;
