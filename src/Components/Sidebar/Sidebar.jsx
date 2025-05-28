import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='project'>
      <div className="header">
        <h2>health<span>care.</span></h2>
      </div>
      <div className="middle-content">
        <div className="sub-mid">

        <p>general</p>
        <li className='dash'><i class="fa-brands fa-windows"></i>  Dashboard</li>
        <li><i class="fa-solid fa-arrow-down-up-across-line"></i>  history</li>
        <li><i class="fa-solid fa-calendar-days"></i>  calendar</li>
        <li><i class="fa-solid fa-square-plus"></i>  Appointments</li>
        <li><i class="fa-solid fa-chart-line"></i>  Statics</li>
        </div>
        <div className="mid-content">
            <p>tools</p>
            <li><i class="fa-solid fa-comment"></i> chat</li>
            <li><i class="fa-solid fa-phone"></i>  support</li>
        </div>
      </div>
      <div className="set">
        <li><i class="fa-solid fa-gear"></i> settings</li>
      </div>
    </div>
  )
}

export default Sidebar
