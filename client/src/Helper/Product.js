import axios from 'axios';

const fetchProduct = async (productId) => {
    var finalProduct = [];
    const res = await axios.get(`http://localhost:8000/product_by_id?id=${checkProductId(productId)}`);
    finalProduct = res.data;
    return finalProduct;
}

const checkProductId = (productId) => {
    if (productId === undefined || productId === null || productId === "") {
        return ("");
    } else {
        return (productId);
    }
}

export {
    fetchProduct,
};