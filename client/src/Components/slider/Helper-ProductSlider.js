import "./productslider.css";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Product(props) {
  return (
    <div className="productSlider-container">
      <img className="productSlider-grid-picture" src={props.picture} alt="product pics" />
      <div className="productSlider-brand">{props.title}</div>
      <div className="productSlider-name">{props.description}</div>
    </div>
    );
}

export { Product };