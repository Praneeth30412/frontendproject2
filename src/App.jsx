import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  const linkBoxStyle = {
    padding: '10px 20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    boxShadow: '2px 2px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s',
    display: 'inline-block',
  };

  const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '40px',
    padding: '0 40px',
  };

  return (
    <>
      <h1>Welcome to the Web Page of Cricket</h1>
      <h2>Today's topic is about KLR and MSD</h2>

      <div style={linkContainerStyle}>
        <Link to="/page1" style={linkBoxStyle}>Go to Page1</Link>
        <Link to="/page2" style={linkBoxStyle}>Go to Page2</Link>
      </div>
    </>
  );
}

export default App;
