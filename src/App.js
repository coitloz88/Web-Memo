// import logo from './logo.svg';
//import './App.css'
import React, { useState } from 'react';
import Input from './components/Input';
import MemoList from './components/paper/MemoList';
import { readMemoData, writeMemoData } from './localStorage';


function App() {
    const [memoContainer, setMemoContainer] = useState(readMemoData());

    const handleMemoChange = () => {
      setMemoContainer(readMemoData());
    };

    return (
    <div className='template'>
        <Input memoContainer={memoContainer} handleMemoChange={handleMemoChange}/>
        <MemoList memoContainer={memoContainer}/>
    </div>
  );
}

export default App;
