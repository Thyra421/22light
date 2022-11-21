import "./carousel.css";
import { v4 as uuidv4 } from 'uuid';

function Arrow({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
}

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <div className="carousel-all-dots">
      {sliderImage.map((slide, index) => (
        <span
          key={uuidv4()}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={uuidv4()}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img
            className="carousel-slide-image"
            src={slide.picture}
            alt="slide img"
          ></img>
          <h2 className="carousel-slide-title">{slide.title}</h2>
          <h3 className="carousel-slide-text">{slide.description}</h3>
        </div>
      ))}
    </section>
  );
}

export { Arrow, Dots, SliderContent };
