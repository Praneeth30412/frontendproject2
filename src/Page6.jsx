import React, { Component } from 'react'
import './css/Page6.css'

export default class Page6 extends Component {
  render() {
    return (
      <>
          <div id='header'>
               <div className='logo'>
                    VIKAS WEDDING INVITATION
               </div>
          </div>
          <div id='section'>
                    <div className='card'>
                         <img src='images/1.jpg' alt='image1'></img>
                         <label>NBK</label>
                    </div>
                    <div className='card'>
                         <img src='images/wed.jpeg' alt='image2'></img>
                         <label>Chintu loves Vikas</label>
                    </div>
                    <div className='card'>
                         <img src='images/3.png' alt='image3'></img>
                         <label>Adidaas</label>
                    </div>
                     

          </div>
          <div id='footer'>Copyright @ 2025. All rights reserved.</div>

      </>
    )
  }
}