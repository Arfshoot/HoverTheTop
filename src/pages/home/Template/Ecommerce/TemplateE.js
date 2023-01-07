import React from 'react'
import TemplateE from './TemplateE.json'
import './../CarteTemp.scss'

// images
import Logop4 from './../../../../images/LogoP4-2.png'
import Contact from './../../../../images/button-contactP4.png'
import Voirmaquette from './../../../../images/button-lamaquette.png'


export default function CarteTempE() {
    return (
        <div className='CarteTempE'>
            <a  href='javascript:history.go(-1)'><img src={Logop4} className="Logop4-2"/></a>
            <div className='desc-card'>
            <p>Un site vitrine vous servira pour promouvoir votre activité, présenter de manière rapide et élégante un produit, ou simplement pour afficher votre passion. Vous retrouverez sur cette page différentes maquettes et styles de site Vitrine. Chaque design est adaptable à vos couleurs et votre identité. Si vous souhaitez que l’on crée également votre charte graphique pour l’intégrer sur un site vitrine, n’hésitez pas à nous contacter !</p>
            <div className='TraitV'></div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdy3gGhyZ59p5dma_ZMRTbfWHIYHTSuReht4-_1ha0WSHFlhg/viewform" target="_blank" className='contact-template'>
                <div>
                    <p >Contactez-nous !</p>
                </div>
            </a>
            </div>
        <div  className="all-cart2">
   
        {
            TemplateE.map( Template=>{
                return(
                    <div className='cart2' > 
                    <div >
                        <figure className="img-box2">
                            <figcaption> 
                            <h3>{Template.title}</h3> 
                            </figcaption>
                        <img src={Template.cover}  alt='img-logment'/>
                        </figure>
                    </div>
                    <div className="voirmaquette"> 
                            <a href={Template.url} target="_blank"><img src={Voirmaquette}/></a>
                        </div>
                    </div>  
                )
            })}
    </div>
    </div>
    )
}
