import React, { useState, useRef } from "react";
import "./Input.css";
import { readMemoData, writeMemoData } from "../localStorage";

function InputForm(props) {
  const [inputs, setInputs] = useState({
    content: "",
    writer: "",
  });
  const { content, writer } = inputs;
  const contentInput = useRef();

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onCreate(event.target.content.value, event.target.writer.value);
        setInputs({ content: "", writer: "" });
      }}
    >
      <span>
        {" "}
        &ensp; 내용{" "}
        <input
          id="input"
          name="content"
          placeholder="메모 내용"
          onChange={onChange}
          value={content}
          ref={contentInput}
        ></input>
      </span>
      <span>
        {" "}
        &ensp; 작성자{" "}
        <input
          id="input"
          name="writer"
          placeholder="작성자"
          onChange={onChange}
          value={writer}
        ></input>
      </span>
      <span>
        <input id="input-button" type="submit"></input>
      </span>
    </form>
  );
}

function Input(props) {
  const initMemoId = Number(window.localStorage.getItem("lastNextMemoId"))
    ? Number(window.localStorage.getItem("lastNextMemoId"))
    : 0;
  const [memoId, setMemoId] = useState(initMemoId);

  return (
    <div>
      <InputForm
        onCreate={(_content, _writer) => {
          const newMemoItem = {
            id: memoId,
            content: _content,
            writer: _writer,
          };

          writeMemoData(memoId, newMemoItem);
          props.handleMemoChange();
          setMemoId(memoId + 1);
        }}
      ></InputForm>
    </div>
  );
}

export default Input;
