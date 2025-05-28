import React from 'react'
import { GoKebabHorizontal } from 'react-icons/go'

function UserGallery({ centerContent, handleFileChange}) {
  return (
    <>
      {centerContent === 'scanning' && (
        <>
          <div className='rombuses'>
            <div className='Rectangle18' />
            <div className='Rectangle10-2' />
            <div className='Rectangle17-2' />
          </div>
          <div className='Loading'>
            <span>Preparing your Analysis</span>
            <GoKebabHorizontal />
          </div>
        </>
      )}
      {centerContent === 'initial' && (
        <>
          <div>
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
              <img src="/camera.png" alt="" />
            </div>
            <div className='AccessScantext'>
              <span>Allow A.I. To scan your face</span>
            </div>
          </div>
          <div>
            <div className='Gallery'>
              <div className='rombuses-r'>
                <div className='Rectangle18-r'></div>
                <div className='Rectangle10-r'></div>
                <div className='Rectangle17-r'></div>
              </div>
            </div>
            <div className='line-r'>
              <img src="/line_r.png" alt="" />
            </div>
            <div className='image-r'>
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <img
                src="/gallery.png"
                alt="Click to upload"
                style={{ cursor: "pointer" }}
                onClick={() => document.getElementById("fileInput").click()}
              />
            </div>
            <div className='AccessGallerytext'>
              <span>Allow A.I. Access Gallery</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default UserGallery