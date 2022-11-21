const express = require('express');

const { fetchProduct, postProduct } = require('../helpers/products');
const router = express.Router();

router.get('/', (req, res) => {
    fetchProduct(req, res)
})

router.post('/', (req, res) => {
    postProduct(req, res)
})

module.exports = router;