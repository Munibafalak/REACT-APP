import React from 'react'
import Svg from '../../assests/images/logo/logo.svg'

const Footer = () => {
  return (
    <div> 
      <footer>
        <div className="column_one">
          <ul>
            <li>
             <div className="img">
             <img src={Svg} alt="Svg" />
        </div>
            </li>
            <li>
              We make sure that your safety is never compromised.
              This is why we hire all the staff under the roof of Home Comfort,
              just for your satisfaction.
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li id="Home">Home</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="social-links">
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className="column_three">
          <ul>
            <li>
              +971 58 67 47 123
            </li>
            <li>
              info@homecomfort.com
            </li>
          </ul>
          <div className="news_letter">
            <input type="text" placeholder="Enter email" />
            <button>Send</button>
          </div>
        </div>
      </footer>
    
  
      </div>
  )
}


export default Footer