import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import PhibrowsMicroblading from './components/PhibrowsMicroblading'
import Kontakt from './components/Kontakt'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/lindawebseite" component={Landing} />
          <Route exact path="/lindawebseite/phibrows-microblading" component={PhibrowsMicroblading} />
          <Route exact path="/lindawebseite/kontakt" component = {Kontakt} />                                               
        </div>
      </Router> 
    )
  }
}


export default App;
