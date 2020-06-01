import React, { Component } from 'react';
import store from './store.js';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import {Route} from 'react-router-dom';
import AddFolder from './AddFolder/AddFolder'

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
        <Route path = '/AddFolder' Component={AddFolder}>
            </Route>
      </div>
    );
  }
}

export default App;
