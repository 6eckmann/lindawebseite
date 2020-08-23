import React, { Component } from 'react'
import './Preise.css'
import {Link, withRouter} from 'react-router-dom'
class Preise extends Component {

    
    render(){
        return(
            
            <div className = "wD_"> 
            <section className="firstSection">
                <div className="_20i">
                    <div className="_2Uq">
                        <img></img>
                    </div>
                    <div className="_1FL">
                    </div>
                    <div className="_2Ct">
                        <div className="Te"><div className="_3l4">
                            <div>
                                <h1>Preise</h1>
                                <p>Du hast noch eine Frage oder möchtest Dich persönlich beraten lassen?<br></br>Gerne erzähle ich Dir in 30 min alles über die verschiedenen Techniken in einem persönlichen Gespräch und beantworte Dir alle Deine Fragen. Bei einem darauffolgenden Behandlungstermin wird der Betrag verrechnet.<br></br><br></br>Beratungsgespräch vorab&nbsp;
                                </p>
                                <h3><strong>50€</strong>
                                </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="_1Ar">
                <div class="_2Ct">
                    <div class="_21E">
                        <div class="yjT1">
                            <div class="_38y">
                                <div class="U57">
                                    <div class="Te">
                                        <div class="css">
                                            <div >
                                                <h3>Microblading</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="U570_">
                                    <div class="Te">
                                        <div class="css">
                                            <div >
                                                <h3><strong>349€</strong></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="U570_">
                                    <div class="Te">
                                        <div class="cssd">
                                            <div className="alignright">
                                                <Link to="/terminbuchen">
                                                    <button className = "greybutton" type = "submit">
                                                        Termin vereinbaren
                                                    </button>  
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                    
                            </div>
                                 
                    
                        </div>
                        <div class="yjT">
                            <div class="_38y">
                                <div class="U57">
                                    <div class="Te">
                                        <div class="css">
                                            <div>
                                                <h3>Powder Brows</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="U570_">
                                    <div class="Te">
                                        <div class="css">
                                            <div>
                                                <h3><strong>349€</strong></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="U570_">
                                    <div class="Te">
                                        <div class="cssd">
                                            <div className="alignright">
                                                <Link to="/terminbuchen">
                                                    <button className = "greybutton" type = "submit">
                                                        Termin vereinbaren
                                                    </button>  
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="yjT">
                            <div class="_38y">
                                <div class="U57">
                                    <div class="Te">
                                        <div class="css">
                                            <div>
                                                <h3>Browlifting</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="U570_">
                                    <div class="Te">
                                        <div class="css">
                                            <div>
                                                <h3><strong>349€</strong></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="U570_">
                                    <div class="Te">
                                        <div class="cssd">
                                            <div className="alignright">
                                                <Link to="/terminbuchen">
                                                    <button className = "greybutton" type = "submit">
                                                        Termin vereinbaren
                                                    </button>  
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        </section>
                            
            </div>
            )
    }
}

export default Preise
