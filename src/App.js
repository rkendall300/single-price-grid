import './App.css';

function App() {
  return (
    <main>
      <div id="backdrop">
        <div id="card">
          <div id="community-section">
            <h1 id="title">Join our community</h1>
            <p id="guarantee">30-day, hassle-free money back guarantee</p>
            <p id="description">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
          </div>
          <div id="monthly-section">
            <h2 id="monthly">Monthly Subscription</h2>
            <p id="price"><span id="large">$29 </span>per month</p>
            <p id="access">Full access for less than $1 a day</p>
            <button id="signup">Sign Up</button>
          </div>
          <div id="why-section">
            <h2 id="why">Why Us</h2>
            <ul id="why-list">
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code reviews</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard desks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
