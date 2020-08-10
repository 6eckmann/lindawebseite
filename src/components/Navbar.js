import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import './Navbar.css'
import { SocialIcon } from 'react-social-icons'
import {
  /*  BrowserView,
    MobileView,*/
    isBrowser,
    isMobile
  } from "react-device-detect";


class Navbar extends Component {

  
    render(){
        if(window.screen.width >= 1280)
        {
            return (
            
                // navbar navbar-expand-lg navbar-dark primary-color rounded
               // navbar navbar-expand-lg navbar-dark bg-dark rounded
            <nav className="navbar navbar-expand-lg rounded navbar-fixed-top">
                 <a className ="navbar-brand" href="/impressum" > <img src={'/images/lindalogo.png'} style= {{height: 50}}  alt=""></img></a>
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
                            <Link to="/home" className="nav-link">
                            Phi Lashlifting
                            </Link>
                        </li>
                        <li className="navbar-nav">
                            <Link to="/home" className="nav-link">
                            PhiContour Permanent Makeup
                            </Link>
                        </li>
                        <li className="navbar-nav">
                            <Link to="/home" className="nav-link">
                            FAQ
                            </Link>
                        </li>
                        <li className="navbar-nav">
                            <Link to="/home" className="nav-link">
                            Preise
                            </Link>
                        </li>
                        <li className="navbar-nav">
                            <Link to="/home" className="nav-link">
                            Gutschein
                            </Link>
                        </li>
                        <li className="navbar-nav">
                            <Link to="/home" className="nav-link">
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
                
                // navbar navbar-expand-lg navbar-dark primary-color rounded
               // navbar navbar-expand-lg navbar-dark bg-dark rounded
            <nav className="navbar navbar-expand-lg rounded navbar-fixed-top">
            <button className="navbar-toggler"
           type="button"
           data-toggle="collapse" 
           data-target="#navbar1"
           aria-controls="navbar1"
           aria-expanded="false"
           aria-label="Toggle navigation">
           <span className="navbar-toggler-icon navbar text-white"></span>
           </button>   

           <a className ="navbar-brand" href="/impressum" > <img src={'/images/lindalogo.png'} style= {{height: 50}}  alt=""></img></a>
           <div  id="navbar1" className="collapse navbar-collapse justify-content-md-center">
              <ul className="navbar-nav">
                  <li className="navbar-nav">
                      <Link to="/home" className="nav-link">
                     
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
              <ul className = "navbar-nav-right">
                  <a className ="navbar-nav-right" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> <img src={'/images/insta.png'} style= {{height: 25}}  alt=""></img></a>
              </ul>
              <ul className = "navbar-nav-right">
              <a className ="navbar-nav-right" href="https://wa.me/+491726931184?text=Test%20für%20die%20Webseite" target="_blank" rel="noopener noreferrer"> <img src={'/images/whatsapp.png'} style= {{height: 25}}  alt=""></img></a>
              </ul>
          </div>
          
      </nav>
            )
        }
       
       }
        
}

export default withRouter(Navbar)
