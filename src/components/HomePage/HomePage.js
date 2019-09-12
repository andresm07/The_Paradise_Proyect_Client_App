/**
 * Filename: HomePage.js
 * Author: email
 * Date: 
 * Description: Home page component 
 */
import React from 'react';
import './styles.scss';
import Header from './../Header/index';
import Footer from './../Footer/index';
import Home from './../Home/index'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="home">
        <Header></Header>
        <Home/>
        <Footer></Footer>
      </div>
    )
  }
}

export default (HomePage);