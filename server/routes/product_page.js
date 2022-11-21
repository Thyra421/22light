const express = require('express');

const { fetchProduct } = require('../helpers/product_page');
const router = express.Router();

router.get('/', (req, res) => {
    fetchProduct(req, res)
})

module.exports = router;