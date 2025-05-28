import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Buttonproceed from './Buttonproceed';
import { GoKebabHorizontal } from 'react-icons/go'

const Userinfo = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState()

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    localStorage.setItem('yourname', name);
    setStep(2);
  };

  const handleLocationSubmit = async (e) => {
    e.preventDefault();
    if (!location) return;

    localStorage.setItem('yourlocation', location);

    setLoading(true);
    try {
      const res = await axios.post('https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne', {
        name,
        location,
      });
      console.log('Submitted successfully:', res.data);

      setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
    } catch (err) {
      console.error('Submission error:', err);
    setLoading(false);
  }

  };

  return (
    <>
      {!loading && step === 1 && (
        <>
          <div className='yourname'>
            <div className='click_to_type1'>Click to type</div>
            <form onSubmit={handleNameSubmit}>
              <input className="input" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </form>
          </div>
          <div className='Line1' />
        </>
      )}
      {!loading && step === 2 && (
        <>
          <div className='yourcity'>
          <div className='click_to_type2'> Where do you live?</div>
            <form onSubmit={handleLocationSubmit}>
              <input className="input" type="text" placeholder="Enter your location" value={location} onChange={(e) => setLocation(e.target.value)}/>
            </form>
          </div>
          <div className='Line2' />
        </>
      )}

      {loading && ( 
        <>
          <div className='Loading'>
            <p>Now Processing</p> 
            <GoKebabHorizontal />
          </div>
        </>
      )}
      <div>
        {step === 3 && !loading && (
          <>
          <div className='Next'>
            <div>
              <span> Thank you! </span>
            </div>
            <span>Proceed to the next step</span>
          </div>
          <Link to="/results">
            <Buttonproceed />
          </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Userinfo;