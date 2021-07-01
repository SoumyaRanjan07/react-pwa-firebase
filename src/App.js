 
import './App.css';
import {Nav,Navbar } from 'react-bootstrap'
import Home from './Home';
import Users from './Users';
import About from './About';
import {Link ,Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import firebase from './firebase';
import React from 'react';

function App() {
  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken()
    }).then(data=>{
      console.warn('token',data);
    })
  })
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
     
      <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
      <Nav.Link ><Link to='users'>Users</Link></Nav.Link>
      <Nav.Link ><Link to='about'>About</Link></Nav.Link>
    
    </Nav>
     
  </Navbar>
   <Switch>
   <Route component={About} path='/about'></Route>
  <Route component={Users} path='/users'></Route>
  <Route component={Home} path='/'></Route>
  </Switch>
  </Router>
    </div>
  );
}

export default App;
