import React from 'react';
import Home from './Home';
import Login from './Login';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Registration';
import Customer from './Customer';
import Dashboard from './Dashboard';
// import AddCustomerPage from './Components/CustomerPage/AddCustomerPage';
import AddCustomer from './AddCustomer';
import UpdateUserPage from './Components/CustomerPage/UpdateUserPage';
import UserProfilePage from './Components/CustomerPage/UserProfilePage';
import GetAllRefillsPage from './Components/Refills/GetAllRefillsPage';
import UpdateRefillPage from './Components/Refills/UpdateRefillPage';
import CreateRefillPage from './Components/Refills/CreateRefillPage';
// import { ReactDOM } from 'react';

function App() {
  return(
    <Router>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path="/login" element={ <Login />}/>
          <Route path="/registration" element={<Registration />} />
          <Route path='/customers' element={<Customer />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/create-customer' element={<AddCustomer />} />
          <Route path='/update_user_by_id/:userId/' element={<UpdateUserPage />} />
          <Route path='/user_by_id/:userId/' element={<UserProfilePage />} />
          <Route path='/refills/' element={<GetAllRefillsPage />} />
          <Route path='/update_refill/:refill_id/' element={<UpdateRefillPage />} />
          <Route path='/create_refill/' element={<CreateRefillPage />} />
        </Routes>
    </Router>
  )
}

export default App;
