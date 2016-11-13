import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import configureStore from './store/configureStore'

import PageContainer from './containers/PageContainer'
import IndexPage from './pages/IndexPage'

import '../less/styles.less'

const store = configureStore();
let rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={PageContainer}>
              <IndexRoute component={IndexPage} />
          </Route>
        </Router>
    </Provider>,
    rootElement
);

