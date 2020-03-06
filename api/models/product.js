const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : { type: String, required : true },
    price: { type: Number, required : true },
    productImage: { type: String, required: true }
})

module.exports = mongoose.model('Product',productSchema)

//mongoose.model take two argument the first takes the name of the model you want to use internally and second takes the schmea you want to use for that model