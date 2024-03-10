import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ChatRoom from './Components/ChatRoom';
import UserProfile from './components/UserProfile';
import './App.css';
import { io } from "socket.io-client";

import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase configuration goes here
};

firebase.initializeApp(firebaseConfig);

const socket = io('<http://localhost:3000>');

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/chat" component={ChatRoom} />
      <Route path="/profile" component={UserProfile} />
    </Switch>
  </Router>
  );
}

export default App;
