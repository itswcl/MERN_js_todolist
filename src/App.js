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
    // this work to update opposite boolean newList[idx].done = !newList[idx].done

    // Another way to do update
    // newList based on list
    // const newList2 = list.map((todo, i) => {
    //   // if the item idx meet
    //   if (idx === i) {
    //     // update the done to opposite
    //     return { ...todo, done: !todo.done }
    //   }
    //   // if not meet we dont change
    //   return todo;
    // })

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
    // or setList(list.slice(0,idx).concat(list.slice(idx+1)))

    // Another way to do the delete, filter out the target index
    // const newList = list.filter((item, i) => {
    //   return i !== idx;
    // })


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
