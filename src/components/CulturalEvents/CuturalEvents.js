/**
 * Filename: CulturalEvents.js
 * Author: email
 * Date: 
 * Description: CulturalEvents component 
 */
import React from 'react';
import './styles.scss';
import Event from './Event/index';

class CulturalEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="events">
      <p className="events__title">Agenda Cultal</p>
      <div className="events__grid">
      <Event
        imagen=""
        date="14"
        month="Set"
        name="Desfile faroles"
        type="Cultural"
        time="5:00"
        period="p.m."
      ></Event>
      <Event
        imagen=""
        date="14"
        month="Set"
        name="Desfile faroles"
        type="Cultural"
        time="5:00"
        period="p.m."
      ></Event>
      <Event
        imagen=""
        date="14"
        month="Set"
        name="Desfile faroles"
        type="Cultural"
        time="5:00"
        period="p.m."
      ></Event>
      <Event
        imagen=""
        date="14"
        month="Set"
        name="Desfile faroles"
        type="Cultural"
        time="5:00"
        period="p.m."
      ></Event>
      <Event
        imagen=""
        date="14"
        month="Set"
        name="Desfile faroles"
        type="Cultural"
        time="5:00"
        period="p.m."
      ></Event>
      <Event
        imagen=""
        date="14"
        month="Set"
        name="Desfile faroles"
        type="Cultural"
        time="5:00"
        period="p.m."
      ></Event>
      </div>
      </div>
    )
  }
}

export default CulturalEvents;