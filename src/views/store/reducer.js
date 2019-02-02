import {getUserInfo, updateArticles, addPage, deleteArt, addArt,changeAll } from './constants'

const defaulteState = {
  user: {
    loginStaus: false,
    id: '',
    name: '',
    avatar_img: ''
  },
  articles: [],
  page: 1,
  all: false
}
export default (state = defaulteState, action)=> {
  switch (action.type) {
    case getUserInfo :
      const user = action.user
      return Object.assign({},{
        user,
        articles:state.articles,
        page: state.page,
        all: state.all
      })
    case updateArticles :
      return Object.assign({},{
        user: state.user,
        articles: state.articles.concat(action.articles),
        page:state.page,
        all: state.all
      });
    case addPage :
      const page = state.page + 1;
      return Object.assign({},{
        user: state.user,
        page,
        articles:state.articles,
        all: state.all
      })
    case deleteArt:
      const newArticle = state.articles.filter(item=>{
        return item._id != action.id
      })
      return Object.assign({},{
        user: state.user,
        page:state.page,
        articles:newArticle,
        all: state.all
      })
    case addArt :
      const newArticles = [action.article, ...state.articles];
      return Object.assign({},{
        user: state.user,
        articles: newArticles,
        page: state.page,
        all: state.all
      })
    case changeAll :
    return Object.assign({},{
      user: state.user,
      articles: state.articles,
      page: state.page,
      all: true
    })
    default :
      return state;
  }
}