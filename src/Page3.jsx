import React, { Component } from 'react'

export default class Page3 extends Component {
  render() {
    return (
      <div>
        <header>
            <nav>
                <div className='logo'>My Website</div>
                <ul id="navlist">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
                <div className='menu'onClick={()=>this.menuClick()}>&#9776;</div>
            </nav>

            </header>
            <section>
                
                <h1>  Welcome to Respoinse WebPage</h1>
                <p>
                    This is an example page which can adopt any screen size
                </p>
            </section>
            <footer>
                Copyright @ 2025.All rights reserved.
            </footer>
      </div>
    )
  }
}
