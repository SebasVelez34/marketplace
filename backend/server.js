require('./database');
import express from 'express';
import data from './data';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json())
app.use("/api/v1/users",userRoute);
app.use("/api/v1/products",productRoute);

app.get("/api/v1/categories", (req,res)=>{
    const categories = data.products.map(x => x.category );
    res.send([...new Set(categories)]);
});

app.listen(5000,()=>{ console.log("Server Started at port 5000"); });