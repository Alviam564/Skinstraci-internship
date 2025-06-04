import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='header1'>
        <div className='header2'>
          <Link to="/">
            <div className='Skinstric'>Skinstric</div>
          </Link>
          <div className='Auto_layout_introplacer'>
            <div>
              <div className='Rectangle6' />
            </div>
            <p className='Intro'>Intro</p>
            <div>
              <div className='Rectangle8' />
            </div>
          </div>
        </div>
        <div className='button-code'>
          <div className='Auto_layout_center_button-simple '>
            <span className='Button_enter'>Enter Code</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar