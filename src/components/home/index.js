import React from 'react'

//UI组件
export default (props)=>{
  return (
    <div className='content-wrap'>
      <div className='container clearfix'>
        <div className='left-content'>
          {props.children[0]}
          {props.children[1]}
          {props.children[2]}
        </div>
        <div className='right-content'>
          {props.children[3]}
          {props.children[4]}
        </div>
      </div>
    </div>
  )
}