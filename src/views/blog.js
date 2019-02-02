import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Nav from '../components/common/nav'
import BasePage from '../components/home'
import ContentList from '../components/home/ContentList'
import PersonInfo from '../components/common/PersonInfo'
import BaseButton from '../components/common/BaseButton'

class Blog extends Component {
  render() {
    const {loginStaus, author, articles, getUser, deleteArticle } = this.props;
    const myArticle = articles.filter(item=>{
      return item.author === author
    })
    return (
      <Fragment>
       <Nav loginStaus={loginStaus} />
       <BasePage>
         <ContentList author={author} articles= {myArticle} deleteArticle={deleteArticle} />
         <div></div>
         <div></div>
         <PersonInfo loginStaus={loginStaus} getUser={getUser} />
         <BaseButton />
       </BasePage>
      </Fragment> 
    )
  }
}
const mapStateToProps = state=>({
  author: state.hmoeReducer.user.name,
  loginStaus: state.hmoeReducer.user.loginStaus,
  articles: state.hmoeReducer.articles
})
const mapDispatchToProps = (dispatch)=>({
  getUser (loginStaus,id,name,avatar_url) {
    dispatch(actionCreators.changeUser(loginStaus,id,name,avatar_url))
  },
  deleteArticle (id) {
    dispatch(actionCreators.deleteArticle(id))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Blog)