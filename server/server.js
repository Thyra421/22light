const express = require('express');
const app = express()
const mongoose = require('mongoose');

const cors = require('cors');
const bodyParser = require('body-parser');

const SERVER_URL = '8000'
const DB_URL = (process.env.DATABASE_URL)

// Routes Files
const products = require('./routes/products');
const page_product = require('./routes/product_page');
const new_product = require('./routes/product_new');
const auth = require('./routes/auth');

// CONNECTION
async function connect() {
    try {
        await mongoose.connect(DB_URL);
        console.log('Connected to mongodb');
    } catch (err) {
        console.error(err);
    }
}
connect();


// Start Server
app.use(cors())
app.use(bodyParser.json())

// routes
app.get('/', (_, res) => {
    return res.send("Server online")
})

// products routes
app.use("/products", products)
// page_product routes
app.use("/product_by_id", page_product)
// new_product routes
app.use("/new_product", new_product)
// auth Routes
app.use("/user", auth)

app.listen(SERVER_URL, () => {
    console.log(`Server listening at http://localhost:${SERVER_URL}`)
})