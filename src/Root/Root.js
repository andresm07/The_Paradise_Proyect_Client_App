/**
 * Filename: Root.js
 * Author: 
 * Date: 
 * Description: Call roots 
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainApp from "../modules/MainApp/MainApp";
import { CookiesProvider } from 'react-cookie'
import store from './store/store'

export default class Root extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <CookiesProvider>
        <Provider store={store}>
          <Router>
              <Switch>
                <Route path="/" component={MainApp} />
              </Switch>
            </Router>
        </Provider>
      </CookiesProvider>
    );
  }
}
