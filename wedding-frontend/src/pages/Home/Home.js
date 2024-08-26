import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

const quotes = [
  { text: "Honey, I accidentally made 24 cabinets...", author: "Josef" },
  { text: "There's a difference between Raising Cane's and meth...", author: "Josef" },
  { text: "I swear, girls are... something else...", author: "Josef" },
  { text: "I like a girl that smells of tortilla...", author: "Josef" },
  { text: "People love my buns...", author: "Josef" },
  { text: "I'd recognize that rear from anywhere...", author: "Josef" }
  // Add more quotes as needed
];

function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const fadeInterval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
        setFadeClass('fade-in');
      }, 1000); // Wait for fade-out transition to complete before changing quote
    }, 10000); // Display quote for 8 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(fadeInterval);
  }, []);

  return (
    <div>
      <div className="header-window" id="join-tab">
        <img 
          src="https://lh3.googleusercontent.com/d/1aSD2twqAQs2bGFZmC3dFFfPD4KlmVcRj=w1000?authuser=0" 
          alt="Josef and Rose looking out a window." 
        />
        <div className="container">
          <h1 className="xxl-txt fancy-font">Join us for our marriage on:</h1>
          <p className="xl-txt fancy-font">6/30/2025</p>
          <Link to="/rsvp" className="xl-txt button">RSVP</Link>
        </div>
      </div>

      <div id="quote-container" className={`quotes ${fadeClass}`}>
        <span id="quote-text" className="fancy-font xxl-txt">
          "{quotes[currentQuoteIndex].text}"
        </span>
        <p id="quote-author" className="lg-txt subtext">
          - {quotes[currentQuoteIndex].author}
        </p>
      </div>
    </div>
  );
}

export default Home;
