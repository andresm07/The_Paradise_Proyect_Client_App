/**
 * Filename: OfficeHour.js
 * Author: kristalduran97@gmail.com
 * Date: 08/31/2019
 * Description: OfficeHour component 
 */
import React from 'react';
import './styles.scss'
import calendar from './../../../assets/img/calendar.png';
import clock from './../../../assets/img/clock.png';

class OfficeHour extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="hour">
      <div className="hour__data">
          <img className="hour__data__img" src={calendar}></img>
          <p className="hour__data__info">Lunes a Viernes</p>
      </div>
      <div className="hour__data">
          <img className="hour__data__img" src={clock}></img>
          <p className="hour__data__info">7:30a.m. a 4:30p.m. </p>
      </div>
      </div>
    )
  }
}

export default OfficeHour;