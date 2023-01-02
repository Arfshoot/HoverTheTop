import React from 'react'
import { Link } from "react-router-dom";
import TemplateE from './TemplateE.json'
import './../CarteTemp.scss'

// images

import Bouton from './../../../../images/BoutonTemplates.png'

export default function CarteTempE() {
    return (
        <div className='CarteTempE'>
        {
            TemplateE.map( Template=>{
                return(
                    <Link to={`/e-commerce/${Template.id}`} className="cart" key={Template.id} >
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
