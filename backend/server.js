import express from 'express';
import data from './data';
import userRoute from './routes/userRoute';
import connection from './database';

const app = express();
app.use("/api/v1/users",userRoute);
app.get('/api/v1/product/:id', (req,res) =>{
    const productId = req.params.id;
    res.send(data.products.find(x => x._id == productId));
    if(product)
        res.send(product);
    else
        res.status(404).send({ msg: "Product not found" });
});

app.get('/api/v1/products', (req,res) =>{
    res.send(data.products);
});


app.get('/api/v1/products/:category', (req,res) =>{
    const category =  req.params.category;
    if(category){
        const products = data.products.filter(x => x.category == category );
        if(products)
            res.send(products);
        else
            res.send(data.products);
    }
    res.send(data.products);
});

app.get("/api/v1/categories", (req,res)=>{
    const categories = data.products.map(x => x.category );
    res.send([...new Set(categories)]);
});
app.listen(5000,()=>{ console.log("Server Started at port 5000"); });