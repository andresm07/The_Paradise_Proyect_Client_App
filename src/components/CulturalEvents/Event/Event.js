/**
 * Filename: Event.js
 * Author: email
 * Date: 
 * Description: Event page component 
 */
import React from 'react';
import './styles.scss'
import imagen from './../../../assets/img/agenda/evento.png';

class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="event">
        <img className="event__image" src={imagen}></img>
        <div className="event__date">
          <div className="event__date__day">{this.props.date}</div>
          <div className="event__date__month">{this.props.month}</div>
        </div>
        <div className="event__info">
          <div className="event__info__name">{this.props.name}</div>
          <div className="event__info__type">{this.props.type}</div>
        </div>
        <div className="event__time">
          <div className="event__time__hour">{this.props.time}</div>
          <div className="event__time__period">{this.props.period}</div>
        </div>
      </div>
    )
  }
}

export default Event;