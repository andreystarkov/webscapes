import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import { fetchPortfolio } from '../actions'

import './Portfolio.less';

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

    var Source = this.props.portfolio.items || false,
        Items;

    if ( Source ) {
        console.log('Source: ', Source);
        Items = Source.map( (obj,key) => {
        console.log('Item: ',obj);
        return(
          <Col xs={12} md={6} lg={6} key={key}>
            <div className="portfolio-item">
              <div className="bg-image" style={{backgroundImage: 'url('+obj.full+')'}}>

              </div>
            </div>
          </Col>
        )
      });
    }

    return(
       <section className="section-portfolio">
        <Grid fluid={{true}}>
          <Row>
            {Items || ''}
          </Row>
        </Grid>
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
