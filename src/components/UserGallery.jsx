import React from 'react'
import { GoKebabHorizontal } from 'react-icons/go'

function UserGallery({ centerContent, handleFileChange, dim }) {
  return (
    <>
      {centerContent === 'scanning' && (
        <>
          <div className='rombuses'>
            <div className='Rectangle18' />
            <div className='Rectangle10-2' />
            <div className='Rectangle17-2' />
          </div>
          <div className='Loading2'>
            <div>Preparing your Analysis</div>
            <GoKebabHorizontal />
          </div>
        </>
      )}
      {centerContent === 'initial' && (
        <>
          <div className={`GalleryWrapper ${dim ? 'dimmed' : ''}`}>
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