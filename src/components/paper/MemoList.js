import React, {useState} from "react";
import MemoItem from "./MemoItem";
import './MemoList.css';

function MemoList() {
    return (
        <div className="MemoListBlock"> 
            <MemoItem content="React 공부하기" writer="이혜민"></MemoItem>
            <MemoItem content="typescript 공부하기" writer="꼬몽울"></MemoItem>
        </div>
    );
}

export default MemoList;