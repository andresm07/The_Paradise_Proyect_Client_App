/**
 * Filename: tramites.js
 * Author: solkopper16@gmail.co,
 * Date: 
 * Description: Tramites y servicios
 */
import React from 'react';
import './styles.scss';

import Header from './../Header/index';
import Footer from './../Footer/index';
import descarga from './../../assets/img/download.svg';
import doc from './../../assets/img/doc.svg';
 
class Tramites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
        <div>
        <Header></Header>
            <div className="tramites">
                <div className= "tramites__titulo">Trámites y Servicios</div>
                <div className= "tramites__info">
                    <img className="tramites__info__descarga" src = {descarga}></img>
                    <div className= "tramites__info__texto">Descarga de formularios:</div> 
                </div>
                <div className= "tramites__patentes">
                    <div className= "tramites__patentes__raya"></div>
                    <div className= "tramites__patentes__descargas">
                        <div className= "tramites__patentes__descargas__linea1">
                        <div className= "tramites__patentes__descargas__linea1__raya"></div>
                        <img className= "tramites__patentes__descargas__linea1__doc" src = {doc}></img>
                        <a className="tramites__patentes__descargas__linea1__texto" href= './../../assets/docs/Patente Licor.docx' download>Patente de licores</a>
                        </div>
                        <div className= "tramites__patentes__descargas__linea2">
                        <div className= "tramites__patentes__descargas__linea2__raya"></div>
                        <img className= "tramites__patentes__descargas__linea2__doc" src = {doc}></img>
                        <a className="tramites__patentes__descargas__linea2__texto" href= './../../assets/docs/Patente Comercial.doc' download>Patente comercial</a>
                        </div>
                        <div className= "tramites__patentes__descargas__linea3">
                        <div className= "tramites__patentes__descargas__linea3__raya"></div>
                        <img className= "tramites__patentes__descargas__linea3__doc" src = {doc}></img>
                        <a className="tramites__patentes__descargas__linea3__texto" href= './../../assets/docs/Cómo hacer un barómetro.docx' download>Patente profesional</a>
                        </div>
                    </div>
                </div>
                     
            </div>
      <Footer></Footer>
      </div>
    )
  }
}

export default (Tramites);