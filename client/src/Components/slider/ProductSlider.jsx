import React from "react";
import "./productslider.css";
import { Product, responsive } from "./Helper-ProductSlider";
import Carousel from "react-multi-carousel";
import { v4 as uuidv4 } from "uuid";
import "react-multi-carousel/lib/styles.css";

export default function ProductSlider(props) {
    console.log(props)
    const product = props.props.map((item) => (
        <Product
            key={uuidv4()}
            title={item.name}
            picture={item.picture}
            description={item.brand}
            id={item._id}
        />
    ));

    return (
        <div className="productSlider-carousel">
            <h3 className="productSlider-title">New Products</h3>
            <Carousel
                showDots={false}
                responsive={responsive}
                infinite={true}
                transitionDuration={500}
            >
                {product}
            </Carousel>
        </div>
    );
}
