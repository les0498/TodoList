import './App.css'
import { useState } from 'react' 
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [
  {
    id: 0, 
    isDoen: false,
    content : "React 공부하기",
    date : new Date().getTime(),
  },
  {
    id: 1, 
    isDoen: false,
    content : "React 빨래하기",
    date : new Date().getTime(),
  },
  {
    id: 2, 
    isDoen: false,
    content : "React 노래 연습하기",
    date : new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  return (
    <div className='App'>
    <Header />
    <Editor />
    <List /> 
    </div>
  )
}

export default App
