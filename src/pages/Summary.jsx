import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Buttonback from '../components/Buttonback'
import Navbar from '../components/Navbar'
import Demographic from '../components/Demographic'

function Summary() {
  const location = useLocation();
  const demographicData = location.state?.demographicData;

   return (
    <section id="frame13">
      <Navbar />
      <div className='Analysis_text'>A. I. Analysis</div>
      <div className='Demographics_title'>Demographics</div>
      <div className='Predicted_text'>Predicted Race & Age</div>
      <Demographic demographicData={demographicData}/>
      <Link to="/select">
        <Buttonback />
      </Link>
      <div className='selectionText'>If A.I. estimate is wrong, select the correct one</div>
        <Link to="/">
          <div className='Auto_layout_proceed_button-icon-text-shrunk'>
            <div>
              <div className='Proceed'>Home </div>
              <div className='Inside_auto_layout1' />
            </div>
            <div className='Rectanglehandler'>
              <div className='Inside_auto_layout2' />
              <div className='Rectangle16-p' />
              <div className='Rectangle17-p' />
              <div className='Rectangle13-p' />
              <div className='Polygon2-h' />
            </div>
          </div>
        </Link>
    </section>
  )
}

export default Summary