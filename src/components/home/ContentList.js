import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Axios from '@/axios';

export default class ContentList extends Component {
  render () {
    const {articles, author } = this.props;
    return (
      <Fragment>
      {
        articles.map((item)=>(
          <div className='list-wrap' key={item._id}> 
            <h3 className='list-title'>
              <Link to={'/detail/' + item._id}>
                {item.title}
              </Link>
            </h3>
            {
              item.author === author?<span className='delete-article' onClick={this.handleDelete.bind(this,item._id)}><i className='iconfont'>&#xe645;</i></span>: null
            }
            <div className='list-class'>
              <span className='span-all'><i className='iconfont'>&#xe62f;</i>{item.author}</span>
              <span className='span-all'>{item.mode}</span>
              <span className='span-all'><i className='iconfont'>&#xe74f;</i>发布时间</span>
            </div> 
            <div className='list-content'>
              <img src='http://www.qinblog.net/Public/Upload/2018-05-24/ee15e4afee5bd6c0a6cf161c1e151ef6_thumb.png' alt='人物形象' />
              <div className='show-content' dangerouslySetInnerHTML = {{ __html:item.content }}></div>
            </div>
            <div className='list-commit'>
              <span className='span-all'><i className='iconfont'>&#xe7a5;</i>浏览</span>
              <span className='span-all'><i className='iconfont'>&#xe641;</i>赞</span>
              <span className='span-all'><i className='iconfont'>&#xe642;</i>评论</span>
            </div>
          </div>
        ))
      }
    </Fragment>
    )
  }
  handleDelete (id) {
    Axios.post('/article/delete',{id})
    .then(res=>{
      const {success} = res.data;
      //删除成功则更新前端文章数组将删除文章从中删除
      if(success) {
        this.props.deleteArticle(id);
      }
    })
  }
}