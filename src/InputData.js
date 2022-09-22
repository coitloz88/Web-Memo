import React, { useState } from "react";
import "./InputData.css";

//메모 내용과 작성자를 form으로 입력받는 컴포넌트
function InputText(props) {
  return (
    <article>
      <div className="box-container">
        <form
          onSubmit={(event) => {
            event.preventDefault();

            const content = event.target.content.value;
            const writer = event.target.writer.value;
            console.log(`in onSubmit function`);
            props.onCreate(content, writer);
          }}
        >
          <p>
            <textarea name="content" placeholder="메모 내용" />
          </p>
          <p>
            <input type="text" name="writer" placeholder="작성자" />
          </p>
          <p>
            <input type="submit" value="작성"></input>
          </p>
        </form>
      </div>
    </article>
  );
}

//메모 작성용으로 필요한 데이터와 관련된 로직 컴포넌트
function InputData() {
  const [memoId, setMemoId] = useState(null);
  const [nextMemoId, setNextMemoID] = useState(1);
  const [memoContainer, setMemoContainer] = useState([
    { id: 1, content: "sample memo content", writer: "hyemin lee" },
  ]);

  return (
    <div>
      <InputText
        onCreate={(_content, _writer) => {
          const newMemo = {
            id: nextMemoId,
            content: _content,
            writer: _writer,
          };
          const newMemoContainer = [...memoContainer];
          newMemoContainer.push(newMemo);
        
          setMemoContainer(newMemoContainer);
          setMemoId(nextMemoId);
          setNextMemoID(nextMemoId + 1);

          console.log(`memo container: ${newMemoContainer}`);
          console.log(`content in memo: ${JSON.stringify(newMemoContainer)}`);
        }}
      ></InputText>
    </div>
  );
}

export default InputData;
