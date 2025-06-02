import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Camerainfo from '../components/Camerainfo'
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
        navigate('/camera/capture');
      })
      .catch((err) => {
        console.error(err);
      });

    const redirectTimer = setTimeout(() => {
      navigate('/camera/capture');
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
          <div className='Rectangle18' />
          <div className='Rectangle10-2' />
          <div className='Rectangle17-2' />
        </div>
        <div className='cameracenter'>
          <img src="camera.png" alt="" />
        </div>
        <div className="setup">Setting up camera ...</div>
      </div>
      <Camerainfo />
    </section>
  )
}

export default Camera