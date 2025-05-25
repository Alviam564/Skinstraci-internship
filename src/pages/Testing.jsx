import React from 'react'
import Navbar from '../components/Navbar'
import Buttonback from '../components/Buttonback'
import { Link } from 'react-router-dom'
import Userinfo from '../components/Userinfo'

function Testing() {
  return (
    <section id="frame6">
      <Navbar />
      <div className='start_analysis'>To start Analysis</div>
      <div className='rombuses'>
        <div className='Rectangle18' />
        <div className='Rectangle10-2' />
        <div className='Rectangle17-2' />
      </div>
      <div>
        <Link to="/">
          <Buttonback />
        </Link>
      </div>
      <Userinfo />
    </section>
  )
}

export default Testing