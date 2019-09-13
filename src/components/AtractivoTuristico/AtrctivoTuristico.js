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
import 'bootstrap/dist/css/bootstrap.css';

class AtrctivoTuristico extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Jardin Botanico Lankaster",
      email:"paraiso@gmail.com",
      phone: "2266-4433",
      location: "¿Cómo llegar?",
      hours: "Abierto todos los días de 8:30 a.m a 4:30 p.m",
      images: ["./../../assets/img/black-square.png", "./../../assets/img/lankaster2.png", "./../../assets/img/lankaster3.jpg"],
      info: "La historia del Jardín Botánico Lankester se remonta a la década de 1940 cuando el naturalista británico Charles H. Lankester se interesó en el cultivo y estudio de las plantas epífitas de Costa Rica.\nComo botánico aficionado colaboró con los más destacados orquideólogos de la época y dedicó su vida a la creación de un jardín privado en su finca. Después de su muerte la importancia de preservar su jardín fue evidente.\nA través de los esfuerzos conjuntos de la American Orchid Society y de la Stanley Smith Horticultural Trust, el jardín de ”don Carlos” fue donado a la Universidad de Costa Rica el 2 de marzo de 1973 con el compromiso de transformarlo en un jardín botánico.  Con dedicación y mucho esfuerzo el Jardín Botánico Lankester ha llegado a convertirse en una de las instituciones botánicas más activas e importantes del Neotrópico.",
    }
  }

  render() {
    return (
      <div className="atrctivoTuristico">
          <CustomCarousel imgList={this.state.images}/>
          <Row>
            <Col>
              <h1>{this.state.name}</h1>
              <h4>Información</h4>
            </Col>
          </Row>
          <Row>
            <Col sm={5} >
            </Col>
            <Col sm={7}>
              <Container style={{ width: '450px'}}>
                <p>{this.state.info}</p>
              </Container>
            </Col>
          </Row>
          <ContactCard email={this.state.email} phone={this.state.phone} location={this.state.location} hours={this.state.hours}/>
      </div>
    )
  }
}

export default AtrctivoTuristico;