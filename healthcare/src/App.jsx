import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Components/Dashboard/Dashboard'
import "./App.css"
import Activity from './Components/Activity/Activity'

const App = () => {
  return (
    <div className='main-project'>
      <div className="side-bar">

      <Sidebar />
      </div>
      <div className="dashboard">
        <Dashboard />
      </div>
      <div className="active">
        <Activity />
      </div>
    </div>
  )
}

export default App
