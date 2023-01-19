import React from 'react'
import './Navbar.css'
import Resume from '../Resume/curriculo.pdf'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-left">
        <div className="nav-name"><a href="/">M<span>:)</span>REISS</a></div>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <Link spy={true} to='Navbar' smooth={true}>
              <li><i class="uil uil-home"></i> Home</li>
            </Link>
            <Link spy={true} to='About' smooth={true}>
              <li><i class="uil uil-user"></i> Sobre</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true}>
              <li><i class="uil uil-bag"></i> Portfólio</li>
            </Link>
          </ul>
        </div>
        <a href={Resume} download>
          <button className="button nav-button">Currículo</button>
        </a>
      </div>
    </div>
  )
}

export default Navbar