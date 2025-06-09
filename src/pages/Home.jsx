import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Home() {

useEffect(() => {
  const testBtn = document.querySelector('.Ttest-button-wrapper');
  const skincare = document.querySelector('.Sophisticated_skincare');
  const discoverBlock = document.querySelector('.Auto_layout_button-icon-text-shrunk');
  const discoverboxBlock = document.querySelector('.Rectangle10');

  if (!testBtn || !skincare || !discoverBlock || !discoverboxBlock) return;

  const move = () => {
    skincare.style.transition = 'transform 1s ease, opacity 0.5s ease';
    skincare.style.opacity = '1';
    skincare.style.transform = 'translateX(-450px)';
    discoverBlock.style.opacity = '0';
    discoverBlock.style.pointerEvents = 'none';
    discoverboxBlock.style.opacity = '0';
    discoverboxBlock.style.pointerEvents = 'none';  };

  const reset = () => {
    skincare.style.transform = 'translateX(0)';
    skincare.style.opacity = '1';
    discoverBlock.style.opacity = '1';
    discoverBlock.style.pointerEvents = 'auto';
    discoverboxBlock.style.opacity = '1';
    discoverboxBlock.style.pointerEvents = 'auto';
  };

  testBtn.addEventListener('mouseenter', move);
  testBtn.addEventListener('mouseleave', reset);

  return () => {
    testBtn.removeEventListener('mouseenter', move);
    testBtn.removeEventListener('mouseleave', reset);
  };
}, [])

  return (
    <section id="frame1">
      <Navbar />
      <div>
        <div className='rombuses'>
          <div className='Rectangle18 hidden' />
          <div className='Rectangle10-2 hidden' />
          <div className='Rectangle17-2 hidden' />
          <div className='Rectangle10' />
          <div className='dicover-button-wrapper'>
            <div className='Auto_layout_button-icon-text-shrunk'>
              <div className='Rectanglehandlerright'>
                <div className='Rectangle16-L'>
                  <div className='Rectangle17-L'> 
                    <div className='Polygon1-L' />
                  </div>
                </div>
              </div>
              <div className='discoverai'>Discover A.I.</div>
            </div>
          </div>
          <div className='title-wrapper'>
            <div className='Sophisticated_skincare'>
              Sophisticated Skincare
            </div>
          </div>
            <div className='Rectangle2' />
            <Link to ="/testing">
              <div className='Ttest-button-wrapper'>
                <div className='Auto_layout_test_button-icon-text-shrunk'>
                  <div>
                    <div className='Taketest'>Take Test</div>
                  </div>
                  <div className='Rectanglehandlerleft'>
                    <div className='Rectangle16-R'>
                      <div className='Rectangle17-R'>
                        <div className='Polygon1-R' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
        </div>
        <div className='forward-button-wrapper'>
          <p className='SkinstricP'>
            Skinstric developed an A.I. that creates a highly-personalised routine tailored to what your skin needs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home