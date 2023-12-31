import React from 'react'
import './Spinner.css'

function Spinner() {
  return (
    <div style={{display:'flex',height:'100vh',justifyContent:'center',alignItems:'center'}}>
        <div className="loader" ></div>
    </div>
  )
}

export default Spinner