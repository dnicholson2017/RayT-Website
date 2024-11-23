import React, { useEffect, useState } from "react";
import NavComponent from "./nav-bar";
import Footer from "./footer";
import './Appointment.css'; // Assuming you have custom CSS for this component

const Appointment = () => {
    const [iframeHeight, setIframeHeight] = useState(959); // Default height of the iframe

    useEffect(() => {
        const iframe = document.querySelector('iframe');
        if (iframe && iframe.contentWindow) {
            iframe.onload = function () {
                const iframeDocument = iframe.contentWindow?.document;
                if (iframeDocument) {
                    setIframeHeight(iframeDocument.body.scrollHeight); // Dynamically set iframe height based on content
                }
            };
        }
    }, []);

    return (
        <div className="appointment-container">
            <NavComponent />
            <div className="header-overlay">
                <h2>Schedule an Appointment</h2>
            </div>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfIQkxzY9fWcth0occYptz-YEvIG02TVZNPAEDYzeWy2ZDjjQ/viewform?embedded=true"
                width="100%" // Full width for large screens
                height={iframeHeight}
                style={{ border: "none", display: "block" }} // Remove iframe border
                className="appointment-iframe"
                scrolling="auto" // Enable scrolling
                title="Google Form"
            >
                Loading…
            </iframe>
            <Footer />
        </div>
    );
};

export default Appointment;
