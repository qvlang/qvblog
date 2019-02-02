import React , { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import Home from './views/home'
import Publish from './views/publish'
import Detail from './views/detail'
import Blog from './views/blog'
import Header from './components/header'
import Footer from './components/footer'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/message' exact component={Publish}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/blog' exact component={Blog}></Route>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}