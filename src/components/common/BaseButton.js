import React from 'react'
import { Link } from 'react-router-dom'

export default (props)=>{
  if(props.loginStaus){  
    return (
      <div className='publish-mes'>
      <Link to='/message'>
        <div className='publish-btn'>发布话题</div>
      </Link>
    </div>
    )
  }
  return null
}