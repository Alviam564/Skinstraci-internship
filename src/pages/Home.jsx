import React from 'react'
import Navbar from '../components/Navbar'
import Skinstricp from '../components/Skinstricp'
import Buttontest from '../components/Buttontest'
import Buttonai from '../components/Buttonai'
import { Link } from 'react-router-dom'

/*hello*/
function Home() {
  return (
    <section id="frame1">
      <Navbar />
      <div className='button-code'>
        <div className='Auto_layout_center_button-simple '>
          <span className='Button_enter'>Enter Code</span>
        </div>
      </div>
      <span className='Sophisticated_skincare slide'>
        Sophisticated Skincare
      </span>
      <Skinstricp />
      <div className='fade'>
        <div className='Rectangle10' />
        <Buttonai />
      </div>
      <div>
        <div className='Rectangle2' />
        <Link to ="/testing">
          <Buttontest />
        </Link>
      </div>
    </section>
  )
}

export default Home