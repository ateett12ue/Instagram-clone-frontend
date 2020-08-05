import React from 'react';
import "./App.css"
import NavBar from './components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Signup from './screens/Signup'
import Signin from './screens/Signin'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/signup">
      <Signup/>
    </Route>
    <Route path="/signin">
      <Signin/>
    </Route>
    <Route path="/profile">
      <Profile/>
    </Route>

    </BrowserRouter>
  );
}

export default App;
