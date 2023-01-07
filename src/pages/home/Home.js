import React from 'react'
import { Link } from "react-router-dom";
// fichier de style
import './home.scss'


// image des logos de page
import Logo from '../../images/Logo-home.png'
import TitreQui from '../../images/Titresection2.png'
import TitreReal from '../../images/Titresection3.png'
import TitreTemplate from '../../images/Titresection4.png'
import TitreContact from '../../images/Titresection5.png'
// image vrac
import Montagne from '../../images/Montagne-p1.png'
import TraitV from '../../images/Trait.png'
import Mobile from '../../images/icon-mobile.png'
import Seo from '../../images/icon-SEO.png'
import Ux from '../../images/icon-UX.png'
import Contact from '../../images/icon-contact.png'
import ArrowL from '../../images/icon-arrowL.png'
import ArrowR from '../../images/icon-arrowR.png'
import Head from '../../images/icon-head.png'
import Http from '../../images/icon-http.png'
import Button from '../../images/button-contact.png'
import Satisfaction from '../../images/icon-satisfaction.png'
import CouvVitrine from '../../images/couv-vitrine.png'
import CouvEcommerce from '../../images/couv-ecommerce.png'

// photo profil + projets
import Emilien from '../../images/Emilien.png'
import Jeremy from '../../images/Jeremy.png'
import Bouton from '../../images/BoutonTemplates.png'
// logo réseaux sociaux 
import Behance from '../../images/Logo-behance.png'
import Instagram from '../../images/Logo-instagram.png'
import Twitch from '../../images/Logo-twitch.png'
import Web from '../../images/Logo-web.png'
import Linkedin from '../../images/Logo-linkedin.png'

// Composant JS 
import CartesProjet from '../Realisation/ProgetReal.js'
import Nav from '../../Composants/Nav/Nav'




