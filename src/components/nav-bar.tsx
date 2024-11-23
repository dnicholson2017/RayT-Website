import React, { useState, useEffect } from "react";
import './styles/nav-bar.css';
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavComponent = () => {
  // State to manage mobile nav toggle
  const [mobileNavActive, setMobileNavActive] = useState(false);

  // Effect to update body class when mobile nav is active or not
  useEffect(() => {
    if (mobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [mobileNavActive]);

  return (
    <header id="header" className="header d-flex align-items-center light-background sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <Link to={'/'} style={{ textDecoration: 'none' }} className="logo d-flex align-items-center me-auto me-xl-0" >
          <h1 className="sitename">Logo</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to={'/'}><span>Home</span></Link></li>
            <li><Link to={'/about'}><span>About</span></Link></li>
            <li><Link to={'/services'}><span>Services</span></Link></li>
            <li><Link to={'/portfolio'}><span>Portfolio</span></Link></li>
            <li><Link to={'/contact'}><span>Contact</span></Link></li>
          </ul>

          <i
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={() => setMobileNavActive(!mobileNavActive)}
          />
        </nav>

        <div className="header-social-links">
          <a href="https://x.com/elonmusk" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="https://www.facebook.com/TypeScript.TS/" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/rocoderes24x7/" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="https://www.youtube.com/" className="youtube"><i className="bi bi-youtube"></i></a>
        </div>
      </div>
    </header>
  );
};

export default NavComponent;
