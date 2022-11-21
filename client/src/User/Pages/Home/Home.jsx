import "./home.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import carousel_data from "../../../Components/carousel/carousel_data.json";
import { Carousel } from "../../../Components/carousel/Carousel";
import Slider from "../../../Components/slider/ProductSlider";
import HashLoader from "react-spinners/HashLoader";
import { fetchNewProduct } from "../../../Helper/Home";

export default function Home() {
    document.title = "Sneakers - Accueil";
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState()

    useEffect(() => {
        callback();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const checkLoader = (product) => {
        if (product === undefined) {
            setLoading(false);
        }
    };

    // Callback function for searching product
    const callback = async () => {
        try {
            const data = await fetchNewProduct()
            setProduct(data);
            checkLoader(product);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="home">
            <Carousel props={carousel_data} />
            {loading ? (
                <div className="home-loading">
                    <HashLoader
                        color="#000000"
                        loading={loading}
                        size={120}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : (
                <Slider props={product} />
            )}
        </div>
    );
}