export default function Home() {
    

      
           
  return (
    <div className='All-page'>
        <main>
        <Nav/>
        
        <section className="page1" id="Accueil">
        <header>
            <div>
            <a href='#Accueil' className='Logo'><img src={Logo} ></img></a>
            </div>
        </header>
        <main>
            <div className="Titre">
                <img src={Montagne} alt="Montagne" />
                <h1>Survolez des sommets <br></br> avec un site d'exception</h1>
            </div>
            <div className="Traitv">
                <img src={TraitV} alt="trait" />
            </div>
            <div className="Placement-gen">
                <div className="Titre-place">
                    <img src={Ux}></img>
                    <h3>Conception UX Design & User Interface</h3>
                </div>
                <p>L'ergonomie d'un site Internet doit le rendre intuitif à comprendre et à utiliser. L'UX Design couvre à la fois l'ergonomie, l'étude du comportement, l'ethonologie, le contenu et la navigation.</p>
            </div>
            <div className="Placement-gen2">
                <div className="Titre-place2">
                    <img src={Mobile}></img>
                    <h3>Développement web & mobile</h3>
                </div>
                <p>Nous créons des sites web sur mesure 100% responsive pour vous aider à vous démarquer de la concurrence, améliorer l'expérience de vos clients et valoriser vos produits.</p>
            </div>
            <div className="Placement-gen3">
                <div className="Titre-place3">
                    <img src={Seo}></img>
                    <h3>Référencement & SEO</h3>
                </div>
                <p>Le référencement a pour objectif d'intégrer, de positionner et de maintenir votre site internet en tête des classements des moteurs de recherche afin de générer le plus fort trafic.</p>
            </div>
        </main>
        </section>

        <section className="page2" id="Qui-sommes-nous">
        <div><img src={TitreQui} className='titrepage2'/></div>
        <div className="placement-middle">
            <div className="bloc-présentation">
                
            <div>
                <img src= {Jeremy} alt='Portait'/>
            </div>
            <div >
                <h2><span>//</span> Jérémy Vigier</h2>
                <div className='placement-P-trait'>
                        <p>Developpeur Web fullStack diplomé en 2022, développement, fonctionnalitées, maintenance, gestion de base de donnée, Seo  ...</p>
                        <p>Maitrisant plusieurs languages tel que : Html, CSS, Sass, JavaScript, Node.js, React... <br></br>Je m'adaptes à vos besoins  </p>
                        <div className='Logo-réseaux'>
                                <h3>Mes réseaux</h3>
                                <a  target='_blank' href='#' alt="Site personnel"><img src={Web}/></a>
                                <a  target='_blank' href='https://www.linkedin.com/in/jeremy-vigier-17b08b260/' alt="Profil Linkedin"><img src={Linkedin}/></a>
                                <a  target='_blank' href='https://www.twitch.tv/arfdev' alt="Chaîne Twich"><img src={Twitch}/></a>
                                <a  target='_blank' href='#' alt="site personnel"><img src={""}/></a>
                        </div>
                </div>
            </div>
            </div>
            <div className="bloc-présentation">
            <div>
                <img src= {Emilien} alt='Portait'/>
            </div>
            <div>
                <h2><span>//</span> Émilien Grudé</h2>
                <div className='placement-P-trait'>
                        <p>Designer indépendant depuis 2018, mes compétences me permettent de travailler sur plusieurs aspects de la création mobile et web.</p>
                        <p>Je réalise également des logotypes et des créations artistiques pour l'identité visuelle de mes clients.</p>
                            <div className='Logo-réseaux'>
                                <h3>Mes réseaux</h3>
                                <a  target='_blank' href='https://emilieng-design.webnode.fr/' alt="Site personnel"><img src={Web}/></a>
                                <a  target='_blank' href='https://www.linkedin.com/in/emilien-grud%C3%A9-b27695131/' alt="Profil Linkedin"><img src={Linkedin}/></a>
                                <a  target='_blank' href='https://www.instagram.com/graphic.scraick/' alt="Page instagram"><img src={Instagram}/></a>
                                <a  target='_blank' href='https://www.behance.net/Scraick' alt="site personnel"><img src={Behance}/></a>
                                
                            </div>

                </div>
            </div>
            </div>
        </div>

        </section>

        <section className="page3" id="Nos-réalisations">
        
            
            <div className='titrepage3'><img src={TitreReal} /></div>
            <div className='Liste'>
                <CartesProjet/>
            </div>
        </section>

        <section className="page4" id='Nos-offres'>
            <div className='titrepage4'>
                <img src={TitreTemplate}  />
            </div>
        <div className='all-cartp4'>
            <div className='cartp4'>
            
                <Link to='/vitrine'>

                    <figure className="img-box">
                        <figcaption className='text-box'> 
                            <h3>Site Vitrine</h3> 
                            <p>Si vous cherchez un site simple de présentation pour votre entreprise, allez voir les différents modèles que nous proposons !</p>
                            </figcaption>
                        <img src={CouvVitrine}  alt='img-logment' className="img-all"></img>
                        
                        <div className='Bas-figure'>
                        <h4> Des templates disponibles</h4>
                        <p>Adaptation de votre design : <br></br> <span>A partir de 720 euros</span></p>
                        <p>Création du design / ajout de fonctionnalité :  <br></br> <span>Tarifs selon les besoins</span></p>

                        </div>
                        <img className="bouton" src={Bouton} alt="image du contenu"/>

                    
                    </figure>

                </Link>
                </div>
            
                <div className='cartp4'>
            <Link to='/e-commerce'>
                    <figure className="img-box">
                        <figcaption className='text-box'> 
                            <h3>Site e-commerce</h3> 
                            <p>Si vous cherchez un site de vente en ligne, avec un catalogue, un espace client, sur un site clair et sécurisé, ces modèles sont fait pour vous !</p>
                            </figcaption>
                        <img src={CouvEcommerce}  alt='img-logment' className="img-all"></img>
                        
                        <div className='Bas-figure'>
                        <h4> Des templates disponibles</h4>
                        <p>Adaptation de votre design : <br></br> <span>A partir de XXX euros</span></p>
                        <p>Création du design / ajout de fonctionnalité :  <br></br> <span>Tarifs selon les besoins</span></p>
                        </div>
                        <img className="bouton" src={Bouton} alt="image du contenu"/>
                        </figure>
                        
                            
                        
            </Link>
            </div>
            </div>

        </section>

        <section className="page5" id="Contact">
        <div><img src={TitreContact} className='titrepage5'/></div>
            <div className="all-blocP5"> 
                <div className="blocP5"> 
                    
                    <img src={Contact} alt="image de contact"/>
                    <p>Un projet spécifique ? <br/> Contactez-nous !</p>
                    
                </div>
                <div className="blocP5"> 
                    
                    <img src={Head} alt="image de contact"/>
                    <p>Nous identifions <br/> votre besoin.</p>
                    
                </div>
                <div className="blocP5"> 
                    
                    <img src={Http} alt="image de contact"/>
                    <p>Nous travaillons <br/> ensemble pour vous.</p>
                    
                </div>
                <div className="blocP5"> 
                    
                    <img src={Satisfaction} alt="image de contact"/>
                    <p>Vous êtes satisfait, <br/> et nous aussi.</p>
                    
                </div>
            </div>
            <div className="bloc-bas-P5">
                <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSdy3gGhyZ59p5dma_ZMRTbfWHIYHTSuReht4-_1ha0WSHFlhg/viewform'>
                <img src={ArrowR} alt='Fleche vers la droite'/>
                <img src={Button} alt='Boutton de contact'/>
                <img src={ArrowL} alt='Fleche vers la gauche'/>
                </a>
            </div>
        </section>
        </main>
    </div>
  )
}
