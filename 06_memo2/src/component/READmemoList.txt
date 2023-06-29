import React from "react";
import "../cssFiles/MemoList.css";


/*
이 코드는 React.js 라이브러리를 사용하여 메모 리스트를 표시하고, 각각의 메모에 대해 삭제 버튼을 제공하는 코드입니다.

memos는 메모들의 배열이며, .map() 함수를 사용하여 각 메모와 해당 인덱스를 받아들입니다. 이후, JSX를 사용하여 각 메모를 나타내는 <div> 요소를 생성합니다. <div> 요소에는 "memo-item" 클래스 이름이 지정되며, 해당 메모 문자열이 내용으로 포함됩니다.

key 속성은 각 메모의 고유 식별자로 사용되며, React에서는 이 속성을 사용하여 컴포넌트를 더욱 효율적으로 렌더링합니다.

마지막으로, 삭제 버튼을 위한 <button> 요소가 생성되며, 이 요소의 onClick 속성은 deleteMemo() 함수를 호출합니다. 이 함수는 해당 인덱스를 삭제하는 데 사용됩니다.
*/


function MemoList({ memos, deleteMemo }) {
  return (
    <ul className="memo-list">

      { // 이 코드는 React.js 라이브러리를 사용하여 메모 리스트를 표시하고, 각각의 메모에 대해 삭제 버튼을 제공하는 코드.

      memos.map((memo, index) => (  // memos는 메모들의 배열이며, .map() 함수를 사용하여 각 메모와 해당 인덱스를 받아드림.
        // 이후, JSX를 사용하여 각 메모를 나타내는 <div> 요소를 생성. 
        // <div> 요소에는 "memo-item" 클래스 이름이 지정되고, 
        // key 속성은 각 메모의 고유 식별자로 사용되며, React에서는 이 속성을 사용하여 컴포넌트를 더욱 효율적으로 렌더링하며,
        // memo-item <div> 안에
        <div className="memo-item" key={memo}> 
          {memo /*해당 메모 문자열이 내용으로 포함.*/}  
          <button className="delete-btn" onClick={() => deleteMemo(index)}>
            Delete  {/* 마지막으로, 삭제 버튼을 위한 <button> 요소가 생성되며, 
                      이 요소의 onClick 속성은 deleteMemo() 함수를 호출. 
                      이 함수는 해당 인덱스를 삭제하는 데 사용. */}
          </button>
        </div>
      ))
      }

    </ul>
  );
}

export default MemoList;