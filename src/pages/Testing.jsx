import React from 'react'
import Navbar from '../components/Navbar'
import Userinfo from '../components/Userinfo'

function Testing({ step, loading }) {
  return (
    <section id="frame6">
      <Navbar />
      <div className='start_analysis'>To start Analysis</div>
      <Userinfo />
    </section>
  )
}

export default Testing