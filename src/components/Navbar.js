import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import './Navbar.css'
import {slide as Menu} from 'react-burger-menu'


class Navbar extends Component {

    constructor (props)
    {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
    console.log("entered")
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

    render(){
        if(window.screen.width >= 1280)
        {
            return (
            
                // navbar navbar-expand-lg navbar-dark primary-color rounded
               // navbar navbar-expand-lg navbar-dark bg-dark rounded
            <nav className="navbar navbar-expand-lg rounded navbar-fixed-top">
                 <a className ="navbar-brand" href="/impressum" > <img src={'./images/lindalogo.png'} style= {{height: 100}}  alt=""></img></a>
                 <div  id="navbar1" className="collapse navbar-collapse justify-content-md-center">
                    <ul className="navbar-nav">
                        <li className="navbar-nav">
                            <Link to="/home" className="nav-link">
                            Home
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="navbar-nav">
                            <Link to="/phibrows-microblading" className="nav-link">
                            PhiBrows Microblading
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="navbar-nav">
                            <Link to="/powderbrows" className="nav-link">
                            Powder Brows
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="navbar-nav">
                            <Link to="/browlifting" className="nav-link">
                            Phi Browlifting
                            </Link>
                        </li>
                    </ul>
                    <div class="dropdown">
  <button class="dropbtn">Mehr</button>
  <div class="dropdown-content">
  <li className="navbar-nav">
                            <Link to="/phi-lashlifting" className="nav-link">
                            Phi Lashlifting
                            </Link>
                        </li>
                        <li className="navbar-nav">
                            <Link to="/phicontour-permanent-makeup" className="nav-link">
                            PhiContour Permanent Makeup
                            </Link>
                        </li>
                        <li className="navbar-nav">
                            <Link to="/FAQ" className="nav-link">
                            FAQ
                            </Link>
                        </li>
                        <li className="navbar-nav">
                            <Link to="/preise" className="nav-link">
                            Preise
                            </Link>
                        </li>
                        <li className="navbar-nav">
                            <Link to="/gutschein" className="nav-link">
                            Gutschein
                            </Link>
                        </li>
                        <li className="navbar-nav">
                            <Link to="/kontakt" className="nav-link">
                            Kontakt
                            </Link>
                        </li>
  </div>
</div>
                    <ul className = "navbar-nav-right">
                        <a className ="navbar-nav-right" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> <img src={'/images/insta.png'} style= {{height: 25}}  alt=""></img></a>
                    </ul>
                    <ul className = "navbar-nav-right">
                    <a className ="navbar-nav-right" href="https://wa.me/+491726931184" target="_blank" rel="noopener noreferrer"> <img src={'/images/whatsapp.png'} style= {{height: 25}}  alt=""></img></a>
                    </ul>
                </div>
                
            </nav>
            )
        }
        else{
            
            return(
                <nav className="navbar navbar-expand-lg rounded navbar-fixed-top" style={{height : '100px'}}>
                    <a href="/" class="navbar-brand">
                        <img className = "brand-image" src={'./images/lindalogo.png'} alt="bla"></img>
                    </a>
                    <Menu width = { 350 } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                
                            <Link to="/" className="nav-link" onClick = {() => this.closeMenu()}>
                            Home
                            </Link>
                            <Link to="/brows-microblading" className="nav-link" onClick = {() => this.closeMenu()}>
                            Brows Microblading
                            </Link>
                            <Link to="/powderbrows" className="nav-link" onClick = {() => this.closeMenu()}>
                            Powder Brows
                            </Link>
                            <Link to="/browlifting" className="nav-link" onClick = {() => this.closeMenu()}>
                            Browlifting
                            </Link>
                            <Link to="/faq" className="nav-link" onClick = {() => this.closeMenu()}>
                            FAQ
                            </Link>
                            <Link to="/preise" className="nav-link" onClick = {() => this.closeMenu()}>
                            Preise
                            </Link>
                            <Link to="/terminbuchen" className="nav-link" onClick = {() => this.closeMenu()}>
                            Termin buchen
                            </Link>
                            <Link to="/gutschein" className="nav-link" onClick = {() => this.closeMenu()}>
                            Gutschein
                            </Link>
                            <Link to="/kontakt" className="nav-link" onClick = {() => this.closeMenu()}>
                            Kontakt
                            </Link>
                </Menu>
              </nav>
            )
        }
       
       }
        
}

export default withRouter(Navbar)
