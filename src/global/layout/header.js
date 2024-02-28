import React from 'react';
import Logo from '../../assests/images/logo/logo.svg'; // Corrected path to assets

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo_img">
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Service</li>
            <li>Contact</li>
            <li className="header_btn">+8980003809343</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
