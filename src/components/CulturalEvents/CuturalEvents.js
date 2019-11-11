/**
 * Filename: CulturalEvents.js
 * Author: email
 * Date: 
 * Description: CulturalEvents component 
 */
import React from 'react';
import './styles.scss';
import Event from './Event/index';
import Header from './../Header/index'
import Footer from './../Footer/index';

import { getEvents } from '../../server/api-calls';

class CulturalEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      monthNames: ["Ene", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"]
    }
  }
  const ;
  componentDidMount() {
    this.onGetEvents();
  }

  setData(eventsL){
    return new Promise((resolve, reject) => {
      let evensAll = [];
      
      eventsL.forEach(event => {
        const dateAll = new Date(event.date);
        const month = this.state.monthNames[dateAll.getMonth()];
        const date = dateAll.getDay();
        const time = 0;
        const period = 'a.m.'
        const name = event.name;
        const type = event.type;
        const newEvent = {month, date, time, period, name, type};
        evensAll.push(newEvent);
      });
      
      if(evensAll){
        resolve(evensAll);
      } else {
        reject();
      }
    });
  }

  onGetEvents() {
    getEvents(
      result => {
        this.setState({events: result.data});
        this.setData(result.data).then((succ) => {
          this.setState({events: succ});
        });
      }
    );
  }

  render() {
    return (
      <div>
        <Header></Header>
      <div className="events">
      <p className="events__title">Agenda Cultural</p>
      <div className="events__grid">
      {this.state.events.map((event) => (
        // eslint-disable-next-line react/jsx-key
        <Event
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