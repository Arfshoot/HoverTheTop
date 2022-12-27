import React from 'react'
import { Link } from "react-router-dom";
import Projets from './Projets.json'
import './CarteReal.scss'

export default function Liste() {
  return (
    <div className='Carte'>
    {
        Projets.map( projet=>{
            return(
                <Link to={`/Projet/${projet.id}`} className="cart" key={projet.id} >
                    <figure className="img-box">
                      <img src={projet.cover}  alt='img-logment' className="img-all"></img>
                      <figcaption className='text-box'> 
                      <h3>{projet.title}</h3> 
                      </figcaption>
                    </figure>
                </Link>
            )
        })            }
</div>
)
}
