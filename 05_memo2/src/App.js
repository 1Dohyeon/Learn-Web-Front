import React, { useState } from "react";
import MemoForm from "./component/memoForm";
import MemoList from "./component/memoList";
import "./cssFiles/App.css";

function App() {
  const [memos, setMemos] = useState([]);

  
  
  const addMemo = (memo) => {
    setMemos([...memos, memo]); 
  };

  
  const deleteMemo = (index) => {
    const newMemos = [...memos];  
    newMemos.splice(index, 1);  
    setMemos(newMemos); 
  };

  return (
    <div className="layout">
      <div className="mainContainer">
        <h1>Memo App</h1>
        <MemoForm addMemo={addMemo} /> 
        <MemoList memos={memos} deleteMemo={deleteMemo} /> 
      </div>
    </div>
  );
}

export default App;