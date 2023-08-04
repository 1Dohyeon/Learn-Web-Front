import React from "react";
import "../cssFiles/MemoList.css";

function MemoList({ memos, deleteMemo }) {
  return (
    <ul className="memo-list">

      {

      memos.map((memo, index) => (  
        <div className="memo-item" key={memo}> 
          {memo}  
          <button className="delete-btn" onClick={() => deleteMemo(index)}>
            Delete  
          </button>
        </div>
      ))
      }

    </ul>
  );
}

export default MemoList;