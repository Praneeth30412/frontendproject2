import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Page1 extends Component {
  render() {
    const pageStyle = {
      backgroundColor: '#f0f9ff', // light blue
      color: '#333',
      minHeight: '100vh',
      padding: '20px',
    };

    const linkBoxStyle = {
      padding: '10px 20px',
      borderRadius: '8px',
      backgroundColor: '#cceeff',
      color: '#000',
      textDecoration: 'none',
      fontWeight: 'bold',
      boxShadow: '2px 2px 8px rgba(0,0,0,0.2)',
    };

    const linkContainerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '40px',
    };

    return (
      <main style={pageStyle}>
        <h1>About KL Rahul</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          KL Rahul is an elegant Indian batsman known for his versatile stroke play.
          He has represented India across formats and has served as vice-captain in limited-overs.
          Also a reliable wicketkeeper, Rahul is respected for his temperament and adaptability.
        </p>

        <div style={linkContainerStyle}>
          <Link to="/" style={linkBoxStyle}>Go to Home</Link>
          <Link to="/page2" style={linkBoxStyle}>Go to Page2</Link>
        </div>
      </main>
    );
  }
}
