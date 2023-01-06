import React, {useState, useEffect, useRef} from 'react'
import TraitV from '../../images/Trait.png'
import './Nav.scss'
// Ajout de la couleur en fonction de la section dynamique
const nav = document.querySelector('.placenav')
console.log(nav)



export default function Nav() {
window.addEventListener('scroll', () => {

    if (window.scrollY > 1715) {
        nav.classList.add('scroll')

        if (window.scrollY > 2570) {
          nav.classList.add('scroll2')

          if (window.scrollY > 4240) {
            nav.classList.add('scroll3')

            if (window.scrollY > 5207) {
              nav.classList.add('scroll4')
            }else{nav.classList.remove('scroll4')}
          }else{nav.classList.remove('scroll3')}
        }else{nav.classList.remove('scroll2')} 
    } 
    else{
        nav.classList.remove('scroll')     
    } 
    
})
  return (
    <div className='placenav' id='NAV'>
    
        <ul>
          <a href="#Accueil" className="nav"><li><span>Accueil</span> <i class="fa-solid fa-circle"></i></li></a>
          <div className="trait-nav"><img src={TraitV} /></div>
          <a href="#Qui-sommes-nous" className="nav"><li><span>Qui sommes nous?</span> <i class="fa-solid fa-circle"></i></li></a>
          <div className="trait-nav"><img src={TraitV} /></div>
          <a href="#Nos-réalisations" className="nav"><li><span>Nos réalisations</span> <i class="fa-solid fa-circle"></i></li></a>
          <div className="trait-nav"><img src={TraitV} /></div>
          <a href="#Nos-offres" className="nav"><li><span>Nos offres</span> <i class="fa-solid fa-circle"></i></li></a>
          <div className="trait-nav"><img src={TraitV} /></div>
          <a href="#Contact" className="nav"><li><span>Contact</span> <i class="fa-solid fa-circle"></i></li></a>
        </ul>
</div>
  )
}
