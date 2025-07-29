import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Page2 extends Component {
  render() {
    const linkBoxStyle = {
      padding: '10px 20px',
      borderRadius: '8px',
      backgroundColor: '#fff',
      color: 'black',
      textDecoration: 'none',
      fontWeight: 'bold',
      boxShadow: '2px 2px 8px rgba(0,0,0,0.2)',
      transition: 'transform 0.2s',
    };

    const linkHoverStyle = {
      ...linkBoxStyle,
      transform: 'scale(1.05)',
    };

    return (
      <main style={{ backgroundColor: '#e8f712b9', color: 'red', minHeight: '100vh', padding: '20px' }}>
        <h1>About MS Dhoni</h1>

        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Mahendra Singh Dhoni, popularly known as MS Dhoni or "Captain Cool," is one of the most iconic and successful
          cricketers in Indian history...
        </p>

        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Renowned for his calm demeanor, sharp cricketing brain, and exceptional finishing ability...
        </p>

        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Under his captaincy, India won the ICC T20 World Cup in 2007...
        </p>

        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          In the IPL, Dhoni has been the symbol of the Chennai Super Kings (CSK)...
        </p>

        <footer style={{ marginTop: '40px' }}>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '20px' }}>
            <li>
              <Link to="/" style={linkBoxStyle}>Go to Home</Link>
            </li>
            <li>
              <Link to="/page1" style={linkBoxStyle}>Go to Page 1</Link>
            </li>
          </ul>
        </footer>
      </main>
    );
  }
}
