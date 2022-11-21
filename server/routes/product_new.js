const express = require('express');

const { fetchNewProduct } = require('../helpers/product_new');
const router = express.Router();

router.get('/', (req, res) => {
    fetchNewProduct(req, res)
})

module.exports = router;