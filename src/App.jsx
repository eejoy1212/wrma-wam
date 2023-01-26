import { useState } from 'react';
import './App.css';
import AppBar from './AppBar';
import Contents from './Contents';
import  { OrModel} from "./model/OrModel"

function App() {

  const [logMsg,setLogMsg]=useState("로그창입니다!");
   const model=new OrModel('1','F');
  console.log(model.suit);
  return (
    <div className="App">
      <AppBar logMsg={logMsg}/>
      <Contents/>
    </div>
  );
}

export default App;
