import { useState, useEffect } from "react";
import "./styles/portfolio.css";
import image1 from "../assets/img/masonry-portfolio-1.jpg";
import image2 from "../assets/img/masonry-portfolio-2.jpg";
import image3 from "../assets/img/masonry-portfolio-3.jpg";
import image4 from "../assets/img/masonry-portfolio-4.jpg";
import image5 from "../assets/img/masonry-portfolio-5.jpg";
import image6 from "../assets/img/masonry-portfolio-6.jpg";
import image7 from "../assets/img/masonry-portfolio-7.jpg";
import image8 from "../assets/img/masonry-portfolio-8.jpg";
import image9 from "../assets/img/masonry-portfolio-9.jpg";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import NavComponent from "../components/nav-bar";
import Footer from "../components/footer";
import ScheduleAppointmentButton from "../components/schedule-button";


const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("*");

    const portfolioItems = [
        { id: 1, category: "filter-app", title: "App 1", image: image1 },
        { id: 2, category: "filter-product", title: "Product 1", image: image2 },
        { id: 3, category: "filter-branding", title: "Branding 1", image: image3 },
        { id: 4, category: "filter-app", title: "App 2", image: image4 },
        { id: 5, category: "filter-product", title: "Product 2", image: image5 },
        { id: 6, category: "filter-branding", title: "Branding 2", image: image6 },
        { id: 7, category: "filter-app", title: "App 3", image: image7 },
        { id: 8, category: "filter-product", title: "Product 3", image: image8 },
        { id: 9, category: "filter-branding", title: "Branding 3", image: image9 },
    ];

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
    };

    const filteredItems =
        activeFilter === "*"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeFilter);

    useEffect(() => {
    const lightbox = GLightbox({
        selector: ".glightbox",
    });
    // Cleanup to avoid duplicate lightbox instances
    return () => lightbox.destroy();
    }, [filteredItems]);

  return (
    <div>
      <NavComponent />
      <main className="main">
        <section id="portfolio" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                <li
                    className={activeFilter === "*" ? "filter-active" : ""}
                    onClick={() => handleFilterClick("*")}
                >
                    All
                </li>
                <li
                    className={activeFilter === "filter-app" ? "filter-active" : ""}
                    onClick={() => handleFilterClick("filter-app")}
                >
                    App
                </li>
                <li
                    className={activeFilter === "filter-product" ? "filter-active" : ""}
                    onClick={() => handleFilterClick("filter-product")}
                >
                    Card
                </li>
                <li
                    className={activeFilter === "filter-branding" ? "filter-active" : ""}
                    onClick={() => handleFilterClick("filter-branding")}
                >
                    Web
                </li>
            </ul>

            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {filteredItems.map((item) => (
                <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}>
                  <img src={item.image} className="img-fluid" alt={item.title} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href={item.image} title={item.title} className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Schedule Appointment Button */}
      <ScheduleAppointmentButton />
      <Footer />
    </div>
  );
};

export default Portfolio;
