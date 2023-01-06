import React from 'react'
import TemplateV from './TemplateV.json'
import './../CarteTemp.scss'

// images
import Logop4 from './../../../../images/LogoP4-2.png'
import Contact from './../../../../images/button-contactP4.png'
import Voirmaquette from './../../../../images/button-maquette.png'


export default function CarteTempV() {
    return (
        <div className='CarteTempE'>
            <a  href='javascript:history.go(-1)'><img src={Logop4} className="Logop4-2"/></a>
            <div className='desc-card'>
            <p>Un site vitrine vous servira pour promouvoir votre activité, présenter de manière rapide et élégante un produit, ou simplement pour afficher votre passion. Vous retrouverez sur cette page différentes maquettes et styles de site Vitrine. Chaque design est adaptable à vos couleurs et votre identité. Si vous souhaitez que l’on crée également votre charte graphique pour l’intégrer sur un site vitrine, n’hésitez pas à nous contacter !</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdy3gGhyZ59p5dma_ZMRTbfWHIYHTSuReht4-_1ha0WSHFlhg/viewform" target="_blank"><img src={Contact}/></a>
            </div>
        <div  className="all-cart">
   
        {
            TemplateV.map( Template=>{
                return(
                    <div > 
                    <div className='cart'>
                        <figure className="img-box">
                            <figcaption className='text-box'> 
                            <h3>{Template.title}</h3> 
                            <p>lorem ipsum dolor sit amet, con lorem ipsum dolor lorem ipsum dolor</p>
                            </figcaption>
                        <img src={Template.cover}  alt='img-logment' className="img-all"></img>
                        
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
