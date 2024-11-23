import React, { useState } from 'react';
import './styles/custom-swiper.css';



// // Custom Swiper Component
const CustomSwiper = () => {
    const testimonials = [
      {
        name: 'Saul Goodman',
        role: 'Ceo &amp; Founder',
        imgSrc: 'assets/img/testimonials/testimonials-1.jpg',
        quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.',
      },
      {
        name: 'Sarah Jhonson',
        role: 'Product Manager',
        imgSrc: 'assets/img/testimonials/testimonials-2.jpg',
        quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      },
      {
        name: 'Jina Doe',
        role: 'Marketing Director',
        imgSrc: 'assets/img/testimonials/testimonials-3.jpg',
        quote: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      },
    ];
  
    // State to keep track of the current active testimonial
    const [activeIndex, setActiveIndex] = useState(0);
  
    // Function to change the active testimonial based on the clicked bullet
    const handleBulletClick = (index: number) => {
      setActiveIndex(index);
    };
  
    return (
      <div className="custom-swiper">
        {/* Displaying the Active Testimonial */}
        <div className="testimonial-item">
          <img src={testimonials[activeIndex].imgSrc} className="testimonial-img" alt="" />
          <h3>{testimonials[activeIndex].name}</h3>
          <h4>{testimonials[activeIndex].role}</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            {testimonials[activeIndex].quote}
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
  
        {/* Pagination Bullets */}
        <div className="swiper-pagination">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`bullet ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleBulletClick(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };

  export default CustomSwiper;