import axios from 'axios';

const fetchNewProduct = async (productId) => {
    var finalProduct = [];
    const res = await axios.get(`http://localhost:8000/new_product`);
    finalProduct = res.data;
    return finalProduct;
}

export {
    fetchNewProduct,
};