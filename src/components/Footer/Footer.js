/**
 * Filename: Footer.js
 * Author: kristalduran97@gmail.com
 * Date: 08/31/2019
 * Description: Footer component 
 */
import React from 'react';
import './styles.scss'
import Contact from './Contact/index';
import OfficeHour from './OfficeHour/index';
import SocialNetwork from './SocialNetworks/index';

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="footer">
        <div className="footer__content">
          <Contact></Contact>
          <OfficeHour></OfficeHour>
          <SocialNetwork></SocialNetwork>
        </div>
      <div className="footer__line">
        <div className="footer__line__first">© 2019 Derechos reservados Municipalidad de Paraíso.</div>
        <div className="footer__line__second"></div>
      </div>
      </div>
    )
  }
}

export default Footer;