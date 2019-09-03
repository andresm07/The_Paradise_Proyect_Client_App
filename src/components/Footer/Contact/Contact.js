/**
 * Filename: Contact.js
 * Author: kristalduran97@gmail.com
 * Date: 08/31/2019
 * Description: Contact component 
 */
import React from 'react';
import './styles.scss'
import phone from './../../../assets/img/phone.png';
import mail from './../../../assets/img/mailsymbol.png';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="contact">
      <div className="contact__data">
          <img className="contact__data__img" src={phone}></img>
          <p className="contact__data__info">2574 7811</p>
      </div>
      <div className="contact__data">
          <img className="contact__data__img" src={mail}></img>
          <p className="contact__data__info">muniparaiso.go.cr</p>
      </div>
      </div>
    )
  }
}

export default Contact;