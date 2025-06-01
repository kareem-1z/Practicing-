import React, { useState } from 'react'; // ✅ FIXED: added useState import
import './App.css';

function Header() {
  return (
    <header className="header">
      <h1>Welcome to my DOMAINN!</h1>
      <p>I wonder what else I can do!</p>
    </header>
  );
}

function Features() {
  return (
    <section className="features">
      <h2>This is really cool!</h2>
      <ul>
        <li>What else can I learn! and improveeee!</li>
        <li>How can I contribute to the world!</li>
        <li>I need moreeee!</li>
      </ul>
    </section>
  );
}

function CallToAction() {
  const [catUrl, setCatUrl] = useState(null); // ✅ WORKS now

  const getRandomCat = () => {
    const newCatUrl = `https://cataas.com/cat?${Date.now()}`;
    setCatUrl(newCatUrl);
  };

  return (
    <section className="call-to-action">
      <h2>Want a Random Cat?</h2>
      <button onClick={getRandomCat}>Random Cat Pic</button>
      {catUrl && (
        <div className="cat-container">
          <img src={catUrl} alt="Random cat" className="cat-image" />
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>probably some copyright infringement stuff goes here</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
