import { useState } from 'react';
import axios from 'axios';
import { GoKebabHorizontal } from 'react-icons/go'
import Buttonproceed from './Buttonproceed';
import Buttonback from './Buttonback';
import { Link } from 'react-router-dom';

const Userinfo = ({ currentStep }) => {
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
    <div className='rombuses'>
      <div className="back-button-wrapper">
        <Link to="/">
          <Buttonback />
        </Link>
      </div>
      <div className='Rectangle18'/>
      <div className='Rectangle10-2'/>
      <div className='Rectangle17-2'/>
      {!loading && step === 1 && (
        <div className='yourname'>
          <div className='click_to_type1'>Click to type</div>
          <form onSubmit={handleNameSubmit}>
            <input className="input" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          </form>
          <div className='Line1' />
        </div>
      )}
      {!loading && step === 2 && (
        <div className='yourcity'>
          <div className='click_to_type2'> Where do you live?</div>
          <form onSubmit={handleLocationSubmit}>
            <input className="input" type="text" placeholder="Enter your location" value={location} onChange={(e) => setLocation(e.target.value)}/>
          </form>
          <div className='Line2' />
        </div>
      )}
      {loading && ( 
        <div className='Loading'>
          <p>Now Processing</p> 
          <GoKebabHorizontal />
        </div>
      )}
      {step === 3 && !loading && (
        <>
          <div className='Next'>
            <div>Thank you!</div>
            <div>Proceed to the next step</div>
          </div>
          <div className='forward-button-wrapper'>
            <Link to="/results">
              <Buttonproceed />
            </Link>
          </div>
        </>
      )}
      <div className={`forward-button-wrapper ${step === 3 ? 'none' : 'hidden'}`}>
        <Buttonproceed />
      </div>
    </div>
  );
};

export default Userinfo;