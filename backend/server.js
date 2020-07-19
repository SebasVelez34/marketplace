import express from 'express';
import data from './data';

const app = express();
app.listen(5000,()=>{ console.log("Server Started at port 5000"); });

app.get('/api/v1/products', (res,req) =>{
    res.send(data.products);
});