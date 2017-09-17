import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Shelf from './components/Shelf/Shelf';
import Bin from './components/Bin/Bin';



class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shelf/:letter" component={ Shelf } />
        <Route exact path="/bin/:id" component={ Bin } />
      </Switch>
    );
  }
}

export default App;
