import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Rectangle5'>
      <Link to="/">
        <span className='Skinstric'>Skinstric</span>
      </Link>
      <div className='button-code'>
        <div className='Auto_layout_center_button-simple '>
          <span className='Button_enter'>Enter Code</span>
        </div>
      </div>
      <div className='location'>
        <div className='Auto_layout_introplacer'>
          <div>
            <div className='Rectangle6' />
            <div className='Inside_auto_layout1' />
          </div>
          <p className='Intro'>Intro</p>
          <div>
            <div className='Rectangle8' />
            <div className='Inside_auto_layout3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar