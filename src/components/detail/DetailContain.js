import React, { Component } from 'react'
import DetailShow from './DetailShow'
import Axios from '../../axios'

export default class DetailContain extends Component {
  constructor (props) {
    super(props);
    this.state ={
      articles: {}
    }
  }
  componentDidMount () {
    Axios.get('/article',{id: this.props.id})
    .then(res=>{
      const { success, articles,message} = res.data;
      if(success) {
        this.setState({
          articles
        })
      }
    })
  }
  render () {
    return (
      <DetailShow click={this.handleClick} articles={this.state.articles} />
    )
  }
  handleClick () {
    console.log('1');
  }
}