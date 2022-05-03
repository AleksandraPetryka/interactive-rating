import './App.css';
import Card from './components/Card';
import IconStar from './assets/icon-star.svg';

function App() {
  return (
    <Card>
      <button className="rating-btn"><img src={IconStar} alt="star"></img></button>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!
      </p>
      <div>
        <button className="rating-btn">1</button>
        <button className="rating-btn">2</button>
        <button className="rating-btn">3</button>
        <button className="rating-btn">4</button>
        <button className="rating-btn">5</button>
      </div>
      <div>
        <button className="submit-btn">SUBMIT</button>
      </div>
    </Card>
  );
}

export default App;
