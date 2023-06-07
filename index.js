const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userController = require('./controllers/userController');
const orderController = require('./controllers/orderController');

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on("error", () => {
    console.log("Error While connecting with mongoDB")
})
db.once("open", () => {
    console.log("Connection Established with mongoDB")
    init()
})

app.post('/register', userController.register);
app.post('/login', userController.login);
app.post('/order', orderController.createOrder);
app.get('/orders', orderController.getOrders);

function init() {
    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
}
