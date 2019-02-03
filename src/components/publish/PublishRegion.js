import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html';
import Axios from '../../axios'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

class PublishRegion extends Component{
  constructor(props) {
    super(props);
    //初始化受控组件的value
    this.state = {
      editorState: EditorState.createEmpty(),
      inputValue: '',
      selectValue: '技术博客'
    };
    // 绑定函数内this指向
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  render () {
    const { editorState, inputValue, selectValue } = this.state;
    return (
      <div className='pub-wrap clearfix'>
        <div className='pub-title'>发表博客</div>
        <div className='pub-content'>
          <div className='pub-input'>
            <div>
              <label className='label'>选择模块</label>
              <select value={selectValue} onChange={this.handleSelect}>
                <option value='日常博客'>日常博客</option>
                <option value='技术博客'>技术博客</option>
              </select>
            </div>
            <input type='text' className='input' value={inputValue} 
              onChange={this.handleChange}
              placeholder=' 文章标题：注意不要超过10个字'
            />
          </div>
          <div className='pub-write'>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>
        </div>
        <Link to='/blog'>
          <div className='pub-btn' onClick={this.handleClick}>发表</div>
        </Link>
      </div>
    )
  }
  //受控组件设置
  onEditorStateChange (editorState) {
    this.setState({
      editorState
    });
  }
  handleChange (e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleSelect (e) {
    this.setState({
      selectValue: e.target.value
    });
  }
  //点击发表将博客类型、标题以及转成html格式的博客内容发送到服务器
  handleClick () {
    const articleInfo = {
      author: this.props.username,
      mode: this.state.selectValue,
      title: this.state.inputValue,
      content: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    }
    Axios.post('/article',articleInfo)
    .then((res)=>{
      const { success ,article} = res.data
      //如果发表成功则将返回文章保存同时跳转到我的博客界面
      if(success) {
        this.props.getArticle(article);
        this.props.history('/blog')
      }
    })
  }
}
export default withRouter(PublishRegion)