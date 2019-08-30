/**
 * Filename: AtrctivoTuristico.js
 * Author: gaboq98@gmail.com
 * Date: 28/8/2019
 * Description: Atractivo Turistico component 
 */
import React from 'react';
import './styles.scss'
import { Container, Row, Col, Carousel } from "react-bootstrap";

class AtrctivoTuristico extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Jardin Botanico Lankaster",
      images: ["./../../assets/img/black-square.png", "./../../assets/img/lankaster2.png", "./../../assets/img/lankaster3.jpg"],
    }
  }

  renderCarousel(imgList) {
    return(
      <Carousel>
      {imgList.map(item => (
          <Carousel.Item key={item.id}>
            <img
              className="img d-block w-100"
              src={item}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{this.state.name}</h3>
              {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
    
  }

  render() {
    return (
      <div className="atrctivoTuristico">
        <Container>
          {this.renderCarousel(this.state.images)}
          <Row>
            <Col className="atrctivoTuristico">
              <h4>{this.state.name}</h4>
            </Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
          
        </Container>
      </div>
    )
  }
}

export default AtrctivoTuristico;