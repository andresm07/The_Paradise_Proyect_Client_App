/**
 * Filename: HomePage.js
 * Author: email
 * Date: 
 * Description: Home page component 
 */
import React from 'react';
import './styles.scss'
import AtrctivoTuristico from '../AtractivoTuristico/AtrctivoTuristico';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="home">
        <AtrctivoTuristico />
      </div>
    )
  }
}

export default HomePage;