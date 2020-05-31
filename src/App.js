import React, { Component } from 'react';
import store from './store.js';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {store}
    
  }
  render() {
  
    console.log(this.state)
    
    return (
      <div className="App">
        <Header />
        <Sidebar store={this.state.store} />
      </div>
    );
  }
}

export default App;
