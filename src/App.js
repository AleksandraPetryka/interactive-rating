import './App.css';

function App() {
  return (
    <section>
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
        <button>Submit</button>
      </div>
    </section>
  );
}

export default App;
