import React, { Component } from 'react'

import RouteTransition from '../animation/RouteTransition'

export default class PageContainer extends Component {
  render() {
      return (
        <div className="page-wrapper">
          <RouteTransition pathname={ location.pathname }>
              {this.props.children}
          </RouteTransition>
        </div>
      );
  }
}

