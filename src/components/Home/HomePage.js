/**
 * Filename: HomePage.js
 * Author: email
 * Date: 
 * Description: Home page component 
 */
import React from 'react';
import './styles.scss';
import { Row, Col } from "react-bootstrap";
import Carousel from '../Home/Carousel/index';
import Img1 from '../../assets/img/home/0.jpg';
import Img2 from '../../assets/img/home/1.jpg';
import Img3 from '../../assets/img/home/2.jpg';
import Img4 from '../../assets/img/home/0.jpg';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: ["./../../assets/img/home/0.jpg", "./../../assets/img/home/1.jpg", "./../../assets/img/home/2.jpg"],
      captions: ["Paraiso es un paraiso", "Yo solo sé que no sé nada", "Paraiso"],
      captions2: ["Gabriel Quesada", "Andres Miranda", "Soledad K"],
    }
  }

  render() {
    return (
      <div className="home">
        <Carousel 
          imgList={this.state.images}
          captionList={this.state.captions}
          captionList2={this.state.captions2}
        />
        <h1 className="title">Conozca Paraíso</h1>
        <div className="buttonGroup">
          <Row>
            <Col  sm={5}  className="container">
              <button className="btn">
                <img className="img" src={Img1} alt="Quienes somos"></img>
                <p className="centered">Quiénes Somos</p>
              </button>
            </Col>
            <Col sm={7}  className="container">
              <button className="btn">
              <img src={Img2} alt="Atractivos"/>
              <p className="centered">Atractivos Turísticos</p>
              </button>
            </Col>
          </Row>
          <Row>
            <Col sm={7}  className="container">
              <button className="btn">
              <img src={Img3} alt="Agenda"/>
              <p className="centered">Agenda Cultural</p>
              </button>
            </Col>
            <Col sm={5}  className="container">
              <button className="btn">
              <img src={Img4} alt="Contacto"/>
              <p className="centered">Contáctenos</p>
              </button>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default (HomePage);