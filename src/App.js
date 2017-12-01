import React, { Component } from 'react';
import Board from './components/Board';
import Header from './components/Header'
import './App.css';

class App extends Component {
render() {
    return (
      <div className="App">
        <Header className="App-header"></Header>
		<Board className="Board"/>
      </div>
    );
  }
}

export default App;
