import React, { useState } from "react";
import "./Input.css";

function InputText(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const content = event.target.content.value;
        const writer = event.target.writer.value;

        props.onCreate(content, writer);
      }}
    >
      <span>
        {" "}
        &ensp; 내용{" "}
        <input id="input" name="content" placeholder="메모 내용"></input>
      </span>
      <span>
        {" "}
        &ensp; 작성자{" "}
        <input id="input" name="writer" placeholder="작성자"></input>
      </span>
      <span>
        <input id="input-button" type="submit"></input>
      </span>
    </form>
  );
}

function Input(props) {
  //const [showMode, setShowMode] = useState(false);
  const [memoId, setMemoId] = useState(null);
  const initNextMemoId = window.localStorage.getItem("lastMemoId") ? window.localStorage.getItem("lastMemoId") : 0;
  const [nextMemoId, setNextMemoID] = useState(initNextMemoId);
  const [memoContainer, setMemoContainer] = useState([
  ]);

  return (
    <div>
      <InputText onCreate = {(_content, _writer)=>{
        const newMemoItem = {
          id: nextMemoId,
          content: _content,
          writer: _writer,
        };
        
        //const newMemoContainer = [...memoContainer];
        //newMemoContainer.push(newMemoItem);

        //setMemoContainer(newMemoContainer);
        
        setMemoId(Number(nextMemoId));
        setNextMemoID(Number(nextMemoId) + 1);

        //console.log(`memo container: ${newMemoContainer}`);
        //console.log(`content in memo: ${JSON.stringify(newMemoContainer)}`);

        //TODO: 마지막으로 저장되어있는 memoId를 받아와서 저장해야함
        //강종되는 경우는 어떻게 해결?
        window.localStorage.setItem("MemoItem" + memoId, JSON.stringify(newMemoItem));
        window.localStorage.setItem("lastMemoId", memoId);

        for(let i = 0; i <= memoId; i++){
          console.log(`local storage 저장 항목: ${window.localStorage.getItem("MemoItem" + i)}`);
        }
      }}></InputText>
    </div>
  );
}

export default Input;