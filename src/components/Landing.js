import React, { Component } from 'react'
import './Landing.css'
class Landing extends Component {
    render() {
        return (
            <div>
                <div className = "firstsection">
                            <h1 className="text-center">Phibrows <br></br> Microblading &amp; More <br></br> Lübeck</h1>  
                            <h2>Mission Brows &amp; More <br></br> Linda Pruß</h2> 
                </div>
                  
                <div className = "visitenkarte">
                    <img className = "visitenkartenbild" src = {'/images/asd.'} alt = "visitenkarte"></img>
                    </div>
                <div className = "instaundwhatsapp">
                    <div className = "test">
                    <form action = "https://instagram.com" target = "_blank">
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
              <div className = "googlebewertungen">
                  Google Bewertung
              </div>
              <div className = "phibrowsartist">
                  <h2>Was ist ein <br></br> PhiBrows Royal Artist?<br></br></h2>
               
                
                Royal Artists sind zertifizierte Künstler der PhiAcademy, die überdurchschnittliche Fähigkeiten in ihrer Arbeit bewiesen haben. Damit ein PhiBrows Artist ein PhiBrows Royal Artist wird, muss er:
                <ul>
                    <li>mindestens ein Jahr PMU Erfahrung haben</li>
                    <li>vorher mindestens 6 Monate lang Artist gewesen sein</li>
                    <li>von anderen Artisten und Mastern sehr geschätzt werden</li>
                    <li>andere PhiBrows Artisten unterrichtet haben</li>
                    <li>selbstlos weitere Skills entwickelt haben</li>
                    <li>die aktuellen Trends verfolgen und sich kontinuierlichen weiter entwickeln/perfektionieren/ an seinen Fähigkeiten arbeiten</li>
                    <li>vorsichtig bei der Auswahl von Arbeitsgeräten und Materialien sein</li>
                    </ul>
                    Als PhiBrows Artist wurde ich von den PhiMastern für den Titel eines Royal Artist vorgeschlagen. Alle Master müssen einstimmig über die Überreichung des Titels zustimmen.
Der gesamte Prozess ist sehr langwierig und schwierig.
Letztendlich steht der <b>Royal Titel</b> für eine erstklassige Ausbildung und <b>überdurchschnittliche Qualität</b> des Artists.
Die PhiAcademy <b>garantiert</b> für die Arbeit und die <b>Qualität</b> eines Royal Artist! 
              </div>
                <div className = "vorstellung">
                    Vorestellung
                </div>
            </div>

        )
    }
}

export default Landing
