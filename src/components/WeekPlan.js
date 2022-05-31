import React from 'react'
import Workers from '../employees.json';
function WeekPlan() {
  return (
    <div>
    <section>
    <h1>Plan</h1>
    <form action="">
      <label htmlFor="">Events</label>
      <input type="text"  placeholder='Write hier'/><br />
      <label htmlFor=" ">date</label>
      <input type="date" />
      <ul>{Workers.map(person=>{
        return(
          <div className='find'> 
         <h4>{person.name}</h4>
         <p>{person.title}</p>
         <img src={person.img} width="50px" alt="" />
          <input type="checkbox" />
          </div>
        )
      })} <br /></ul>
      <button>x</button>
    </form>
    
    </section>
    <div className='weekBox'>
    <div className='day'>
      <div>
        <h2>Birthday</h2>
        <h4>Team</h4>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div className='day'>Tuesday</div>
    <div className='day'>Wednesday</div>
    <div className='day'>Thursday</div>
    <div className='day'>Friday</div>
    <div className='day'>Saturday</div>
    <div className='day'>Sunday</div>
    </div>
    </div>
  )
}

export default WeekPlan