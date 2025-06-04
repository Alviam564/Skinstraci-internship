import React from 'react'
import Navbar from '../components/Navbar'
import Buttonback from '../components/Buttonback'
import { Link, useLocation } from 'react-router-dom'

function Select() {
  const location = useLocation();
  const demographicData = location.state?.demographicData;

  return (
    <section id="frame12">
      <Navbar />
      <div>
        <div className='AI_Analysis'>A. I. Analysis</div>
        <div className='AI_text'>A. I. has estimated the following. Fix estimated information if needed. </div>
      </div>
      <div className='Analysis'>
        <div>
          <Link to='/summary' state={{ demographicData }}>
            <div className='Demograpghics_option'></div>
            <span className='Demograpghics_text'>Demograpghics</span>
          </Link>
        </div>
        <div>
          <div className='Skin_Type_option'></div>
          <span className='Skin_Type_text'>Skin Type Details</span>
        </div>
        <div>
          <div className='Cosmetic_Concerns_option'></div>
          <span className='Cosmetic_Concerns_text'>Cosmetic Concerns</span>
        </div>
        <div>
          <div className='Weather_option'></div>
          <span className='Weather_text'>Weather</span>
        </div>
      </div>
      <div>
        <Link to="/results">
          <Buttonback />
        </Link>
      </div>
      <div>
        <Link to="/summary" state={{ demographicData }}>
          <div className='Auto_layout_proceed_button-icon-text-shrunk'>
            <div>
              <div className='Proceed'>Get Summary</div>
            </div>
            <div className='Rectanglehandler'>
              <div className='Rectangle16-p' />
              <div className='Rectangle17-p' />
              <div className='Rectangle13-p' />
              <div className='Polygon2-s' />
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Select