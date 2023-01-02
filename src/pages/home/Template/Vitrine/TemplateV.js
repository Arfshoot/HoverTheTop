import React from 'react'
import { Link } from "react-router-dom";
import TemplateV from './TemplateV.json'
import './../CarteTemp.scss'
import Logo from './../../../../images/Logo-page4.png'
// images

import Bouton from './../../../../images/BoutonTemplates.png'

export default function CarteTempV() {
    return (
        
        <div className='CarteTempV'>
            
            
        {
            TemplateV.map( Template=>{
                return(

                    <Link to={`/vitrine/${Template.id}`} className="cart" key={Template.id} >
                        
                        <figure className="img-box">
                            <figcaption className='text-box'> 
                            <h3>{Template.title}</h3> 
                            <p>lorem ipsum dolor sit amet, con lorem ipsum dolor lorem ipsum dolor</p>
                            </figcaption>
                        <img src={Template.cover}  alt='img-logment' className="img-all"></img>
                        </figure>
                    </Link>
                    
                    
                )
            })            }
    </div>
    
    )
}
