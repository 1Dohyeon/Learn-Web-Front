import React, { useState } from "react";
import "../cssFiles/MemoForm.css";

function MemoForm({ addMemo }) {
  const [text, setText] = useState(""); 
  const handleSubmit = (e) => { 
    e.preventDefault();         
    if (text.trim()) {          
      addMemo(text);           
      setText("");              
    }
  };                            

  
  const handleChange = (e) => {   
    setText(e.target.value);      
  };

  return (
    <form className="memo-form" onSubmit={handleSubmit}>
      <input
        className="memo-input"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter your memo here"
      />
      <button className="add-btn" type="submit">
        Add Memo
      </button>
    </form>
  );
}

export default MemoForm;