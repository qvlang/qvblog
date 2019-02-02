import React from 'react'

export default (props)=>{
  const {articles} = props;
  return (
    <div className='detail-wrap'>
      <div className='detail-title'>
        <h3>{articles.title}</h3>
        <div>
          <span><i className='iconfont'>&#xe62f;</i>{articles.author}</span>
        </div>
        <div className='btn-position clearfix' onClick={props.click}>收藏</div>
      </div>
      <div className='detail-content'>
        <div dangerouslySetInnerHTML = {{ __html:articles.content }}></div>
      </div>
    </div>
  )
}