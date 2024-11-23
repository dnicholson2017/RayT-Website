import React from 'react';
import './styles/about-page.css';
import NavComponent from "../components/nav-bar";
import Footer from "../components/footer";
import ScheduleAppointmentButton from "../components/schedule-button";
import homeHero from '../assets/home-hero.jpg';
import CustomSwiper from './custom-swiper';

const AboutPage = () => {
  return (
    <div>
      <NavComponent />
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up">
          <div className="about-container">
            {/* Left Section */}
            <div className="about-left">
              <h2>About Breyer Construction &amp; Landscape</h2>
              <p>
                Breyer Construction & Landscape LLC is a family-owned business founded in 2001 by brothers Matthew and John Breyer. 
                The company is based in Reading, PA, and serves the Southeastern PA communities from Harrisburg to Allentown to Philadelphia. 
                Breyer has two divisions: Dream Backyards and Interior Remodeling.
              </p>
            </div>

            {/* Right Section */}
            <div className="about-right">
              <img
                src={homeHero}
                alt="Owner Portrait"
                className="owner-portrait"
              />
              <img
                src={homeHero}
                alt="Final Product"
                className="final-product"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <CustomSwiper />
        </div>
      </section>

      {/* Schedule Appointment Button */}
      <ScheduleAppointmentButton />

      <Footer />
    </div>
  );
};

export default AboutPage;
