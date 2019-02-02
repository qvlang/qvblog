import React, {Component, Fragment } from 'react';
import Axios from '../../axios'

export default class ShowComment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      message: []
    }
  }
  componentDidMount () {
    Axios.get('http://localhost:8888/api/message',{
      id: this.props.id
    }).then(res=>{
      const { comment, success } = res.data;
      if(success) {
        this.setState({
          message: comment
        })
      }
    })
  }
  render () {
    return (
      <Fragment>
      {
        this.state.message.map(item=>(
          <div className='show-wrap' key={item._id}>
            <div className='show-avatar'>
              <img className='avatar-img' src='http://www.qinblog.net/Public/Upload/2018-05-24/ee15e4afee5bd6c0a6cf161c1e151ef6_thumb.png' alt='头像' />
            </div>
            <div className='show-content'>{item.content}</div>
            <div className='show-icon'>
              <div className='go-back'>
                <span className='show-gap'><i className='iconfont'>&#xe642;</i>回复</span>
                <span><i className='iconfont'>&#xe641;</i>赞</span>
              </div>
            </div>
          </div>
        ))
      }
      </Fragment>
    )
  }
}
