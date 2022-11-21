import axios from 'axios';
import { SERVER_URL } from '../server_url.js'

const fetchNewProduct = async (productId) => {
    var finalProduct = [];
    const res = await axios.get(`http://${SERVER_URL}:8000/new_product`);
    finalProduct = res.data;
    return finalProduct;
}

export {
    fetchNewProduct,
};