const express = require('express');
const mongoose = require('mongoose');
const dotenv =require("dotenv")
const productRoute = require('./routes/product.route')
dotenv.config()

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extende: false}))

//routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 

app.get('/', async (req, res) => {
    res.send('Hello from Node API')
  });

mongoose.connect(process.env.MONGO.URI)
.then(() => {
    console.log("Connected to the database!");
})
.catch(() => {
    console.log("Connection failed!");
});