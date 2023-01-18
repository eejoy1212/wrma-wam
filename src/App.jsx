import { useState } from 'react';
import './App.css';
import AppBar from './AppBar';
import Contents from './Contents';
import {TodoModel} from './model/test'
function App() {
  // let model=new TodoModel();
  // console.log(model);
  
  const [logMsg,setLogMsg]=useState("로그창입니다!");
  return (
    <div className="App">
      <AppBar logMsg={logMsg}/>
      <Contents/>
    </div>
  );
}

export default App;
