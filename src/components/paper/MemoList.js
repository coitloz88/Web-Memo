import React, { memo, useState } from "react";
import { readMemoData } from '../../localStorage';
import MemoItem from "./MemoItem";
import './MemoList.css';

function MemoList() {
    const memoContainer = readMemoData();

    return (
        <div className="MemoListBlock"> 
            {
                memoContainer.map(memoItem => 
                    (<MemoItem content={memoItem.content} writer={memoItem.writer}></MemoItem>
                ))
            }

        </div>
    );
}

export default MemoList;