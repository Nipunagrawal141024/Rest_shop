const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    product: {type: mongoose.Schema.Types.ObjectId, ref:'Product',require: true},
    // here ref Product is you want to create relation with and product is first argument which is used in product.js model
    quantity: {type: Number, default:1}
})

module.exports = mongoose.model('Order',orderSchema)

//mongoose.model take two argument the first takes the name of the model you want to use internally and second takes the schmea you want to use for that model