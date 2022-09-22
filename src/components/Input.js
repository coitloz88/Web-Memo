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
  const [nextMemoId, setNextMemoID] = useState(1);
  const [memoContainer, setMemoContainer] = useState([
    { id: 1, content: "sample memo content", writer: "hyemin lee" },
  ]);

  return (
    <div>
      <InputText onCreate = {(_content, _writer)=>{
        const newMemoItem = {
          id: nextMemoId,
          content: _content,
          writer: _writer,
        };
        
        const newMemoContainer = [...memoContainer];
        newMemoContainer.push(newMemoItem);

        setMemoContainer(newMemoContainer);
        setMemoId(nextMemoId);
        setNextMemoID(nextMemoId + 1);

        console.log(`memo container: ${newMemoContainer}`);
        console.log(`content in memo: ${JSON.stringify(newMemoContainer)}`);

        {/*setShowMode(!showMode);*/}
      }}></InputText>
    </div>
  );
}

export default Input;
