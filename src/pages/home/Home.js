import React from 'react'
import './home.scss'
import '../styles/composants.scss'

// image des logos de page
import Logo from '../../images/Logo-home.png'
import LogoP2   from '../../images/Logo-page2.png'
import LogoP3 from '../../images/Logo-page3.png'
import LogoP4 from '../../images/Logo-page4.png'
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
// images url coté gauche
import URL from '../../images/Url.png'
import URLP2 from '../../images/UrlP2.png'
import URLP3 from '../../images/UrlP3.png'
import URLP4 from '../../images/UrlP4.png'
// photo profil + projets
import PhotoVide from '../../images/Photo-vide.png'
import PhotoVide2 from '../../images/Photo-vide2.png'
import Emilien from '../../images/Emilien.png'
import Jeremy from '../../images/Jeremy.png'
// logo réseaux sociaux 
import Behance from '../../images/Logo-behance.png'
import Instagram from '../../images/Logo-instagram.png'
import Twitch from '../../images/Logo-twitch.png'
import Web from '../../images/Logo-web.png'
import Linkedin from '../../images/Logo-linkedin.png'

// Composant JS 
import CartesProjet from '../../Composants/CarteReal.js'
import CartesTemplates from '../../Composants/CarteTemp.js'


export default function Home() {
  return (
    <div className='All-page'>
            <div>
                <ul className='place-nav'>
                    <a href="#haut-page1" className="nav"><li><span>Accueil</span> <i class="fa-solid fa-circle"></i></li></a>
                    <div className="trait-nav"><img src={TraitV} /></div>
                    <a href="#haut-page2" className="nav"><li><span>Qui sommes-nous?</span> <i class="fa-solid fa-circle"></i></li></a>
                    <div className="trait-nav"><img src={TraitV} /></div>
                    <a href="#haut-page3" className="nav"><li><span>Réalisations</span> <i class="fa-solid fa-circle"></i></li></a>
                    <div className="trait-nav"><img src={TraitV} /></div>
                    <a href="#haut-page4" className="nav"><li><span>Nos Offres</span> <i class="fa-solid fa-circle"></i></li></a>
                    <div className="trait-nav"><img src={TraitV} /></div>
                    <a href="#haut-page5" className="nav"><li><span>Contact</span> <i class="fa-solid fa-circle"></i></li></a>
                </ul>
            </div>
        <section className="page-1" id="haut-page1">
        <header>
            <div className="Logo">
            <a href='/Home' id="haut-page1"><img src={Logo} alt="Logo" /></a>
            </div>
        </header>
        <main>
            <div className="Titre">
                <div>
                <img src={Montagne} alt="Montagne" />
                </div>
                <div>
                <h1>Survolez des sommets <br></br> Avec un site d'exception</h1>
                
                </div>
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
                <p>Nous créons des sites web sur mesure pour vous aider à vous démarquer de la concurrence, améliorer l’expérience de vos clients et valoriser vos produits.</p>
            </div>
            <div className="Placement-gen3">
                <div className="Titre-place3">
                    <img src={Seo}></img>
                    <h3>Référencement & SEO</h3>
                </div>
                <p>Le référencement a pour objectif d'intégrer, de positionner et de maintenir votre site internet en tête des classements des moteurs de recherche afin de générer le plus fort trafic.</p>
            </div>
            <div className="Placement-left"> 
                <img src={URL} alt="Image-left"/>
            </div>

        </main>
        </section>
        <section className="page-2" id="haut-page2">

        <div className="placement-middle">
            <div className="bloc-présentation">
            <div>
                <img src= {Jeremy} alt='Portait'/>
            </div>
            <div>
                <h2><span>//</span> Jérémy Alias Arf-Dev</h2>
                <div className='placement-P-trait'>
                    <img src= {TraitV} alt='traitV'/>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pellentesque habitant morbi tristique senectus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pellentesque habitant morbi tristique senectus.</p>
                            <div className='Logo-réseaux'>
                                <h3>Mes réseaux</h3>
                                <a href='#' alt="Site personnel"><img src={Web}/></a>
                                <a href='#' alt="Profil Linkedin"><img src={Linkedin}/></a>
                                <a href='#' alt="Chaîne Twich"><img src={Twitch}/></a>
                                <a href='#' alt="site personnel"><img src={""}/></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="bloc-présentation">
            <div>
                <img src= {Emilien} alt='Portait'/>
            </div>
            <div>
                <h2><span>//</span> Jérémy Alias Arf-Dev</h2>
                <div className='placement-P-trait'>
                    <img src= {TraitV} alt='traitV'/>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pellentesque habitant morbi tristique senectus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pellentesque habitant morbi tristique senectus.</p>
                            <div className='Logo-réseaux'>
                                <h3>Mes réseaux</h3>
                                <a href='#' alt="Site personnel"><img src={Web}/></a>
                                <a href='#' alt="Profil Linkedin"><img src={Linkedin}/></a>
                                <a href='#' alt="Chaîne Twich"><img src={Twitch}/></a>
                                <a href='#' alt="site personnel"><img src={Behance}/></a>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="page-3" id="haut-page3">
            <div className='Liste'>
                <CartesProjet/>
            </div>
        </section>
        <section className="page-4" id='haut-page4'>
            <div className='Liste2'>
                <CartesTemplates/>
            </div>
        </section>

        <section className="page-5" id="haut-page5">

            <div className="all-blocP5"> 
                <div className="blocP5"> 
                    <a href='#'>
                    <img src={Contact} alt="image de contact"/>
                    <p>Un projet ? <br/> Contactez-nous !</p>
                    </a>
                </div>
                <div className="blocP5"> 
                    <a href='#'>
                    <img src={Head} alt="image de contact"/>
                    <p>Nous identifions <br/> votre besoin.</p>
                    </a>
                </div>
                <div className="blocP5"> 
                    <a href='#'>
                    <img src={Http} alt="image de contact"/>
                    <p>Nous travaillons <br/> ensemble pour vous.</p>
                    </a>
                </div>
                <div className="blocP5"> 
                    <a href='#'>
                    <img src={Satisfaction} alt="image de contact"/>
                    <p>Vous êtes satisfait, <br/> et nous aussi.</p>
                    </a>
                </div>
            </div>
            <div className="bloc-bas-P5">
                <a href='#'>
                <img src={ArrowR} alt='Fleche vers la droite'/>
                <img src={Button} alt='Boutton de contact'/>
                <img src={ArrowL} alt='Fleche vers la gauche'/>
                </a>
            </div>
        </section>
    </div>
  )
}
