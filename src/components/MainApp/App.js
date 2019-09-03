/**
 * Filename: App.js
 * Author:
 * Date: 
 * Description: App
 */
import HomePage from "../../modules/HomePage/index";
import PropTypes from "prop-types";
import React from "react";
import queryString from 'query-string';
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="home">
        <HomePage/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default (App);
