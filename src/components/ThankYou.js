import ilustration from '../assets/illustration-thank-you.svg';
import Card from './Card';

function ThankYou(props) {

  return (
    <Card>
      <div>
        <img className="image" src={ilustration} alt='thank-you' />
      </div>
      <div className='info'>You selected {props.score} out of 5</div>
      <h1>Thank you</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!</p>
    </Card>
  )
}

export default ThankYou;