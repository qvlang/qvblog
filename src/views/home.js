import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from './store'
import Nav from '../components/common/nav'
import BasePage from '../components/home'
import ContentList from '../components/home/ContentList'
import PersonInfo from '../components/common/PersonInfo'
import BaseButton from '../components/common/BaseButton'
import GetMore from '../components/common/GetMore'
import GoTop from '../components/common/GoTop'

class Home extends Component {
  constructor (props) {
    super(props);
  }
  //页面加载完成请求文章数据
  componentDidMount () {
    if(!this.props.articles.length) {
      this.props.getArticles(this.props.page,3);
    }
  }
  render() {
    const {loginStaus, page,all, articles, getUser, getArticles, morePage } = this.props;
    return (
      <Fragment>
        <Nav loginStaus={loginStaus} />
        <BasePage>
          <ContentList articles= {articles} />
          <GetMore num={page} getArticle= {getArticles} morePage={morePage} all={all} />
          <div></div>
          <PersonInfo loginStaus={loginStaus} getUser={getUser} />
          <BaseButton loginStaus={loginStaus} />
        </BasePage>
        <GoTop />
      </Fragment> 
    )
  } 
}
const mapStateToprops = state=>({
  loginStaus: state.hmoeReducer.user.loginStaus,
  articles: state.hmoeReducer.articles,
  page: state.hmoeReducer.page,
  all: state.hmoeReducer.all
})
const mapDispatchToprops = dispatch=>({
  //获取文章 同时将页数和行数发给服务器
  getArticles (page, rows) {
    dispatch(actionCreators.getArticles(page,rows))
  },
  getUser (loginStaus,id,name,avatar_url) {
    dispatch(actionCreators.changeUser(loginStaus,id,name,avatar_url))
  },
  morePage () {
    dispatch(actionCreators.page)
  }
})
export default connect(mapStateToprops,mapDispatchToprops)(Home);