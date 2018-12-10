import App from './app.jsx'
import React from 'react'
import ReactDOM from 'react-dom';

const root = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(<Component />, root);
}
render(App);

if(module.hot) {
  module.hot.accept('./app.jsx', function() {
    render(App)
  })
}