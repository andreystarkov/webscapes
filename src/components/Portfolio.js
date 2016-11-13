import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { fetchPortfolio } from '../actions'

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }
  componentWillMount() {
      const { fetchPortfolio } = this.props;
      fetchPortfolio();
  }
  render(){
    console.log('Portfolio: ', this.props);
    return(
       <section>
        <h2>...</h2>
       </section>
    )
  }
}

function mapStateToProps(state) {
    const portfolio = state.portfolio;
    return {
        portfolio: portfolio
    };
}

export default connect(
    mapStateToProps,
    { fetchPortfolio }
)(Portfolio);
