const mongoose = require('mongoose');
const productSchema = require('../models/product');
// Model
const ProductCollection = mongoose.model('products', productSchema);


// fetchData
async function fetchProduct(req, res) {
    try {
        var query = {}
        if (req.query.filter != null)
            query = {
                ...query,
                $or: [{
                        name: {
                            $regex: (req.query.filter),
                            $options: "i"
                        }
                    },
                    {
                        brand: {
                            $regex: (req.query.filter),
                            $options: "i"
                        }
                    }
                ]
            }
        if (req.query.category != null)
            query = {
                ...query,
                category: req.query.category
            }
        if (req.query.brand != null)
            query = {
                ...query,
                brand: req.query.brand
            }
        console.log(query)
        // const Data = await ProductCollection.find(query);
        const Data = await ProductCollection.aggregate([{
            $match: query,
        }, {
            $sort: {
                "name": 1
            }
        }])
        res.send(Data);
    } catch (err) {
        console.log(err)
    }
}

// addData
async function postProduct(req, res) {
    const newProductData = new ProductCollection(req.body);
    newProductData.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Data has been saved");
        }
    });
    res.send("Success 200");
}


module.exports = {
    fetchProduct,
    postProduct
};