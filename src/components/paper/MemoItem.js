import React, {useState} from "react";
import './MemoItem.css';

function MemoItem({id, content, writer}) {
    return (
        <div className="MemoItemBlock">
            <p id="text">{content}</p>
            <p id="text">{writer}</p>
        </div>
    );
}

export default MemoItem;