import React, { Component } from 'react'
import './Landing.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
class Landing extends Component {

    
    render() {
       
        return (
            <div className = "black">
                <div className = "firstsection">
                            <h1 className="text-center">Microblading &amp; More <br></br> Linda Pruß</h1>  
                            <div className = "instaundwhatsapp">
                    <div className = "test">
                    <form action = "https://www.instagram.com/missionbrowsluebeck/" target = "_blank">
                    <button className = "greybutton" type = "submit">
                    Instagram
                    </button>       
                    </form>
                    <form action = "https://wa.me/+491726931184" target = "_blank">
                    <button className = "blackbutton" type = "submit">
                    WhatsApp
                    </button>       
                    </form>
                    </div>
                </div>
                <img class="rechts" src="./images/text.jpg" width="234" height="60" border="0" alt="Banner"></img>
                </div>
              <div className = "phibrowsartist">
              <div className = "Slider">
              <AwesomeSlider className = "awesome">
                <div data-src="./images/phibrows2.jpg" />
                <div data-src="./images/phibrowsmicroblading.jpg" />
                </AwesomeSlider>
                </div>
              </div>
              
              
               
            </div>
            

        )
    }
}

export default Landing
