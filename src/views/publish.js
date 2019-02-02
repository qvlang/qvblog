import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { actionCreators } from './store'
import Nav from '../components/common/nav'
import BasePage from '../components/home'
import PersonInfo from '../components/common/PersonInfo'
import PublishRegion from '../components/publish/PublishRegion'

class Publish extends Component {
  render() {
    const {loginStaus, username, getArticle, getUser } = this.props;
    return (
      <Fragment>
       <Nav loginStaus={loginStaus} />
       <BasePage>
         <PublishRegion username={username} getArticle={getArticle} />
         <div></div>
         <div></div>
         <PersonInfo loginStaus={loginStaus} getUser={getUser} />
       </BasePage>
      </Fragment> 
    )
  }
}

const mapStateToProps = state=>({
  username: state.hmoeReducer.user.name,
  loginStaus: state.hmoeReducer.user.loginStaus
})

const mapDispatchToProps = (dispatch)=>({
  getUser (loginStaus,id,name,avatar_url) {
    dispatch(actionCreators.changeUser(loginStaus,id,name,avatar_url))
  },
  getArticle (article) {
    dispatch(actionCreators.addArticle(article))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Publish)