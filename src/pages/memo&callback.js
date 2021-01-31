import React, { useState, useCallback, useMemo } from 'react';


const ChildComp1 = React.memo(() => {
  console.log('render child-comp1 ...')
  return <div>Child Comp1 ...</div>
})

const ChildComp2 = ({ name, onCb }) => {
  console.log('render child-comp2 ...')
  return <>
    <div>Child Comp2 ... {name}</div>
    <button onClick={() => onCb()}>改变 name 值</button>
  </>
}

const ChildComp3 = React.memo(({ name, onCb }) => {
  console.log('render child-comp3 ...')
  return <>
    <div>Child Comp3 ... {name}</div>
    <button onClick={() => onCb()}>改变 name 值</button>
  </>
})

const ChildComp4 = React.memo(({ info, onCb }) => {
  console.log('render child-comp4 ...')
  return <>
    <div>Child Comp4 ... {info.name}</div>
    <button onClick={() => onCb()}>改变 name 值</button>
  </>
})

function HookPage() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)

  const [name, setName] = useState('hi~')
  // const changeName = (newName) => setName(newName)  // 父组件渲染时会创建一个新的 changeName 函数, 因为 changeName 改变， ChildComp2 重新渲染
  const changeName = useCallback(() => setName(name + '~'), [name])
  // const info = { name, age }    // 复杂数据类型属性，父组件重新渲染时会生成新的 info，倒是 ChildComp3 重新渲染
  const info = useMemo(() => ({ name }), [name])   // 用 useMemo 包一层，只有依赖的 name 和 age 更新的时候，info 才会更新
  return (
    <div>
      <button onClick={increment}>点击次数：{count}</button>
      <ChildComp1 />
      <hr />
      <ChildComp2 name={name} onCb={changeName} />
      <hr />
      <ChildComp3 name={name} onCb={changeName} />
      <hr />
      <ChildComp4 info={info} onCb={changeName} />
    </div>
  );
}

export default HookPage