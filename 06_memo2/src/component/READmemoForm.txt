import React, { useState } from "react";
import "../cssFiles/MemoForm.css";

function MemoForm({ addMemo }) {
  const [text, setText] = useState(""); // React Hook인 useState를 사용하여 상태를 관리하는 코드. 
                                        // useState는 현재의 상태값과 해당 상태값을 업데이트하는 함수를 반환.
                                        // 변수 text와 setText는 배열 비구조화 할당으로 선언되어, 
                                        // 각각 현재 상태값과 해당 상태값을 업데이트하는 함수를 담음.

  // handleSubmit함수는 폼(form)을 제출(submit)할 때 실행되며, 
  // 입력된 텍스트가 비어있지 않으면 addMemo 함수를 호출하여 메모를 추가하고, 
  // setText 함수를 사용하여 text 상태값을 초기화하는 역할.
  const handleSubmit = (e) => { // handleSubmit 함수는 이벤트 객체(e)를 인수로 받아서,
    e.preventDefault();         // 이벤트를 취소하고
                                /*
                                preventDefault()는 JavaScript의 이벤트 객체에서 제공하는 메소드.
                                이 메소드는 이벤트가 발생한 요소의 기본 동작을 중지시키는 역할.
                                일반적으로, preventDefault() 메소드는 링크 클릭, 폼 제출, 키보드 입력 등 
                                다양한 이벤트에서 사용됨. 
                                이 메소드를 사용하면 기본 동작을 중지하고, 
                                자신이 원하는 대로 동작을 변경하거나 커스터마이즈할 수 있다.
                                */
    if (text.trim()) {          // text 값이 비어있지 않으면 
      addMemo(text);            // addMemo 함수를 호출하고 
      setText("");              // text 값을 초기화.
    }
  };                            // 여기서 addMemo 함수는 text 값을 인수로 받아서 메모를 추가하는 함수.

  // handleChange 함수는 React Hook인 useState를 사용하여 관리되는 text 상태값을 업데이트하는 역할.
  const handleChange = (e) => {   // handleChange 함수는 이벤트 객체(e)를 인수로 받아서,
    setText(e.target.value);      // e.target.value를 사용하여 현재 입력된 텍스트 값을 가져와 setText 함수를 사용하여 
                                  // text 상태값을 업데이트함. 
                                  // 이 코드는 텍스트 입력 필드를 사용하여 사용자가 입력한 텍스트를 즉시 반영하고,
                                  // 저장하는 기능을 구현하는 데 사용될 수 있음.
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