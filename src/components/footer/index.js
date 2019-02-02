import React, { Component, Fragment } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
       <div className='footer-wrap'>
        <div className='content-wrap'>
          <span>Copyright ©  2016 - 2019 qvlang &  版权所有</span> | 
          <span> <a href='https://github.com/qvlang/qvblog' target='_blank'>网站源码Github</a></span>
        </div>
       </div>
      </Fragment>
    )
  }
}