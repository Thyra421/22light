import axios from 'axios';
import { SERVER_URL } from '../server_url.js'

const fetchProduct = async (productId) => {
    var finalProduct = [];
    const res = await axios.get(`http://${SERVER_URL}:8000/product_by_id?id=${checkProductId(productId)}`);
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