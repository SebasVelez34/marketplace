import express from 'express';
import Product from '../models/productModel';
const router = express.Router();

router.get('/byId/:id', async (req,res) =>{
    const product = await Product.findOne({ _id: req.params.id });
    if(product)
        res.send(product);
    else
        res.status(404).send({ msg: "Product not found" });
});

router.get('/', async (req,res) =>{
    res.send(await Product.find());
});

router.get('/byCategory/:category', async (req,res) =>{
    const category =  req.params.category;
    if(category){
        const products = await Product.find({
            category: {
                $regex: category,
                $options: 'i',
            }
        });
        if(products)
            res.send(products);
        else
            res.send(await Product.find());
    }
    res.send(await Product.find());
});

router.get('/search', async (req,res) =>{
    const searchKeyword = req.query.term
      ? {
          tags: {
            $regex: req.query.term,
            $options: 'i',
          },
        }
      : {};
    const products = await Product.find({...searchKeyword });
    if(!products){
        res.status(404).send({ msg: "None product found" });
    }
    res.send(products);
});

export default router;