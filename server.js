const express = require('express');
const app = express();
const morgan = require('morgan');
const productRoutes = require('./api/routes/product')
const orderRoutes = require('./api/routes/order')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const URL = "mongodb://localhost:27017/rest-shop";    
mongoose.connect(URL);
const port = process.env.PORT || 3000;
console.log("Server Started");



app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use((req,res,next)=>{
    res.header("Access-control-allow-origin","*")
    res.header("Access-control-allow-origin","Origin, X-Requested-With, Content-Type, Accept, Authorization")
if (req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
    
}
next();
})
app.use('/product',productRoutes)   //so anything star with /product with send to router.get('/) in prdouct.js file 
app.use('/order',orderRoutes)

//Error Handling 
app.use((req,res,next) => {
const error = new Error ('Not Found');
error.status = 404;
next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        error:{
            message: error.message
        }
    })
})
app.listen(port);