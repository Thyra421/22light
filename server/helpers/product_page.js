const mongoose = require('mongoose');
const productSchema = require('../models/product');
// Model
const ProductCollection = mongoose.model('products', productSchema);

// fetchData
async function fetchProduct(req, res) {
    try {
        var query = {}
        if (req.query.id != null)
            query = {
                ...query,
                _id: req.query.id
            }
        console.log(query)
        const Data = await ProductCollection.find(query);
        res.send(Data);
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    fetchProduct,
};