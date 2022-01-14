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
    // receive the idx from handleChecked on display.jsx
    // 1. copy the original list
    let newList = [...list];
    // 2. update item.done if false checked to true or true checked to false
    newList[idx].done ? newList[idx].done = false : newList[idx].done = true
    // 3. set the newList to the list
    setList(newList)
  }

  const itemDelete = (idx) => {
    // receive the idx
    let newList =
      // .slice will copy the list to new list
      // and get element from index 0 to the idx before
      list.slice(0, idx)
        // wit the element from the idx after so idx + 1
        .concat(list.slice(idx + 1));
    setList(newList);
  }

  return (
    <div className="App">
      {/* sent the main function */}
      {/* with key onNewItem in FormAdd.jx */}
      <FormAdd onNewItem={itemReceived} />
      <Display list={list} onUpdateItem={itemUpdate} itemDelete={itemDelete} />
    </div>
  );
}

export default App;
