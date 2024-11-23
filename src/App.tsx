import { useState } from 'react';
import './App.css';
import NavComponent from './components/nav-bar';
import homeHero from './assets/home-hero.jpg';
import Footer from './components/footer';
import { Link } from 'react-router-dom';
import RecaptchaComponent from "./components/recaptcha";
import emailjs from "emailjs-com"; // Install using npm install emailjs-com


function App() {
  const [formStatus, setFormStatus] = useState(""); // Tracks the form submission status
  const [captchaValid, setCaptchaValid] = useState(false); // Tracks CAPTCHA validation
  const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      };
  
  const handleCaptchaChange = (value: string | null) => {
      setCaptchaValid(!!value); // Update CAPTCHA status based on its value
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Prevent default form submission behavior

      if (!captchaValid) {
          setFormStatus("captchaError");
          return; // Prevent form submission if CAPTCHA is not valid
      }

      setFormStatus("loading");

      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      try {
          // Replace these values with your EmailJS service info
          await emailjs.send(
              "service_vgwuvlm", 
              "template_uu5q2oq", 
              {
                  firstname: data.firstname,
                  lastname: data.lastname,
                  email: data.email,
                  phone: data.phone,
                  message: data.message,
              },
              "wzrAY44o8phHvy3Jj"
          );
          setFormStatus("success");
          // Reset form data state after successful submission
          setFormData({
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              message: "",
          });
      } catch (error) {
          console.error("EmailJS error:", error);
          setFormStatus("error");
      }
  };
  
  return (
    <div>
      <body className="index-page">
        <NavComponent />

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Our Website</h1>
            <p>Your journey to success starts here.</p>
          </div>
        </section>

        {/* About Section */}
        <section className="about">
          <div className="portrait-container">
            <img src={homeHero} className="portrait" alt="Website Owner" />
          </div>
          <div className="about-content">
            {/* Left Box */}
            <div className="about-box about-mission">
              <h2>Our Mission</h2>
              <p>
                We are committed to providing the best services and solutions for our customers. Our history is
                built on trust and excellence.
              </p>
            </div>

            {/* Right Box */}
            <div className="about-box about-testimonial">
              <h2>What Our Customers Say</h2>
              <p>
                "This company transformed my business! Their professionalism and expertise are unmatched." 
                - A Happy Customer
              </p>
            </div>
          </div>
        </section>

        {/* Service Section */}
        <section className="services-section">
          <div className="container">
            {/* First Row: Popular Services */}
            <div className="services-row">
              <div
                className="service-box"
                style={{
                  backgroundImage: `url(${homeHero})`,
                }}
              >
                <div className="service-box-content">
                  <h3 className="service-title">Service 1</h3>
                  <i className="bi bi-caret-right arrow-icon"></i>
                </div>
              </div>
              <div
                className="service-box"
                style={{
                  backgroundImage: `url(${homeHero})`,
                }}
              >
                <div className="service-box-content">
                  <h3 className="service-title">Service 2</h3>
                  <i className="bi bi-caret-right arrow-icon"></i>
                </div>
              </div>
              <div
                className="service-box"
                style={{
                  backgroundImage: `url(${homeHero})`,
                }}
              >
                <div className="service-box-content">
                  <h3 className="service-title">Service 3</h3>
                  <i className="bi bi-caret-right arrow-icon"></i>
                </div>
              </div>
            </div>

            {/* Second Row: Additional Navigation */}
            <div className="services-row">
              <div
                className="service-box"
                style={{
                  backgroundImage: `url(${homeHero})`,
                }}
              >
                <Link to={'/services'} style={{ textDecoration: 'none' }}>
                  <div className="service-box-content">
                    <h3 className="service-title">More Services</h3>
                    <i className="bi bi-caret-right arrow-icon"></i>
                  </div>
                </Link>
              </div>
              <div
                className="service-box"
                style={{
                  backgroundImage: `url(${homeHero})`,
                }}
              >
                <Link to={'/about'} style={{ textDecoration: 'none' }}>
                <div className="service-box-content">
                  <h3 className="service-title">Read Testimonials</h3>
                  <i className="bi bi-caret-right arrow-icon"></i>
                </div>
                </Link>
              </div>
              <div
                className="service-box"
                style={{
                  backgroundImage: `url(${homeHero})`,
                }}
              >
                <Link to={'/schedule-appointment'} style={{ textDecoration: 'none' }}>
                  <div className="service-box-content">
                    <h3 className="service-title">Schedule Appointment</h3>
                    <i className="bi bi-caret-right arrow-icon"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="row">
              {/* Left Side: Contact Information */}
              <div className="col-md-6 contact-info">
                <img src={homeHero} alt="Company Logo" className="company-logo" />
                <address>
                  <p className="contact-label"><strong>Address:</strong></p>
                  <p className="contact-info-text">123 Main Street, City, Country</p>

                  <p className="contact-label"><strong>Phone:</strong></p>
                  <p className="contact-info-text">+123 456 7890</p>

                  <p className="contact-label"><strong>Email:</strong></p>
                  <p className="contact-info-text">info@company.com</p>
                </address>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                    frameBorder="0"
                    style={{ border: 0, width: "100%", height: "180px" }}
                    // allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
              </div>


              {/* Right Side: Contact Form */}
              <div className="col-md-6">
                <form 
                  onSubmit={handleSubmit} // onSubmit for form submission
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row gy-4">
                      <div className="col-md-6">
                          <label htmlFor="firstname-field" className="pb-2">First Name</label>
                          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} id="firstname-field" className="form-control" required />
                      </div>
                      <div className="col-md-6">
                          <label htmlFor="lastname-field" className="pb-2">Last Name</label>
                          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} id="lastname-field" className="form-control" required />
                      </div>
                      <div className="col-md-6">
                          <label htmlFor="phone-field" className="pb-2">Phone</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control" id="phone-field" required />
                      </div>
                      <div className="col-md-6">
                          <label htmlFor="email-field" className="pb-2">Email</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" id="email-field" required />
                      </div>
                      <div className="col-md-12">
                          <label htmlFor="message-field" className="pb-2">Message</label>
                          <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" rows={10} id="message-field" required></textarea>
                      </div>

                      {/* Add RecaptchaComponent and pass down props */}
                      <RecaptchaComponent 
                          captchaValid={captchaValid} 
                          handleCaptchaChange={handleCaptchaChange} 
                      />

                      {/* Conditional Rendering for Form Status */}
                      <div className="col-md-12 text-center">
                          {formStatus === "loading" && <div className="loading">Loading...</div>}
                          {formStatus === "error" && <div className="error-message">There was an error. Please try again.</div>}
                          {formStatus === "success" && <div className="sent-message">Your message has been sent. Thank you!</div>}

                          <button type="submit">Send Message</button>
                      </div>
                  </div>
              </form>
              </div>
            </div>
          </div>
        </section>


        <Footer/>

      </body>
    </div>
  );
}

export default App;
