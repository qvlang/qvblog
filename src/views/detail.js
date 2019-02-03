import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { actionCreators } from './store'
import Nav from '../components/common/nav'
import BasePage from '../components/home'
import PersonInfo from '../components/common/PersonInfo'
import DetailContain from '../components/detail/DetailContain'
import Comment from '../components/common/Comment'
import ShowComment from '../components/common/ShowComment'

class Detail extends Component {
  render() {
    return (
      <Fragment>
       <Nav loginStaus={this.props.loginStaus} />
       <BasePage>
         <DetailContain id={this.props.match.params.id} />
         <ShowComment id={this.props.match.params.id} />
         <Comment id={this.props.match.params.id} name={this.props.author} />
         <PersonInfo loginStaus={this.props.loginStaus} getUser={this.props.getUser} />
       </BasePage>
      </Fragment> 
    )
  }
}
const mapStateToProps = state=>({
  loginStaus: state.hmoeReducer.user.loginStaus,
  author: state.hmoeReducer.user.name
})

const mapDispatchToProps = (dispatch)=>({
  getUser (loginStaus,id,name,avatar_url) {
    dispatch(actionCreators.changeUser(loginStaus,id,name,avatar_url))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Detail)
