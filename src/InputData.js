import React, { useState } from "react";
import './InputData.css';

function InputData(){
    return (
        <div>
            내용 <input placeholder="내용"/> &ensp;
            작성자 <input placeholder="작성자"/> &ensp;
            <button id="submitButton">작성하기</button>
        </div>
    );
}

export default InputData;