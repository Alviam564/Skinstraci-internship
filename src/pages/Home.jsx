import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section id="frame1">
      <Navbar />
      <span className='Sophisticated_skincare slide'>
        Sophisticated Skincare
      </span>
      <p className='SkinstricP'>
        Skinstric developed an A.I. that creates a highly-personalised routine tailored to what your skin needs.
      </p>
      <div>
        <div className='Rectangle10' />
        <div className='Auto_layout_button-icon-text-shrunk'>
        <div className='Rectanglehandler2'>
          <div className='Inside_auto_layout1' />
          <div className='Rectangle16-l' />
          <div className='Rectangle17-l' />
          <div className='Rectangle13-l' />
          <div className='Polygon1-l' />
        </div>
        <div>
          <div className='discoverai'>Discover A.I.</div>
          <div className='Inside_auto_layou2' />
        </div>
      </div>
      </div>
      <div>
        <div className='Rectangle2' />
        <Link to ="/testing">
          <div className='Auto_layout_center_button-icon-text-shrunk'>
          <div className='Taketest'>Take Test</div>
          <div className='Inside_auto_layou1' />
            <div className='Rectanglehandler2'>
              <div className='Inside_auto_layout2' />
              <div className='Rectangle16-r' />
              <div className='Rectangle17-r' />
              <div className='Rectangle13-r' />
              <div className='Polygon1-r' />
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Home