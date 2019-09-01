/**
 * Filename: SocialNetwork.js
 * Author: kristalduran97@gmail.com
 * Date: 08/31/2019
 * Description: OfficeHour component 
 */
import React from 'react';
import './styles.scss'
import facebook from './../../../assets/img/facebook.png';
import instagram from './../../../assets/img/instagram.png';
import twitter from './../../../assets/img/twitter.png';
import youtube from './../../../assets/img/youtube.png';

class SocialNetwork extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="social">
        <a href="https://www.facebook.com/MuniParaiso/"><img className="social__img" src={facebook}></img></a>
        <a href="https://www.instagram.com/paraisomuni/"><img className="social__img" src={instagram}></img></a>
        <a href="https://twitter.com/ParaisoMuni"><img className="social__img" src={twitter}></img></a>
        <a href="https://www.youtube.com/channel/UCGaodcKWCa5iv-ewKqEh2jg"><img className="social__img" src={youtube}></img></a>
      </div>
    )
  }
}

export default SocialNetwork;