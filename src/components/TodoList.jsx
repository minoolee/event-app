import List from './List'
import React from 'react'
import { useState } from 'react'

function TodoList() {
  let listen = [
    {text: "Learn new lesson", done: false, id: 1 , color : "red"},
    {text:"Play with children", done: true, id: 2, color: "green"},
    {text:"Back cake for wedding", done: false, id: 3, color: "red"},
    {text:"Read more books", done: true, id: 4, color: "green"},
  ]
  const [list, setList] = useState (listen)
  
  const listAsFinished = (id) =>{
    let changedCopies = list.map(todo =>  {
       if(todo.id === id){
        if(todo.done === false){
          todo.done = true
        }else {
          todo.done = false
        }
        return todo  
       
      }else {
        return todo
      }
    }   )
    setList(changedCopies)
  }
  /*  todo.done = !list.done  */

  const deleteList = (id)=>{
    let changedCopies = list.filter((e)=> e.id !== id)
    setList(changedCopies)
  }
   
  const editList = (id, newValue) =>{
    let copy = list.map(todo=> {
      if (todo.id === id){
        todo.text = newValue
      }
      return todo
    })
    setList(copy)
  }
  
  let notFinished = list.filter((e)=>e.done === false)
  let finished = list.filter((e)=>e.done === true)
 
  return (
    <div>
    <div>
      <button onClick={DeleteAll}>Delete All</button>
      <button onClick={AllDone}>All done</button>
      <button onClick={AllBack}>All back</button>
    </div>
    <h1>Todo List</h1>
    <ul>
      {notFinished.map((list)=>{
      return <List
      key={list.id}
      text={list.text}
      number={list.id}
      color={list.color}
      done={list.done}
      listAsFinished={listAsFinished}
      deleteList={deleteList}
      editList={editList}
      />})}
    </ul>
    <h2>It ist finished</h2>
    {finished.map((list)=>{
     return <List
      key={list.id}
      text={list.text}
      color={list.color}
      number= {list.id}
      done={list.done}
      listAsFinished={listAsFinished}
      deleteList={deleteList}
      editList={editList}
    />
    })}
    </div>
  )
}

export default TodoList