import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import PhibrowsMicroblading from './components/PhibrowsMicroblading'
import Kontakt from './components/Kontakt'
import Preise from './components/Preise'
import Impressum from './components/Impressum'
import Termin from './components/Termin'
import Bottom from './components/Bottom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {truePasswort: false,passwort:''}
    
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    
    if(this.state.passwort == 'LianLenyo1')
    {
      this.setState({truePasswort:true})
    }
}



  render() {
    if(this.state.truePasswort)
    { console.log(this.state.truePasswort)
      return(
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/brows-microblading" component={PhibrowsMicroblading} />
          <Route exact path="/kontakt" component = {Kontakt} />        
          <Route exact path="/preise" component = {Preise} />           
          <Route exact path="/impressum" component={Impressum} />    
          <Route exact path ="/terminbuchen" component = {Termin}/>   
          <Bottom />                
        </div>
      </Router> )
    }
    return (
      <Router>
        <div className="App"> 
   
        <label>
          Passwort:
          <input type="text" name = "passwort" value={this.state.passwort}  onChange={this.onChange}/>
        </label>
      
            
        </div>
      </Router> 
    )
  }
}


export default App;
