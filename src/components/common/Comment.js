import React, {Component } from 'react';
import Axios from '../../axios'

export default class Comment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handlePublic = this.handlePublic.bind(this);
  }
  render () {
    return (
      <div className='comment-wrap clearfix'>
        <span>说点什么</span>
        <textarea className='comment-area' 
          value={this.state.value}
          onChange= {this.handleChange}
        >
        </textarea>
        <div className='pub-comment' onClick={this.handlePublic}>发表</div>
      </div>
    )
  }
  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }
  handlePublic () {
    this.setState({
      value: ''
    })
    if(this.state.value) {
      Axios.post('http://localhost:8888/api/message',{
        id: this.props.id,
        content: this.state.value,
        publisher: this.props.name
      }).then(res=>{
      })
    }
  }
}
