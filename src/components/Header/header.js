/**
 * Filename: Header.js
 * Author: solkopper16@gmail.com
 * Date: 28/08/2019
 * Description: Header
 */
import React from 'react';
import './styles.scss'
import montaña from './../../assets/img/montaña.png';
import escudo from './../../assets/img/escudo.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="header">
        
        <div className = "header__back">
          {/* <img className="header__back__imagen" src = {montaña}></img> */}
          <img className="header__back__escudo" src = {escudo}></img>
          <p className="header__back__name">MUNICIPALIDAD DE PARAÍSO</p>
        </div>

        <div className= "header__menu">
          {/** <Link to= "/">*/}

          <div className = "header__menu__raya"></div>
          <p className= "header__menu__opcion"> La Municipalidad</p>
          {/*</Link>*/}

          <div className = "header__menu__raya"></div>
          <p className= "header__menu__opcion"> Quiénes Somos</p>
          <div className = "header__menu__raya"></div>
          <p className= "header__menu__opcion"> Atractivos Turísticos</p>
          <div className = "header__menu__raya"></div>
          <p className= "header__menu__opcion"> Agenda Cultural</p>
          <div className = "header__menu__raya"></div>
          <p className= "header__menu__opcion"> Contáctenos</p>
          <div className = "header__menu__raya"></div>
          <p className= "header__menu__opcion"> Patentes</p>
          <div className = "header__menu__raya"></div>
        </div>
      </div>
    )
  }
}

export default Header;