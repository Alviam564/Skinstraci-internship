import React from 'react'
import Navbar from '../components/Navbar'
import Buttonback from '../components/Buttonback'
import { Link } from 'react-router-dom'

function Select() {
  return (
    <section id="frame13">
      <Navbar />
      <div>
        <div className=''></div>
        <div className=''></div>
        <div className=''></div>
      </div>
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
    </section>
  )
}

export default Select