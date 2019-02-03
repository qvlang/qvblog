import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '@/style/index.less'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: ['首页','消息','留言','关于我','我的博客','设置']
    }
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
       <div className='nav-wrap'>
         <div className='ul-wrap clearfix'>
          <ul onClick={this.handleClick}>
            {
              this.state.navList.map((item, index) => {
                return <li className='nav-list' key={index}>{item}</li>
              })
            }
          </ul>
         </div>
       </div>
    )
  }
  handleClick (e) {
    const { history, loginStaus } = this.props;
    switch (e.target.innerText) {
      case '首页': 
        history.push('/')
        break;
      case '我的博客':
      if(loginStaus){
        history.push('/blog')
      }else{
        history.push('/')
      }
        break;
      default :
        break;
    }
  }
}
export default withRouter(Header);