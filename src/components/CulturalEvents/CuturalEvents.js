/**
 * Filename: CulturalEvents.js
 * Author: email
 * Date: 
 * Description: CulturalEvents component 
 */
import React from 'react';
import './styles.scss';
import Event from './Event/index';
import eventsList from './../../config/events.json';
import Header from './../Header/index'
import Footer from './../Footer/index';

class CulturalEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Header></Header>
      <div className="events">
      <p className="events__title">Agenda Cultal</p>
      <div className="events__grid">
      {eventsList.map((event) => (
        // eslint-disable-next-line react/jsx-key
        <Event
          imagen={event.img}
          date={event.date}
          month={event.month}
          name={event.name}
          type={event.type}
          time={event.time}
          period={event.period}
        ></Event>
      ))}
      </div>
      </div>
      <Footer></Footer>
      </div>
    )
  }
}

export default CulturalEvents;