import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Page2.css'
export default class Page2 extends Component {
  render() {
    return (
      <div className='main1'>
       <h1>
        I love to play cricket
       </h1>
       <br/>
       <br/>
       <div id='text1'>
        <h2>
          Today is a Good Day
        </h2>
       </div>
       <Link to="/page1">Go to Page1</Link>
       <br/><br/>
       <div className='link2'>
       <Link to="/">Go To Main Page</Link>
      </div>
      <br/>
      </div>
      
    )
  }
}