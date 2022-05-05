import './App.css';
import { useState } from 'react';
import ThankYou from './components/ThankYou';
import Rate from './components/Rate';

function App() {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [score, setScore] = useState(null);

  function submitHandler(value) {
    setScore(value);
    setModalIsOpen(true);
  }

  return (
    <div>
      { isModalOpen ? (
        <ThankYou score={score} />
      ) : (<Rate
          onSubmit={submitHandler} />
      )}
    </div>
  );
}

export default App;
