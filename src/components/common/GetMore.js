import React, {Component} from 'react'

export default class GetMore extends Component {
  render () {
    return (
      <div className='get-more' onClick={this.handleClick.bind(this)}>
        {this.props.all?'文章已到底': '加载更多'}
      </div>
    )
  }
  handleClick () {
    if(!this.props.all) {
      //更新页数
      this.props.morePage();
      // 加载更多文章
      this.props.getArticle(this.props.num + 1,3);
    }
  }
}
