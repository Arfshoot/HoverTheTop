import React from 'react'
import { Link } from "react-router-dom";
import Templates from './Template.json'
import './CarteTemp.scss'

// images

import Bouton from './../images/BoutonTemplates.png'

export default function CarteTemp() {
    return (
        <div className='CarteTemp'>
        {
            Templates.map( Template=>{
                return(
                    <Link to={`/Template/${Template.id}`} className="cart" key={Template.id} >
                        <figure className="img-box">
                            <figcaption className='text-box'> 
                            <h3>{Template.title}</h3> 
                            <p>lorem ipsum dolor sit amet, con lorem ipsum dolor lorem ipsum dolor</p>
                            </figcaption>
                        <img src={Template.cover}  alt='img-logment' className="img-all"></img>
                        
                        <div className='Bas-figure'>
                        <h4> X templates disponibles</h4>
                        <p>Adaptation de votre design : <br></br> <span>A partir de 700 euros</span></p>
                        <p>Création du design / ajout de fonctionnalité :  <br></br> <span>Tarifs selon les besoins</span></p>
                        </div>
                        <div> 
                            <img className="bouton" src={Bouton} alt="image du contenu"/>
                        </div>
                        </figure>
                        

                    </Link>
                )
            })            }
    </div>
    )
}
