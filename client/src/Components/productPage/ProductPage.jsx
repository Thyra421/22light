import React, { useState, useEffect } from 'react';
import { fetchProduct } from '../../Helper/Product';
import Product from '../product/Product';

function ProductPage() {
    const [iD, setID] = useState();

    const [product, setProduct] = useState();

    useEffect(() => {
        getProductId();
    }, [])

    useEffect(() => {
        callback();
        // eslint-disable-next-line
    }, [iD])


    const getProductId = () => {
        const url = window.location.pathname;
        const finalID = url.substring(6);
        setID(finalID);
    }

    // Callback function for searching product
    const callback = async () => {
        try {
            const data = await fetchProduct(iD);
            setProduct(data)
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="productPage">
            <div className="productPage-container">
                {product?.map((item, index) => (
                    <Product
                        key={index}
                        id={item._id}
                        picture={item.picture}
                        name={item.name}
                        brand={item.brand}
                        link={item.link}
                        description={item.description}
                        colours={item.colours}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductPage