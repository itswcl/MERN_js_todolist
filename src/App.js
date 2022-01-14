import React, { useState } from 'react';
import './App.css';
import FormAdd from './components/FormAdd';
import Display from './components/Display';

function App() {
  // main item list on app file
  const [list, setList] = useState([
    { title: "Get Python black belt.", done: false },
  ])

  // function to add item coming back from form
  // check <FormAdd onNewItem={itemReceived} />
  const itemReceived = (itemTitle, done) => {
    setList([
      ...list,
      { title: itemTitle, done: done }
    ])
  }

  const itemUpdate = (idx) => {
    let newList = [...list];
    newList[idx].done ? newList[idx].done = false : newList[idx].done = true
    setList(newList)
  }

  const itemDelete = (idx) => {
    let newList = list.slice(0, idx).concat(list.slice(idx+1));
    setList(newList);
  }

  return (
    <div className="App">
      {JSON.stringify(list)}
      {/* sent the main function */}
      {/* with key onNewItem in FormAdd.jx */}
      <FormAdd onNewItem={itemReceived} />
      <Display list={list} onUpdateItem={itemUpdate} itemDelete={itemDelete}/>
    </div>
  );
}

export default App;
