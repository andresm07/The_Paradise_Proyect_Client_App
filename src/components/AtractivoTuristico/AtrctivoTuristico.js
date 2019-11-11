/**
 * Filename: AtrctivoTuristico.js
 * Author: gaboq98@gmail.com
 * Date: 28/8/2019
 * Description: Atractivo Turistico component 
 */
import React from 'react';
import './styles.scss'
import { Container, Row, Col } from "react-bootstrap";
import CustomCarousel from './Carousel/index'
import ContactCard from './ContactCard/index'
import Header from './../Header/index';
import Footer from './../Footer/index';

import { getAtractivo } from '../../server/api-calls';

class AtrctivoTuristico extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.location.state.nombre,
      email: this.props.location.state.email,
      phone: this.props.location.state.telefono,
      location: this.props.location.state.ubicacion,
      hours: this.props.location.state.horario,
      images: this.props.location.state.imgList,
      info: this.props.location.state.info
    }
  }

    onGetAtractivo() {
      getAtractivo(
        result => {
          
        },
        err => {}
      );
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="atrctivoTuristico">
            <CustomCarousel imgList={this.state.images}/>
            <Row>
              <Col className="contenedorTitulo">
                <h1>{this.state.name}</h1>
                <h4>Información</h4>
              </Col>
            </Row>
            <Row>
              <Col sm={7} style={{ paddingLeft: '210px'}} >
                <ContactCard email={this.state.email} phone={this.state.phone} location={this.state.location} hours={this.state.hours}/>
              </Col>
              <Col sm={5} className="columna">
                <div style={{ width: '450px'}}>
                  <p>{this.state.info}</p>
                </div>
              </Col>
            </Row>
            
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default AtrctivoTuristico;