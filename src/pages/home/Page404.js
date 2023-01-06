import React  from 'react'
import { Link } from "react-router-dom";
import Logo from '../../images/Logo-home.png'
import './Page404.scss'
import Bouton from '../../images/Bouton-erreur.png'
import Emoji from '../../images/Logo-erreur.png'

import Home from './Home'

export default function Erreur() {
  return (
    
    <div>
      <section className="page-erreur">
        <div>
          <Link to={'/'} className='Logo'><img src={Logo} ></img></Link>
        </div>
        <div className='bloc-erreur'>
        <img src={Emoji}></img>
        <h1>Erreur 404</h1>
        <p>Il semblerait que vous soyez perdu... <br></br>
        Voici le chemin pour revenir en lieu sûr!</p>
        <Link to={'/'} className='Bouton-erreur'><img src={Bouton}></img></Link>
        </div>
    </section>
    </div>
  )
}
