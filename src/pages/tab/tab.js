import React from 'react';


function Tab(props){
  console.log(props.children)
  
  const childrenContent = Array.isArray(props.children) ? props.children.map(item=>{
    return item.props.children
  }) : props.children.props.children

  return (
    <div>
      {props.children}
      <hr/>
      {childrenContent}
    </div>
  )
}

export default Tab;