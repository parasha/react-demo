import React from 'react';


function ChildrenCoponent1(props){
  console.log('children component1:', props.children);

  return (
    <div>
      children 组件1
    </div>
  )
}

function ChildrenCoponent2(){

  return (
    <div>
      children 组件2
    </div>
  )
}

function ChildrenCoponent3(){

  return (
    <div>
      children 组件3
    </div>
  )
}


function Children(props){

  console.log('children:', props.children);

  return (
    <div>
      children：
      <ChildrenCoponent1>
        <ChildrenCoponent2 />
        <ChildrenCoponent3 />
      </ChildrenCoponent1>
    </div>
  )
}

export default Children