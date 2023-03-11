import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/styles.css'
import '../index.js'
const Front = () => {
const navigate=useNavigate()
const hello=()=>{
navigate("/worldwide")
}

  return (

    <div className='fontpae' >
    <div className='hed'>
      <h1 style={{marginTop:"70px"}}>Click on Get Started for Click Counter!</h1>
      </div>
    <div className="getstart">
   <button onClick={hello} className="getstar"> Get Started </button>
   </div>
    </div>
  )
}

export default Front;