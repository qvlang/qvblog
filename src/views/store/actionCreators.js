import Axios from '@/axios'
import {getUserInfo, updateArticles, addPage, deleteArt, addArt,changeAll} from './constants'

//得到用户登录状态
export const changeUser = (loginStaus,id,name,avatar_url)=>({
  type: getUserInfo,
  user: {
    loginStaus,
    id,
    name,
    avatar_url
  }
})
//文章action
export const Articles = articles=> ({
  type: updateArticles,
  articles,
})
// 删除文章
export const deleteArticle = id=>({
  type: deleteArt,
  id
})
// 增加文章
export const addArticle = article=>({
  type: addArt,
  article
})
//文章页数
export const page = {
  type: addPage
}
// 返回所有文章提示状态
export const hasAll= ({
  type: changeAll
})
export const  getArticles = (page,rows)=>{
  return (dispatch)=>{
    Axios.get('http://localhost:8888/api/articles',{page,rows})
    .then(res=>{
      const {success,articles} = res.data;
      //如果正确返回则修改文章 否者提示文章已到底
      if(success && articles.length){
        const action = Articles(articles);
        dispatch(action);
      }else{
        dispatch(hasAll)
      }
    })
  }
}