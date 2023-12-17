import React from 'react'
import "./footer.css"
import Lottie from 'lottie-react'
import animationData from '../assets/footer.json'

function Footer() {

  return (
    <div className='footer-container'>
      <div className="footer-content">
        <div className="footer-text">
            <h2>Balogh Dávid</h2>
            <p>Junior Szoftverfejlesztő</p>
        </div>
        <div className="footer-image">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </div>
  )
}

export default Footer