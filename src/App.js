import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header'
import Sidebar from './containers/Sidebar'
import Content from './containers/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="d-flex" >
          <Sidebar />
          <Content />  
        </div>
      </div>
    );
  }
}

export default App;
