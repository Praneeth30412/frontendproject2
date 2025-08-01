import React, { Component } from 'react';
import './css/Page5.css';

export default class Page5 extends Component {
  constructor() {
    super();
    this.state = { index: 0, slideCount: 3 };
    this.slideRef = React.createRef(); // ref instead of getElementById
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
      <>
        <header>
          <div className='logo'>Sliding Page - Slide {index + 1}</div>
        </header>

        <section>
          <div className='slider'>
            <div className='slides' ref={this.slideRef}>
              <div className='slide s1'></div>
              <div className='slide s2'></div>
              <div className='slide s3'></div>
            </div>
          </div>
        </section>

        <footer>
          Copyright @ 2025. All rights reserved.
        </footer>
      </>
    );
  }
}
