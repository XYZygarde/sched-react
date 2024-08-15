import { useState } from 'react'
import dayOfWeek from './arraySet/Day';

const Header = () => {
    
    let clock = new Date().toLocaleTimeString();
    let [liveTime, setTime] = useState(clock);
    const d = new Date();
    
    

    const updateTime = () => {
       let clock = new Date().toLocaleTimeString();
       setTime(clock)
    }


    setInterval(updateTime, 1000)

    return(
      <>
       <header>
         <nav className='navBar'>
            <h2>DailyCram</h2>
            <span>{`${dayOfWeek[d.getDay()]} | ${liveTime}`}</span>
         </nav>
       </header>
      </>
    );
}

export default Header