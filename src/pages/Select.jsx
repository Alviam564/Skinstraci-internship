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
      <div className='Analysis_header'>
        <div className='AI_Analysis'>A. I. Analysis</div>
        <div className='AI_text'>A. I. has estimated the following. Fix estimated information if needed. </div>
      </div>
      <div className='rombuses'>
        <div className='Rectangle18' />
        <div className='Rectangle10-2' />
        <div className='Rectangle17-2' />
        <div className='back-button-wrapper'>
          <Link to="/results">
            <Buttonback />
          </Link>
        </div>
        <div className='Analysis'>
          <div className='Analysisdiamond'>
            <div className='AnalysisN diamond-horizontal'>
              <Link to='/summary' state={{ demographicData }}>
                <div className='Demograpghics_option diamond'>
                  <span>Demograpghics</span>
                </div>
              </Link>
            </div>
            <div className='diamond-row'>
              <div className='AnalysisW '>
                <div className='Skin_Type_option diamond'>
                  <span>Skin Type Details</span>
                </div>
              </div>
              <div className='AnalysisE'>
                <div className='Cosmetic_Concerns_option diamond'>
                  <span>Cosmetic Concerns</span>
                </div>
              </div>
            </div>
            <div className='AnalysisS diamond-horizontal'>
              <div className='Weather_option diamond'>
                <span>Weather</span>
              </div>
            </div>
          </div>
        </div>
        <div className='forward-button-wrapper'>
          <Link to="/summary" state={{ demographicData }}>
            <div className='Auto_layout_proceed_button-icon-text-shrunk'>
              <div className='Proceed'>Summary</div>
              <div className='Rectanglehandlerleft'>
                <div className='Rectangle16-p'>
                  <div className='Rectangle17-p'>
                    <div className='Polygon2-s' />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Select