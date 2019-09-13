/**
 * Filename: CustomCarousel.js
 * Author: gaboq98@gmail.com
 * Date: 31/08/2019
 * Description: Contact card component 
 */
import React from 'react';
import './styles.scss'
import {ListGroup, Card } from "react-bootstrap";
import Email from './../../../assets/img/001-internet.png'

class ContactCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: this.props.email,
      phone: this.props.phone,
      location: this.props.location,
      hours: this.props.hours,
    }
  }

  render() {
    return (
      <div className="contactCard">
        <Card style={{ width: '18rem' }}>
          <Card.Header>Contacto</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <img
                className="icon"
                src={Email}
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
              <a href={this.state.location}>
                ¿Cómo llegar?
              </a>
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
      </div>
    )
  }
}

export default ContactCard;