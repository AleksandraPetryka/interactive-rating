import IconStar from '../assets/icon-star.svg';
import Card from './Card';
import { useState } from 'react';

function Rate({ onSubmit }) {
  const [ratingScore, setRatingScore] = useState(null);

  function handleSubmit() {
    onSubmit(ratingScore);
    console.log('You clicked submit with score: ', ratingScore);
  }

  const possibleScores = [1, 2, 3, 4, 5];

  return (
    <Card>
      <button className="star"><img src={IconStar} alt="star"></img></button>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!
      </p>
      <div>
        {
          possibleScores.map(value => {
            let className = 'rating-btn';
            if (value === ratingScore) {
              className += ' rating-btn--active';
            }
            return (
              <button
                className={className}
                onClick={(() => setRatingScore(value))}
                key={value}
              >
                {value}
              </button>
            );
          })
        }
      </div>
      <div>
        <button className="submit-btn" onClick={handleSubmit} >SUBMIT</button>
      </div>
    </Card>
  )
}

export default Rate;