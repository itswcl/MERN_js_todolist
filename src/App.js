import React, {useState} from 'react';
import './App.css';
import FormAdd from './components/FormAdd';

function App() {
  const [list, setList] = useState([
    {title: "Get Python black belt.", done: false},
  ])

  const itemReceived = (itemTitle, done) => {
    setList([
      ...list,
      {title: itemTitle, done: done}
    ])
  }

  return (
    <div className="App">
      {JSON.stringify(list)}
      <FormAdd onNewItem={itemReceived} />
    </div>
  );
}

export default App;
