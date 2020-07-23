require('./database');
import express from 'express';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import cartRoute from './routes/cartRoute';
import bodyParser from 'body-parser';
import Product from './models/productModel';
import path from 'path';

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

//static serve
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/../frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    });
}



const port = process.env.PORT || 5000;

app.listen(port,()=>{ console.log(`Server Started at port ${port}`); });