import React, {Component, Fragment} from 'react'

export default class GoTop extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showButton: false
    }
    this.debounce = this.debounce.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  render () {
    return (
      <Fragment>
      {
        this.state.showButton?
        <div className='go-top' onClick={this.handleClick}>
          回到顶部
        </div>:null
      }
      </Fragment>
    )
  }
  //在组件挂载完成时监听scroll时间,控制按钮的出现隐藏
  componentDidMount () {
    window.onscroll = this.debounce(this.bindEvent,0);
  }
  componentWillUnmount () {
    window.onscroll = null;
  }
  bindEvent () {
    let oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(oTop > 160) {
      this.setState({
        showButton: true
      })
    }else {
      this.setState({
        showButton: false
      })
    }
  }
  //函数防抖
  debounce(fn, delay) {
    // 定时器，用来 setTimeout
    let timer, ctx;
    ctx = this;
    //通过闭包来保存timer 
    return function () {
      clearTimeout(timer);
      timer = setTimeout(()=>{
        fn.call(ctx);
      }, delay)
    }
  }
  handleClick () {
    //回到顶部
    let timer = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
      let oTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (oTop > 0) {
        document.body.scrollTop = document.documentElement.scrollTop = oTop -30;
        timer = requestAnimationFrame(fn);
      }else{
        cancelAnimationFrame(timer);
      }
    });
  }
}
