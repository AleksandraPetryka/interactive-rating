import './App.css';
import Card from './components/Card';
import IconStar from './assets/icon-star.svg';

let RATING_SCORE = {};

function App() {

  function handleSubmit(event) {
    event.preventDefault();
    console.log('You clicked submit with score: ', RATING_SCORE);
  }

  function rateHandler(score) {
    RATING_SCORE = {score};
    console.log('Rate has been hanged to: ', RATING_SCORE);
  }

  return (
    <Card>
      <button className="rating-btn"><img src={IconStar} alt="star"></img></button>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!
      </p>
      <div>
        <button className="rating-btn" onClick={(() => rateHandler(1))}>1</button>
        <button className="rating-btn" onClick={(() => rateHandler(2))}>2</button>
        <button className="rating-btn" onClick={(() => rateHandler(3))}>3</button>
        <button className="rating-btn" onClick={(() => rateHandler(4))}>4</button>
        <button className="rating-btn" onClick={(() => rateHandler(5))}>5</button>
      </div>
      <div>
        <button className="submit-btn" onClick={handleSubmit}>SUBMIT</button>
      </div>
    </Card>
  );
}

export default App;
