import './App.css';

import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <TodoList/>
    </div>
  );
}

export default App;
