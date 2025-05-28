import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Buttonback from '../components/Buttonback'
import UserGallery from '../components/UserGallery'

function Results() {
  const [preview, setPreview] = useState('');
  const [centerContent, setCenterContent] = useState('initial');
  const navigate = useNavigate();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file))
      setCenterContent('scanning');

      const toBase64= (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file)
          reader.onload = () => resolve(reader.result)
          reader.onerror = (error) => reject(error)
        })

      try {
        const base64_encoded_string = await toBase64(file)
        
        const response = await fetch('https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: base64_encoded_string}),
        });
        
        const result = await response.json();
        console.log("API result:", result);

        if (result.success) {
          window.alert('Image analyzed successfully')
          navigate('/select');
        } else {
          console.warn('Image analysis failed:', result.message)
          window.alert(`Analysis failed: ${result.message}`)
        }
      } catch (err) {
        console.error('Error during analysis:', err);
        window.alert('Something went wrong, please try again');
      }
    }
  }

   return (
    <section id="frame9">
      <Navbar />
      <div className='start_analysis'>To start Analysis</div>
      <UserGallery centerContent={centerContent} handleFileChange={handleFileChange} />
      <div className='Preview'>
        <div className='Preview-text'> Preview </div>
        <div className='Preview-border'>
          {preview && <img className='Preview-img' src={preview} alt="Preview" />}
        </div>
      </div>
      <Link to="/">
        <Buttonback />
      </Link>
    </section>
  )
}

export default Results