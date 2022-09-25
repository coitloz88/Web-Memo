const readMemoData = () => {
    const lastMemoId = window.localStorage.getItem("lastNextMemoId");
    let memoContainer = [];
    for(let i = 0; i < lastMemoId; i++){
        const newMemo =  JSON.parse(window.localStorage.getItem("MemoItem" + i));
        memoContainer = memoContainer.concat(newMemo);
    }

    return memoContainer;
};

const writeMemoData = (lastIndex, newItem) => {
    window.localStorage.setItem("MemoItem" + lastIndex, JSON.stringify(newItem));
    window.localStorage.setItem("lastNextMemoId", Number(lastIndex + 1));
}

export {readMemoData, writeMemoData};