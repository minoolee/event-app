import React from 'react'
import { useState } from 'react'

function List(props) {
  const [edit,setEdit] = useState(false)
  const [currentVal,setCurrentVal] = useState(props.text)
  return (
    <div>
      <li
      className={`List ${props.color?? 'if not color'}`}
      style={{backgroundColor: props.done ? ('gray') : ('red')}}
      id={props.number}
      >{
        (edit === false)? <span>{props.text}</span>
        :<input value={currentVal}
        onChange={(e)=>{setCurrentVal(e.target.value)}
        }
        />
      }
      <div>
      <button onClick={()=>{
        props.listAsFinished(props.number)
      }}>{(props.done === false)? "finish" : "back"}</button>
      <button onClick={()=>{props.deleteList(props.number)}}>delete</button>
      <button onClick={()=> {
         setEdit(!edit)
       props.editList(props.number,currentVal)}}>{
        (edit===false)?"Edit":"Ok"}</button>
        </div>
      </li>
    </div>
  )
}
export default List