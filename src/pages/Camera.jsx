import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';

function Camera() {
  const [highlight, setHighlight] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const highlightTimer = setTimeout(() => {
      setHighlight(true);
    }, 2000);

    navigator.mediaDevices.enumerateDevices()
      .then((stream) => {
        stream.getTracks().forEach(track => track.stop());
        navigate('/camera/picture');
      })
      .catch((err) => {
        console.error(err);
      });

    const redirectTimer = setTimeout(() => {
      navigate('/camera/picture');
    }, 5000);

    return () => {
      clearTimeout(highlightTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <section id="frame15">
      <Navbar />
      <div className={`camera-ui ${highlight ? 'active' : 'dimmed'}`}>
        <div className='rombuses'>
          <img src="/camera.png" alt="" />
          <div className="setup">Setting up camera ...</div>
          <div className='Rectangle18' />
          <div className='Rectangle10-2' />
          <div className='Rectangle17-2' />
        </div>
      </div>
      <div className='camerainfo'>
        <div className='info1'>To get better results make sure to have</div>
      </div>
        <div className='extrainfo'>
          <div className='extrainfo1'>
            <div className='s-box'></div>
            <span className='info2'>Neutral Expression</span>
          </div>
          <div className='extrainfo2'>
            <div className='s-box'></div>
            <span className='info3'>Frontal Pose</span>
          </div>
          <div className='exrtainfo3'>
            <div className='s-box'></div>
            <span className='info4'>Adequate Lighting</span>
          </div>
        </div>
    </section>
  )
}

export default Camera