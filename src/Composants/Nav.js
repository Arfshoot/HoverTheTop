import React from 'react'
import './Nav.scss'
import TraitV from '../images/Trait.png'

// scrool de page 1 a 2
window.addEventListener("scroll", () =>{
    
    const nav = document.querySelector('.placenav');
    const section = document.querySelector('.page2');
    let height = section
    if (window.scrollY = height ) {
        nav.classList.add('scroll')
        
    }    
})
// scroll de page 2 a 3 

export default function Nav() {
  return (
    <div>
        
        <ul className='placenav'>
            <a href="#haut-page1" className="nav"><li><span>Accueil</span> <i class="fa-solid fa-circle"></i></li></a>
            <div className="trait-nav"><img src={TraitV} /></div>
            <a href="#haut-page2" className="nav"><li><span>Qui sommes-nous?</span> <i class="fa-solid fa-circle"></i></li></a>
            <div className="trait-nav"><img src={TraitV} /></div>
            <a href="#haut-page3" className="nav"><li><span>Réalisations</span> <i class="fa-solid fa-circle"></i></li></a>
            <div className="trait-nav"><img src={TraitV} /></div>
            <a href="#haut-page4" className="nav"><li><span>Nos offres</span> <i class="fa-solid fa-circle"></i></li></a>
            <div className="trait-nav"><img src={TraitV} /></div>
            <a href="#haut-page5" className="nav"><li><span>Contact</span> <i class="fa-solid fa-circle"></i></li></a>
        </ul>
    </div>
  )
}
