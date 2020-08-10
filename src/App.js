import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import PhibrowsMicroblading from './components/PhibrowsMicroblading'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/phibrows-microblading" component={PhibrowsMicroblading} />
        </div>
      </Router> 
    )
  }
}


export default App;
