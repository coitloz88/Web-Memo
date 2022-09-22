import React, { useState } from "react";
import "./Input.css";

function Input() {
  return (
    <div>
      <form
        onSubmit={(event) => {
          //TODO
        }}
      >
        <span>
          {" "}
          &ensp; 내용 <input id="input" placeholder="메모 내용"></input>
        </span>
        <span>
          {" "}
          &ensp; 작성자 <input id="input" placeholder="작성자"></input>
        </span>
        <span>
          <input id="input-button" type="submit"></input>
        </span>
      </form>
    </div>
  );
}

export default Input;
