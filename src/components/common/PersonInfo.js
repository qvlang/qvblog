import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom';
import Axios from '../../axios'

export default class PersonInfo extends Component {
  constructor(props) {
    super(props);
    this.state= {
      message: ['个人信息','未登录，请登录','密码或用户名错误','请注册','用户名已存在'],
      stat: 1,
      userValue: '',
      pwdValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOut = this.handleOut.bind(this);
    this.handleChooseReg = this.handleChooseReg.bind(this);
  }
  render() {
    const { loginStaus } = this.props;
    const {message, stat} = this.state;
    return (
      <Fragment>
       <div className='person-wrap'>
         <div className='title'>{loginStaus?message[0]:message[stat]}</div> 
         <div className='content'>
           <div className='content-name'>
           {
             loginStaus?
             <img className='avatar-img' 
               src='http://www.qinblog.net/Public/Upload/2018-05-24/ee15e4afee5bd6c0a6cf161c1e151ef6_thumb.png' 
               alt='人物形象'
             />:
             <div className='input-wrap'>
              <input className='input-sty' type='text' value={this.state.userValue} placeholder='用户名' 
                onChange={(e)=>this.handleChange('userValue',e)} />
              <input className='input-sty' type='password' value={this.state.pwdValue} placeholder='密码'
                onChange={(e)=>this.handleChange('pwdValue',e)} />
              <span className='a_reg' onClick={this.handleChooseReg}>没有账号：点击注册</span>
            </div>
           }
           </div>
           <div className='content-sign'>
           {
             loginStaus?
              <div>
                <span className='person-sign'>个性签名</span>
                <Link to='/'>
                  <div className='login-out' onClick={this.handleOut}>退出</div>
                </Link>
              </div>:
              <div className='button-wrap clearfix'> 
                <div className='button' key='log' onClick={this.handleClick}>登录</div>
                <div className='button' key='res' onClick={this.handleClick}>注册</div>
              </div>
           }
           </div>
         </div>
       </div>
      </Fragment> 
    )
  }
  // 设置输入框input事件 实现受控组件
  handleChange(name, e) {
    const { value } = e.target;
    this.setState({
      [name]: value
    })
  }
  // 选择注册
  handleChooseReg () {
    this.setState({
      stat: 3
    })
  }
  // 退出登录
  handleOut () {
    this.props.getUser(false,'','','')
    this.setState({
      stat: 1
    })
  }
  // 输入完用户名密码后清空输入框
  handleClearInput () {
    this.setState ({
      userValue: '',
      pwdValue: ''
    })
  }
  handleClick (e) {
    switch (e.target.innerText) {
      case '登录':
        // 清空输入框
        this.handleClearInput()
        Axios.post('http://localhost:8888/api/user/login',{
          username: this.state.userValue,
          password: this.state.pwdValue
        }).then(res=>{
          const {success, message, user} = res.data;
          // 密码 用户名正确
          if(success) {
            this.setState({
              stat: 0
            });
            this.props.getUser(true,user.id,user.name,user.avatar_url)
          }else{
            this.setState({
              stat: 2
            })
          }
        });
      break;
      case '注册':
        // 清空输入框
        this.handleClearInput()
        Axios.post('http://localhost:8888/api/user/register',{
          username: this.state.userValue,
          password: this.state.pwdValue
        }).then(res=>{
          const {success, message,user} = res.data;
          console.log(res.data);
          if(success) {
            this.setState({
              stat: 0
            });
            this.props.getUser(true,user.id,user.name,user.avatar_url)
          }else{
            if(message==='用户名已存在'){
              this.setState({
                stat: 4
              });
            }
          }
        });
        break;
      default :
        break ;
    } 
  }
}