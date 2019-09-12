/**
 * Filename: HomePage.js
 * Author: email
 * Date: 
 * Description: Home page component 
 */
import React from 'react';
import './styles.scss'
// import Form from './../Form/index'
import Header from './../Header/index'
import Footer from './../Footer/index';
import CulturalEvents from './../CulturalEvents/index'
import AtractivoTuristico from './../AtractivoTuristico/index';

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
        <AtractivoTuristico />
        {/* <CulturalEvents></CulturalEvents> */}
        {/* <Form></Form> */}
        <Footer></Footer>
      </div>
    )
  }
}

export default (HomePage);