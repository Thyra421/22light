import axios from 'axios';
import { SERVER_URL } from '../server_url.js'

let request = [
    `http://${SERVER_URL}:8000/products`,
]


const fetchAllProducts = async (filter, category, brand) => {
    var finalProducts = [];

    console.log(request)
    const res = await axios.get(request + (isNoParam(filter, category, brand) ? "" : "?") +
        checkParam(filter, "filter") +
        checkParam(category, "category") +
        checkParam(brand, "brand"));
    finalProducts = res.data;
    return finalProducts;
};

const isNoParam = (filter, category, brand) => {
    return ((filter === undefined || filter === null || filter === "") &&
        (category === undefined || category === null || category === "") &&
        (brand === undefined || brand === null || brand === ""))
}

const checkParam = (param, paramName) => {
    if (param === undefined || param === null || param === "") {
        return ("");
    } else {
        return (`${paramName}=${param}&`);
    }
}

const createProducts = async (description, picture, name, brand, type, price, colour, quantity) => {
    const product = {
        name: name,
        brand: brand,
        picture: picture,
        description: description,
        price: price,
        colours: colour,
        quantity: quantity,
        category: type,
        date: Date.now()
    };
    axios.post(`http://${SERVER_URL}:8000/products`, product)
        .then(res => {
            console.log(res.data);
        })
    return ("success");
}

export {
    fetchAllProducts,
    createProducts,
};