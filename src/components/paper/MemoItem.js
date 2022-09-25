import React, {useState} from "react";
import './MemoItem.css';

function MemoItem({content, writer}) {
    console.log(`건네받은 Item: ${content}, ${writer}`);
    return (
        <div className="MemoItemBlock">
            <p id="text">{content}</p>
            <p id="text">{writer}</p>
        </div>
    );
}

export default MemoItem;