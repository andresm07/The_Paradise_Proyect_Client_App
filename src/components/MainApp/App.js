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
    this.state = {code:queryString.parse(this.props.location.search).code}
  }
  render() {
    return (
      <div>
        <HomePage code={this.state.code}
        userData={this.props.location.state}/>
    </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default (App);
