import React from 'react'
import Workers from '../employees.json';
function Teams() {
  return (
    <div className="box">
       {
        Workers.map(worker => {
        return(
          <div key={worker.employeeID}>
          <div className='profile'>
           <img src={worker.img} alt={worker.employeeID} width="200px" />
           <ul>
           <li> {worker.title}</li>
           <li>{worker.name}</li>
           <button>info</button>
           </ul>
           <button>Hamzah</button>
           </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default Teams

