import React from 'react'
import Header from './Header'
import Sidenav from './Sidenav'
import Dashboard from './Dashboard'
import Orderboard from './Orderboard'

function Home() {
  return (
    <div className='home'>

      <Header />
      <Sidenav />
      <Dashboard />
      <Orderboard />

    </div>
  )
}

export default Home
