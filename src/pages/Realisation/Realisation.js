import React from 'react'
import {useEffect , useState} from 'react'
import { useParams, useNavigate} from "react-router-dom";
import realisations from './Realisation.json'
import { Link } from "react-router-dom";
import './Realisation.scss' 
//Composant js
import Slide from '../../Composants/Slide.js'

// images
import Logop3 from './../../images/LogoP3-2.png'
import TraitOblique from './../../images/TraitOblique.png'
import ArrowL from './../../images/icon-arrowLP4.png'
import ArrowR from './../../images/icon-arrowRP4.png'
import Button from './../../images/button-voir-site.png'

export default function Realisations() {

        const params = useParams();
      
        const navigate = useNavigate();
        useEffect(() => {
           let realisation = realisations.find((realisation) => params.id === realisation.id);
           if (!realisation) {
              navigate("/error");
           }
        });

  return (
    <div>
    <div className="all">
        <a  href='javascript:history.go(-1)'><img src={Logop3} className='Logop4'></img></a>
       {realisations.filter((realisation) => realisation.id === params.id).map(
          (realisation, index) => (
             <div key={realisation.id - index} className="house__boxes">
                <div className="Temp-corp">
                   <div className="Temp-Slide">
                    <div>
                      <h2>{realisation.title}</h2>
                    </div>

                      <Slide data={realisation.pictures} />

                   </div>
                <div className="bloc-bas-P4">
                    <a target='_blank' href={realisation.url}>
                        <img src={Button} alt='Boutton envoyant sur le site'/>
                        
                    </a>
                    <p>{realisation.description}</p>
                </div>
                </div>

             </div>
          )
       )}
    </div>

 </div>
  )
}
