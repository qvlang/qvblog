import React from 'react'
import Loadable from 'react-loadable';
 
const LoadableComponent = Loadable({
  loader: () => import('./blog'),
  loading: ()=>(
    <div>正在加载</div>
  )
});
export default (props)=> {
    return <LoadableComponent />;
}