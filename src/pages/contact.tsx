import React from "react";
import './contact.css';
import NavComponent from "./nav-bar";
import Footer from "./footer";
import ScheduleAppointmentButton from './schedule-button';
import { useState } from "react";
import emailjs from "emailjs-com"; // Install using npm install emailjs-com
import RecaptchaComponent from "./recaptcha";


const Contact = () => {
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
            <NavComponent/>

            {/* Contact Section */}
            <section id="contact" className="contact section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            {/* End Section Title */}

            <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">

                <div className="col-lg-5">

                <div className="info-wrap">
                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                        <h3>Address</h3>
                        <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                    </div>
                    {/* End Info Item */}

                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-telephone flex-shrink-0"></i>
                    <div>
                        <h3>Call Us</h3>
                        <p>+1 5589 55488 55</p>
                    </div>
                    </div>
                    {/* End Info Item */}

                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                        <h3>Email Us</h3>
                        <p>info@example.com</p>
                    </div>
                    </div>
                    {/* End Info Item */}

                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                    frameBorder="0"
                    style={{ border: 0, width: "100%", height: "270px" }}
                    // allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                </div>

                <div className="col-lg-7">
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
                {/* End Contact Form */}

            </div>

            </div>

            </section>
            {/* /Contact Section */}

            {/* Schedule Appointment Button */}
            <ScheduleAppointmentButton />

            <Footer/>

        </div>
        
    )

}

export default Contact;