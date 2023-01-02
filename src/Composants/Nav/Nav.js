import React from 'react'
import { NavLink } from "react-router-dom";
import TraitV from '../../images/Trait.png'
import './Nav.scss'



export default function Nav() {

    /*const nav = document.querySelector('.placenav')
    const page1 = document.querySelector('.page1')
    let height = page1.clientHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > height ){
            nav.classList.add('scroll')
        }
        else{
            nav.classList.remove('scroll')
        }
    })*/
  return (
    <div className='placenav'>
    
        <ul>
          <a href="#haut-page1" className="nav"><li><span>Accueil</span> <i class="fa-solid fa-circle"></i></li></a>
          <div className="trait-nav"><img src={TraitV} /></div>
          <a href="#haut-page2" className="nav"><li><span>Qui sommes nous?</span> <i class="fa-solid fa-circle"></i></li></a>
          <div className="trait-nav"><img src={TraitV} /></div>
          <a href="#haut-page3" className="nav"><li><span>Nos réalisations</span> <i class="fa-solid fa-circle"></i></li></a>
          <div className="trait-nav"><img src={TraitV} /></div>
          <a href="#haut-page4" className="nav"><li><span>Nos offres</span> <i class="fa-solid fa-circle"></i></li></a>
          <div className="trait-nav"><img src={TraitV} /></div>
          <a href="#haut-page5" className="nav"><li><span>Contact</span> <i class="fa-solid fa-circle"></i></li></a>
        </ul>
</div>
  )
}
