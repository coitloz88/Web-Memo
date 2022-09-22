// import logo from './logo.svg';
//import './App.css'
import Input from './components/Input';
import MemoList from './components/paper/MemoList';
import LocalStorage from './storage/LocalStorage';

function App() {
  return (
    <div className='template'>
        <Input />
        <MemoList />
    </div>
  );
}

export default App;
