import './App.css';
import { useState } from 'react';
import ThankYou from './components/ThankYou';
import Rate from './components/Rate';




function App() {
  const [ modalIsOpen, setModalIsOpen] = useState(false);
  const [ myPassedRate, setRateData] = useState(null);

  const pickRateDataHandler = (pickedRateData) => {
    const rateData = {
      ...pickedRateData
    };
    console.log('On App.js!');
    console.log(rateData.score);
    setRateData(rateData.score);
    console.log(myPassedRate);
  };

  return (
    <div>
      { modalIsOpen ? <ThankYou score={myPassedRate}/> : <Rate openModalFunction={setModalIsOpen} onPickRateData={pickRateDataHandler} /> }
    </div>
  );
}

export default App;
