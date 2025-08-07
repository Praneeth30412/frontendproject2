import React, { Component } from 'react';
import './css/Page3.css';  // Navigation and content styles
import './css/Page5.css';  // Slider and footer styles

export default class Page6 extends Component {
  constructor() {
    super();
    this.state = { index: 0, slideCount: 3 };
    this.slideRef = React.createRef();
  }

  componentDidMount() {
    this.interval = setInterval(this.autoSlide, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  autoSlide = () => {
    const nextIndex = (this.state.index + 1) % this.state.slideCount;
    this.setState({ index: nextIndex }, () => {
      if (this.slideRef.current) {
        this.slideRef.current.style.transform = `translateX(-${nextIndex * 100}%)`;
      }
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div>
        {/* ✅ NAVBAR from Page3 */}
        <header>
          <nav>
            <div className='logo'>My Website</div>
            <ul id="navlist">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
            <div className='menu' onClick={() => alert("Menu clicked!")}>
              &#9776;
            </div>
          </nav>
        </header>

        {/* ✅ PAGE3 Welcome Section */}
        <section>
          <h1>Welcome to Responsive Webpage</h1>
          <p>This is an example page which can adapt to any screen size.</p>
        </section>

        {/* ✅ SLIDER from Page5 */}
        <section>
          <div className='slider'>
            <div className='slides' ref={this.slideRef}>
              <div className='slide s1'></div>
              <div className='slide s2'></div>
              <div className='slide s3'></div>
            </div>
          </div>
        </section>

        {/* ✅ FOOTER from Page3/Page5 */}
        <footer>
          Copyright @ 2025. All rights reserved.
        </footer>
      </div>
    );
  }
}
