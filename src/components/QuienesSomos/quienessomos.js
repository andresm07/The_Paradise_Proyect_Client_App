/**
 * Filename: QuienesSomos.js
 * Author: solkopper16@gmail.com
 * Date: 28/08/2019
 * Description: Quienes Somos
 */
import React from 'react';
import './styles.scss';

import Header from './../Header/index';
import Footer from './../Footer/index';
import fiestas from './../../assets/img/nosotros/fiestasdecartago3.png';
import mapa from './../../assets/img/nosotros/Distritos.png';

import { getMision, getResena, getVision } from '../../server/api-calls';

class QuienesSomos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mision: '',
      resena: '',
      vision: '',
    }
  }

  componentDidMount() {
    this.onGetMision();
    this.onGetVision();
    this.onGetResena();
  }

  onGetMision() {
    getMision (
      response => {
        if (response.data) {
          this.setState({mision:response.data.info});
        }
      },
      error => {
        throw error;
      }
      )
  }

  onGetVision() {
    getVision (
      response => {
        if (response.data) {
          this.setState({vision:response.data.info});
        }
      },
      error => {
        throw error;
      }
      )
  }

  onGetResena() {
    getResena (
      response => {
        if (response.data) {
          this.setState({resena:response.data.info});
        }
      },
      error => {
        throw error;
      }
      )
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="quienessomos">

          <div className= "quienessomos__nosotros">
            <div className= "quienessomos__nosotros__visionmision">

              <p className= "quienessomos__nosotros__visionmision__visionTitulo"> Visión</p>
              <p className= "quienessomos__nosotros__visionmision__visiontexto">{this.state.vision}</p>
              <p className= "quienessomos__nosotros__visionmision__misionTitulo">Misión</p>
              <p className= "quienessomos__nosotros__visionmision__misiontexto">{this.state.mision}</p>
            </div>
            <img className="quienessomos__nosotros__fiestas" src = {fiestas}></img>
          </div>
          <div className= "quienessomos__resena">
            <img className="quienessomos__resena__mapa" src = {mapa}></img>
            <div className= "quienessomos__resena__historia">
              <p className= "quienessomos__resena__historia__titulo">Reseña Histórica</p>
              <p className= "quienessomos__resena__historia__texto">{this.state.resena}</p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default QuienesSomos;