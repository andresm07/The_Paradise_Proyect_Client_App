/**
 * Filename: HomePage.js
 * Author: email
 * Date: 
 * Description: Home page component 
 */
import React from 'react';
import './styles.scss'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="home">
        Hello world
      </div>
    )
  }
}

export default HomePage;