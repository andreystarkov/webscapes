import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-bootstrap'
import ASLogo from '../svg/ASLogo'

import './Header.less'


export default class Header extends Component {
  render(){
    return(
      <header className="top-header">
        <Grid>
          <Col xs={12} md={4}>
            <div className="top-logo">
              <ASLogo />
            </div>
          </Col>
          <Col md={8} xs={12}>
            <div className="top-caption">
              <p>Каждый день мы создаем умные, эстетически прекрасные интернет-инструменты для вашего бизнеса.
              Мы расскажем о вашем бренде с помощью высокотехнологичного цифрового искусства, созданного с любовью.</p>
            </div>
          </Col>
        </Grid>
      </header>
    )
  }
}
