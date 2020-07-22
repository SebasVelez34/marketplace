require('./database');
import express from 'express';
import data from './data';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import cartRoute from './routes/cartRoute';
import bodyParser from 'body-parser';
import Product from './models/productModel';

const app = express();
app.use(bodyParser.json())
app.use("/api/v1/users",userRoute);
app.use("/api/v1/products",productRoute);
app.use("/api/v1/cart",cartRoute);

app.get("/api/v1/categories", async (req,res)=>{
    const products = await Product.find();
    const categories = products.map(x => x.category );
    res.send([...new Set(categories)]);
});

app.listen(5000,()=>{ console.log("Server Started at port 5000"); });