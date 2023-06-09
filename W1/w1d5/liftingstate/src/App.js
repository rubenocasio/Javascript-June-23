import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MessageBoard from './views/MessageBoard';

function App() {

  return (
    <div className="App">
      <MessageBoard />
    </div>
  );
}

export default App;
