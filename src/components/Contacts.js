import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import { fetchPortfolio } from '../actions'

import './Contacts.less'

export default class Contacts extends Component {
  render(){
    return(
      <section>
        <Grid>
          <Row>
            <Col md={12}>
              <div className="contacts">
{/*                <div className="contact-form">
                  <input type="text" placeholder="Как с вами связаться?" />
                  <button className="button-send">Отправить контакты</button>
                </div>*/}
                <span className="skype">Skype: andrey-starkov | Mail: im@andreystarkov.ru</span>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    )
  }
}
