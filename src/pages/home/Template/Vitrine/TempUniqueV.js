import React from 'react'
import {useEffect , useState} from 'react'
import { useParams, useNavigate} from "react-router-dom";
import TemplateV from './TemplateV.json'
import './../../Template/TempUniqueE.scss'
//Composant js
import Slide from '../../../../Composants/Slide.js'
// images
import Logop4 from './../../../../images/LogoP4-H.png'
import TraitOblique from './../../../../images/TraitOblique.png'
import ArrowL from './../../../../images/icon-arrowLP4.png'
import ArrowR from './../../../../images/icon-arrowRP4.png'
import Button from './../../../../images/button-contactP4.png'

export default function TempUniqueV() {

        const params = useParams();
      
        const navigate = useNavigate();
        useEffect(() => {
           let template = TemplateV.find((template) => params.id === template.id);
           if (!template) {
              navigate("/error");
           }
        });

  return (
    <div>
    <div className="all">
        <img src={Logop4} className='Logop4'></img>
       {TemplateV.filter((template) => template.id === params.id).map(
          (template, index) => (
             <div key={template.id - index} className="house__boxes">

    
                <div className="Temp-corp">
                   <div className="Temp-Slide">
                    <div>
                      <h2>{template.id}</h2>
                    </div>
                      
                      <Slide data={template.pictures}/>
                      <img className='TraitOblique1' src={TraitOblique}/>
                      <img className='TraitOblique2' src={TraitOblique}/>
                    
                   </div>
                <div className="bloc-bas-P4">
                    <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSdy3gGhyZ59p5dma_ZMRTbfWHIYHTSuReht4-_1ha0WSHFlhg/viewform'>
                        <img src={ArrowR} alt='Fleche vers la droite'/>
                        <img src={Button} alt='Boutton de contact'/>
                        <img src={ArrowL} alt='Fleche vers la gauche'/>
                    </a>
                </div>
                </div>

             </div>
          )
       )}
    </div>

 </div>
  )
}