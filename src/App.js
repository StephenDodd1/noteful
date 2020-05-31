import React, { Component } from 'react';
import store from './store.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store
    
  }
  render() {
  console.log(this.state)
  
  return (
    <div className="App">
      
    </div>
  );
}
}

export default App;
