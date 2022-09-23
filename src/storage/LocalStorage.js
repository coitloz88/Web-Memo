import React, { useState } from "react";

function LocalStorage(){
    const [id, setId] = useState(0);
    const [inputContent, setContent] = useState("");
    const [inputWriter, setWriter] = useState("");

    const saveData = () => {
        const memoItem = { content: inputContent, writer: inputWriter};
        window.localStorage.setItem("memo", JSON.stringify(memoItem));
    };
}

export default LocalStorage;