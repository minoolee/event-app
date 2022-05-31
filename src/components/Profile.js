import React from 'react'
import Workers from '../employees.json';
function Profile() {
  return (
    <div>
       {Workers.filter((e)=>{
          if (e.name === e.target.name)
        
           <img src={e.img} alt={e.employeeID} 

           />  
       })}
    </div>
  )
}

export default Profile