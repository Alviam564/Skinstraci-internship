import React from 'react'
import { Link } from 'react-router-dom'

function UserCamera({ centerContent, showInfo, setShowInfo }) {
    const handleImageClick = () => {
        setShowInfo(prev => !prev)
    }

  return (
      <>
      {centerContent === 'initial' && (
        <>
            <div className='Scan'>
                <div className='rombuses-l'>
                <div className='Rectangle18-l'></div>
                <div className='Rectangle10-l'></div>
                <div className='Rectangle17-l'></div>
                </div>
            </div>
            <div className='line-l'>
                <img src="/line_l.png" alt="" />
            </div>
            <div className='image-l'>
                <img src="/camera.png" alt="" onClick={handleImageClick} style={{ cursor: 'pointer' }} />  
                {showInfo && (
                <div className='float-info-box'>
                    <div className='AllowCamera'>
                        <div className='float-info-text'>Allow A.I. to access your camera</div>
                        <div className='floatline'></div>
                        <Link to="/camera">
                            <div className='Autolayout_yes'>
                                <div className='Allow'>
                                    Allow
                                </div>
                            </div>
                        </Link>
                        <div className='Autolayout_no' onClick={() => setShowInfo(false)}>
                            <div className='Deny'>Deny</div>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <div className='AccessScantext'>
                <span>Allow A.I. To scan your face</span>
            </div>
        </>
    )}
    </>
  )
}

export default UserCamera