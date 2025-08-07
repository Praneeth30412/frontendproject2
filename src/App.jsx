import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="header">
        <div className="logo-text">
          Welcome to Front End Class
        </div>
      </div>

      <div id="section">
        <div className="intro-box">
          <h1>FEDF Class in KLU</h1>
          <h2>Topic: Introduction to React</h2>
          <h3>Date: 29.07.25</h3>
          <h4>2400030412 - G Praneeth</h4>
        </div>

        <div className="page-grid">
          <div className="page-box">
            <img src="images/1.jpg" alt="Page1" />
            <Link to="/page1">Go To Page1</Link>
          </div>
          <div className="page-box">
            <img src="images/klr.png" alt="Page2" />
            <Link to="/page2">Go To Page2</Link>
          </div>
          <div className="page-box">
            <img src="images/daaku.jpg" alt="Page3" />
            <Link to="/page3">Go To Page3</Link>
          </div>
          <div className="page-box">
            <img src="images/ntr.jpg" alt="Page5" />
            <Link to="/page5">Go To Page5</Link>
          </div>
          <div className="page-box">
            <img src="images/wed.jpeg" alt="Page6" />
            <Link to="/page6">Go To Page6</Link>
          </div>
        </div>
      </div>

      <div id="footer">
        Copyright © 2025. All rights reserved.
      </div>
    </>
  );
}

export default App;


