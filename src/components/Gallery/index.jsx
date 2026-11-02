import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import "./Gallery.css";

export default function Gallery({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (!slides || slides.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="gallery-container">
      <button
        className="gallery-arrow prev"
        onClick={handlePrev}
        aria-label="Slide anterior"
      >
        <img src={arrowLeft} alt="Anterior" />
      </button>

      <div className="gallery-slide">
        <div className="gallery-content">
          {currentSlide.subtitle && (
            <span className="gallery-subtitle">{currentSlide.subtitle}</span>
          )}
          <h1 className="gallery-title">{currentSlide.title}</h1>
          <p className="gallery-description">{currentSlide.description}</p>
          <Link to={currentSlide.link || "/produtos"} className="gallery-btn">
            {currentSlide.buttonText || "Aproveitar Oferta"}
          </Link>
        </div>

        <div className="gallery-image-wrapper">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="gallery-image"
          />
        </div>
      </div>

      <button
        className="gallery-arrow next"
        onClick={handleNext}
        aria-label="Próximo slide"
      >
        <img src={arrowRight} alt="Próximo" />
      </button>

      <div className="gallery-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`gallery-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
