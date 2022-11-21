import React, { useState, useEffect } from "react";
import "./carousel.css";
import data_slide from "./carousel_data.json";
import { SliderContent } from "./Helper_Carousel";

const lenSlide = data_slide.length - 1;

function Carousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === lenSlide ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="carousel-container">
      <SliderContent activeIndex={activeIndex} sliderImage={props.props} />
    </div>
  );
}

export { Carousel }