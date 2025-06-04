import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Demographic from '../components/Demographic';
import Buttonback from '../components/Buttonback';
import Navbar from '../components/Navbar';

function Picture({ centerContent }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const navigate = useNavigate();
    const [captured, setCaptured] = useState(null);
    const [demographicData, setDemographicData] = useState();
    const [isPreviewing, setIsPreviewing] = useState(false);
    const [stream, setStream] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
  
  
  const handleConfirm = async () => {
    if (!captured) return;

    setIsLoading(true)

    try {
        const response = await fetch(captured);
        const blob = await response.blob();
        const file = new File([blob], 'capture.png', { type: 'image/png' });

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
            const base64_encoded_string = reader.result;

            try {
                const apiResponse = await fetch('https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ image: base64_encoded_string }),
                    }
                );

                const result = await apiResponse.json();

                if (result.success) {
                    setDemographicData(result.data);
                    navigate('/select', { state: { demographicData: result.data } });
                } else {
                    window.alert(`Analysis failed: ${result.message}`);
                }
                } catch (error) {
                    console.error("'API request error:", error);
                    window.alert("Something went wrong, with the API.");
                }   finally {
                    setIsLoading(false);
                }
            };
        } catch (error) {
            console.error ('Error during confirmation:', error);
            window.alert('Something went wrong, please try again.');
            setIsLoading(false)
        }
    };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        
        if (videoDevices.length > 0) {
          const mediaStream = await navigator.mediaDevices.getUserMedia({
            video: { deviceId: videoDevices[0].deviceId }
          });
          
          if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          setStream(mediaStream);
        }
      } else {
        console.warn("No video input found.");
      }
    } catch (err) {
      console.error("Camera access error:", err);
    }
  };

  startCamera();
}, []);

    const stopCamera = () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
    }
    };

    const captureImage = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const stream = video.srcObject;

        if (canvas && video) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        setCaptured(dataURL);
        setIsPreviewing(true);
        stopCamera();

        if (stream) {
        stream.getTracks().forEach(track => {
            track.stop();
        });
        }

        fetch(dataURL)
        .then(res => res.blob())
        .then(blob => {
            const fakeFile = new File([blob], 'capture.png', { type: 'image/png' });
            const fakeEvent = { target: { files: [fakeFile] } };
            handleConfirm(fakeEvent);
        });
        }
    };

    const handleRetake = async () => {
    setCaptured(null);
    setIsPreviewing(false);
  
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');

        if (videoDevices.length > 0) {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: { deviceId: videoDevices[0].deviceId }
            });

            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
                setStream(mediaStream);
            }
        }
        } catch (err) {
            console.error("Error restarting camera:", err);
        }
    };

    if (isLoading) {
        return (
            <div className="loader-screen">
                <p>Analyzing image, please wait...</p>
            </div>
        );
    }

  return (
    <section id="frame16">
        <Navbar />
        {!isPreviewing ? (
            <div className='picture'>
                <Link to='/results'>
                    <Buttonback />
                </Link>
                <video ref={videoRef} autoPlay playsInline className='w-screen h-screen'/>
                <div className='takepic-box'>
                    <span className='takepic-text'>Take Picture</span>
                    <div className='takepic-button'>
                        <img onClick={captureImage} style={{ cursor: 'pointer' }} src="/CameraB.png" alt="CameraB" />
                    </div>
                </div>
            </div>
        ) : (
            <div>
                <div className='Shot'>
                    <div className='Shotg'>Great Shot!</div>
                    <img src={captured} alt="Captured" className='w-screen h-screen'/>
                </div>
                <div className='Shot'>
                    <div className='Shotp'>Preview</div>
                    <button onClick={handleRetake} className='tryAgain'>
                        <p className='Shotr'>Retake</p>
                    </button>
                    <button onClick={handleConfirm} className='useShot'>
                        <div className='Shots'>Use this Photo</div>
                    </button>
                </div>
            </div>
        )}
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        {demographicData && <Demographic demographicData={demographicData} />}
    </section>
  )
}

export default Picture