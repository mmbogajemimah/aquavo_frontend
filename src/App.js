import React from 'react';
import Home from './Home';
import Login from './Login';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Registration';
// import { ReactDOM } from 'react';

function App() {
  return(
    <Router>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path="/login" element={ <Login />}/>
          <Route path="/registration" element={<Registration />} />
        </Routes>
    </Router>
  )
}

export default App;
