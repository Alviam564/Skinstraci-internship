import React from 'react'
import { Link } from 'react-router-dom';
import Buttonback from '../components/Buttonback';
import Navbar from '../components/Navbar';
import Camerainfo from '../components/Camerainfo';
import Picture from '../components/Picture';

function Capture({ centerContent }) {
  return (
    <section id="frame16">
      <Navbar />
      <Picture />
      {centerContent === 'initial' && (
        <Camerainfo />
      )}
      <Link to='/results'>
        <Buttonback />
      </Link>
    </section>
  )
}

export default Capture