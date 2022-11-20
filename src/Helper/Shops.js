import axios from 'axios';

let request = [
    "http://localhost:8000/products",
]


const fetchAllProducts = async (filter, category, brand) => {
    var finalProducts = [];

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
    axios.post(`http://localhost:8000/products`, product)
        .then(res => {
            console.log(res.data);
        })
    return ("success");
}

export {
    fetchAllProducts,
    createProducts,
};