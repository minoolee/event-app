import "../App.css"

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navHeader" >
    <section >
    <ul className='nav' >
    <li><Link className="link" to="/teams/"> Our Team</Link></li>
    <li> <Link className="link" to="/week-plan/"> Our Week Plan</Link></li>
       </ul>
       </section>
       <section className="log">
       <input type="text" placeholder="Your email pleace" />
       <button>log in</button>
       </section>
    </div>
  )
}

export default Navigation