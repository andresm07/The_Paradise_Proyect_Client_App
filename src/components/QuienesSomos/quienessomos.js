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

class QuienesSomos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="quienessomos">

          <div className= "quienessomos__nosotros">
            <div className= "quienessomos__nosotros__visionmision">

              <p className= "quienessomos__nosotros__visionmision__visionTitulo"> Visión</p>
              <p className= "quienessomos__nosotros__visionmision__visiontexto">“Paraíso, cantón ecológico libre de transgénicos, preocupado por su gente, consciente de su identidad, orgulloso de su cultura, mejora la calidad de vida de su ciudadanía a partir de los recursos humanos, materiales, y paisajísticos disponibles en el cantón”</p>
              <p className= "quienessomos__nosotros__visionmision__misionTitulo">Misión</p>
              <p className= "quienessomos__nosotros__visionmision__misiontexto">“Desarrollar las capacidades institucionales y ciudadana disponibles en el cantón Paraíso, que mejoren la calidad de vida de sus habitantes en el marco del desarrollo humano, social, económico, político, y cultural, con equidad de género”</p>
            </div>
            <img className="quienessomos__nosotros__fiestas" src = {fiestas}></img>
          </div>
          <div className= "quienessomos__resena">
            <img className="quienessomos__resena__mapa" src = {mapa}></img>
            <div className= "quienessomos__resena__historia">
              <p className= "quienessomos__resena__historia__titulo">Reseña Histórica</p>
              <p className= "quienessomos__resena__historia__texto">Ujarrás fue lo que dio origen a lo que actualmente se conoce como Paraíso, debido a que en 1832 el Jefe de Estado, José Rafael Gallegos, ordenó el traslado de esa población al territorio conocido como Llanos de Santa Lucía.<br/><br/>
En ley No. 63 de 4 de noviembre de 1825, Ujarrás constituyó un distrito del Departamento Oriental, uno de los dos en que se dividió en esa oportunidad el territorio de Costa Rica. El distrito estaba conformado por la villa de igual nombre y los pueblos de Tucurrique y Orosi.<br/><br/>
Mediante el decreto número 2.188 del 18 de diciembre de 1957, en la administración de José Figueres Ferrer se declara a la Villa del Paraiso como ciudad.<br/><br/>
Paraíso fue uno de los primeros lugares en ser colonizado cuando llegaron los españoles, aún hoy se conservan la iglesia colonial de Orosi y las ruinas de Ujarrás como recuerdo de la colonización española.</p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default QuienesSomos;