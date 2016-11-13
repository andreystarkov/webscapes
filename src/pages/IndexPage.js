import React, { Component } from 'react'
import Portfolio from '../components/Portfolio'
import Contacts from '../components/Contacts'
import Header from '../components/Header'

export default class IndexPage extends Component {
    render() {
        return (
            <div>
              <Header />
              <Portfolio />
              <Contacts />
            </div>
        );
    }
}


