/**
 * Filename: AtrctivoTuristico.js
 * Author: gaboq98@gmail.com
 * Date: 28/8/2019
 * Description: Atractivo Turistico component 
 */
import React from 'react';
import './styles.scss'
import { Container, Row, Col, Carousel, ListGroup, Card } from "react-bootstrap";

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

  renderCarousel(imgList) {
    return(
      <Carousel>
      {imgList.map( (item, key) => (
          <Carousel.Item key={key}>
            <img
              className="img d-block w-100"
              src={item}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

  renderContactCard() {
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Header>Contacto</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <img
            className="icon"
            src="./../../assets/img/001-internet.png"
            alt="First slide"
          />
          {this.state.email}
        </ListGroup.Item>
        <ListGroup.Item>
          <img
            className="icon"
            src="./../../assets/img/003-phone-book.png"
            alt="First slide"
          />
          {this.state.phone}
        </ListGroup.Item>
        <ListGroup.Item>
          <img
            className="icon"
            src="./../../assets/img/002-placeholder.png"
            alt="First slide"
          />
          {this.state.location}
        </ListGroup.Item>
        <ListGroup.Item>
          <img
            className="icon"
            src="./../../assets/img/004-clock.png"
            alt="First slide"
          />
          {this.state.hours}
        </ListGroup.Item>
      </ListGroup>
    </Card>
    )
  }

  render() {
    return (
      <div className="atrctivoTuristico">
        <Container>
          {this.renderCarousel(this.state.images)}
          <Row>
            <Col className="atrctivoTuristico">
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
          {this.renderContactCard()}
        </Container>
      </div>
    )
  }
}

export default AtrctivoTuristico;