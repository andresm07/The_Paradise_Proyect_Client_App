/**
 * Filename: QuienesSomos.js
 * Author: solkopper16@gmail.com
 * Date: 28/08/2019
 * Description: Quienes Somos
 */
import React from 'react';
import './styles.scss'
import escudo from './../../assets/img/header.png';
import { Link } from 'react-router-dom';

class QuienesSomos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="quienessomos">
        <p className= "quienessomos__visionTitulo"> Visión</p>
        <p className= "quienessomos__vision">::::::::</p>
      </div>
    )
  }
}

export default QuienesSomos;