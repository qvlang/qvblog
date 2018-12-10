import React, { Component, Fragment } from 'react'
import { Col, Row} from 'antd'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col span='3'>
          left
          </Col>
          <Col span='21'>rights</Col>
        </Row>
      </Fragment> 
    )
  }
} 