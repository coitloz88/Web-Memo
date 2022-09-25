import React, { useState } from "react";
import "./Input.css";
import { writeMemoData } from '../localStorage';

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
  const initMemoId = Number(window.localStorage.getItem("lastNextMemoId")) ? Number(window.localStorage.getItem("lastNextMemoId")) : 0;
  const [memoId, setMemoId] = useState(initMemoId);

  const [memoContainer, setMemoContainer] = useState([
  ]);

  return (
    <div>
      <InputText onCreate = {(_content, _writer)=>{
        const newMemoItem = {
          id: memoId,
          content: _content,
          writer: _writer,
        };

        writeMemoData(memoId, newMemoItem);
        setMemoId(memoId + 1);
      }}></InputText>
    </div>
  );
}

export default Input;