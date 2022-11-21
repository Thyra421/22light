import "./shop.css";
import React, { useState, useEffect } from "react";
import { fetchAllProducts } from "../../../Helper/Shops";
import Grid from "../../../Components/grid/Grid";
import HashLoader from "react-spinners/HashLoader";
import { UilSearch } from '@iconscout/react-unicons'

export default function ShopUser() {
    document.title = "22 Light - Shop";
    const [product, setProduct] = useState();
    const [category, setCategory] = useState();
    const [brand, setBrand] = useState();
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("")

    // Use state => lance l'instruction de rebuild asynchrone
    const [loading, setLoading] = useState(true);

    // UseEffect one when laoding
    // Use effect => attend que la variable change et rebuild a ce moment
    useEffect(() => {
        callback();
        checkLoader(product);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter, brand, category]);

    // Loader before displaying product
    const checkLoader = (product) => {
        if (product === undefined) {
            setLoading(false);
        }
    };

    // Callback function for searching product
    const callback = async () => {
        try {
            const data = await fetchAllProducts(search, category, brand)
            setProduct(data)
        } catch (err) {
            console.error(err);
        }
    };

    const clearState = () => {
        setSearch("")
        setCategory()
        setBrand()
    }

    // Reset: Select / Form / Search
    const handleClear = () => {
        document.getElementById("shop-form").reset();
        document.getElementById("select-type").selectedIndex = 0;
        clearState()
        setFilter("")
    };

    // Refresh brand select
    const handleType = () => {
        if (brand !== undefined) {
            document.getElementById("select-brand").selectedIndex = 0;
        }
    }

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        setFilter(search)
    }


    return (
        <div className="shop">
            {loading ? (
                <div className="shop-loading">
                    <HashLoader
                        color="#000000"
                        loading={loading}
                        size={120}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : (
                <div className="shop-container">
                    <div className="shop-toolbar">
                        <form className="shop-searchbar" onSubmit={handleSubmit} id="shop-form">
                            <input className="shop-search" type="text" placeholder="Search product, brand..."
                                autoComplete="false" onChange={event => { setSearch(event.target.value); }} />
                            <UilSearch className="shop-icon" />
                        </form>
                        <select
                            className="shop-listing-item"
                            defaultValue="default"
                            onChange={(e) => { setCategory(e.target.value); handleType() }}
                            id="select-type"
                        >
                            <option value="default" disabled>
                                Product
                            </option>
                            <option value="tv">TV</option>
                            <option value="computers">Computers</option>
                            <option value="mobile">Mobile Phones</option>
                            <option value="tablets">Tablets</option>
                            <option value="audio">Audio</option>
                        </select>
                        {(category || search) && (
                            <span className="shop-toolbar-span">
                                <div
                                    className="shop-clear-filter"
                                    onClick={() => {
                                        handleClear();
                                    }}
                                >
                                    Clear filter
                                </div>
                            </span>
                        )}
                    </div>
                    <div className="grid">
                        {product?.map((item, index) => (
                            <Grid
                                key={index}
                                id={item._id}
                                picture={item.picture}
                                content={item.name}
                                brand={item.brand}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
