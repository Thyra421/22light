const mongoose = require('mongoose');
const productSchema = require('../models/product');
// Model
const ProductCollection = mongoose.model('products', productSchema);

// fetchData
async function fetchNewProduct(req, res) {
    try {
        const Data = await ProductCollection.find().sort({date: -1}).limit(6);
        res.send(Data);
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    fetchNewProduct,
};