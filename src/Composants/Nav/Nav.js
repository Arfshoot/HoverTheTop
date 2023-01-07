import React from 'react'
import TraitV from '../../images/Trait.png'
import './Nav.scss'
// Ajout de la couleur en fonction de la section dynamique



export default function Nav() {

  return (
        <div className='placenav'  id='menuToggle'>
          <nav className='navbar'>
          
        <ul className='nav-menu'>
          <a href="#Accueil" className="nav nav-link"><li className='nav-item'><span>Accueil</span> <i class="fa-solid fa-circle"></i></li></a>
          <div className="trait-nav"><img src={TraitV} alt='Accueil' /></div>
          <a href="#Qui-sommes-nous" className="nav2 nav-link"  ><li className='nav-item'><span>Qui sommes nous?</span> <i class="fa-solid fa-circle"></i></li></a>
          <div className="trait-nav"><img src={TraitV} /></div>
          <a href="#Nos-réalisations" className="nav3 nav-link"><li className='nav-item'><span>Nos réalisations</span> <i class="fa-solid fa-circle"></i></li></a>
          <div className="trait-nav"><img src={TraitV} /></div>
          <a href="#Nos-offres" className="nav4 nav-link"><li className='nav-item'><span>Nos offres</span> <i class="fa-solid fa-circle"></i></li></a>
          <div className="trait-nav"><img src={TraitV} /></div>
          <a href="#Contact" className="nav5 nav-link"><li className='nav-item'><span>Contact</span> <i class="fa-solid fa-circle"></i></li></a>
        </ul>
        </nav>
</div>
  )
}
